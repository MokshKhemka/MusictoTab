"use client"

import { useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X, Eye, Download, Image, Type } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Note to tab mapping
const noteToTab: { [key: string]: string } = {
  'C': '0',
  'D': '2',
  'E': '0',
  'F': '1',
  'G': '3',
  'A': '0',
  'B': '2'
}

// Helper: note name to MIDI number
const NOTE_TO_MIDI: { [key: string]: number } = {
  'c': 0, 'c#': 1, 'db': 1, 'd': 2, 'd#': 3, 'eb': 3, 'e': 4, 'f': 5, 'f#': 6, 'gb': 6, 'g': 7, 'g#': 8, 'ab': 8, 'a': 9, 'a#': 10, 'bb': 10, 'b': 11
}

// Standard tuning: [string name, open note name, open note octave]
const STRING_TUNING: [string, string, number][] = [
  ['e', 'e', 4], // high e
  ['B', 'b', 3],
  ['G', 'g', 3],
  ['D', 'd', 3],
  ['A', 'a', 2],
  ['E', 'e', 2], // low E
]

function noteToMidi(note: string, octave: number) {
  return 12 * (octave + 1) + NOTE_TO_MIDI[note.toLowerCase()]
}

function parseNoteInput(input: string): {note: string, accidental: string, octave: number} | null {
  // e.g., f#4, bb3, e4
  const match = input.match(/^([a-gA-G])([#b]?)(\d)$/)
  if (!match) return null
  const [, note, accidental, octave] = match
  return { note: note.toLowerCase() + accidental.toLowerCase(), accidental, octave: parseInt(octave, 10) }
}

// Tab display component
function TabDisplay({ tabs }: { tabs: string[] }) {
  return (
    <pre className="font-mono text-lg leading-7 bg-transparent p-0 m-0">
      {tabs.map((line, i) => (
        <div key={i} style={{ whiteSpace: 'pre' }}>
          {line}
        </div>
      ))}
    </pre>
  )
}

// Convert text input to tabs
function convertTextToTabs(text: string): string[] {
  const notes = text.split(/[\s,]+/).filter(note => note.trim())
  // Build a tab line for each string
  const tabLines = STRING_TUNING.map(([stringName]) => stringName + '|')

  notes.forEach(input => {
    const parsed = parseNoteInput(input)
    if (!parsed) {
      // Invalid note, put dash on all strings
      for (let i = 0; i < tabLines.length; i++) tabLines[i] += '-'
      return
    }
    const midi = noteToMidi(parsed.note, parsed.octave)
    // Find all possible strings/frets
    let bestString = -1
    let bestFret = 100
    STRING_TUNING.forEach(([stringName, openNote, openOctave], idx) => {
      const stringMidi = noteToMidi(openNote, openOctave)
      const fret = midi - stringMidi
      if (fret >= 0 && fret <= 24) { // 24 frets max
        // Prefer lower string if fret is the same or lower
        if (
          fret < bestFret ||
          (fret === bestFret && idx > bestString)
        ) {
          bestString = idx
          bestFret = fret
        }
      }
    })
    for (let i = 0; i < tabLines.length; i++) {
      if (i === bestString) {
        tabLines[i] += bestFret + '-'
      } else {
        tabLines[i] += '-'
      }
    }
  })
  return tabLines.map(line => line + '|')
}

// Fake image-to-notes function for MVP
function fakeImageToNotes(_img: File): string[] {
  // For demo: return a hardcoded or random sequence
  const demoSequences = [
    ['e4', 'g4', 'c4', 'd4', 'e4'],
    ['a3', 'b3', 'c4', 'd4', 'e4'],
    ['e4', 'e4', 'b3', 'g4', 'e4'],
    ['c4', 'e4', 'g4', 'c5'],
  ]
  // Pick one at random
  return demoSequences[Math.floor(Math.random() * demoSequences.length)]
}

export default function MusicConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [tabs, setTabs] = useState<string[] | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [textInput, setTextInput] = useState("")
  const [activeTab, setActiveTab] = useState("image")

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === "image/png" || droppedFile.type === "image/jpeg")) {
      setFile(droppedFile)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target?.result as string)
      reader.readAsDataURL(droppedFile)
    } else {
      setError("Please upload a PNG or JPG image")
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg")) {
      setFile(selectedFile)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target?.result as string)
      reader.readAsDataURL(selectedFile)
    } else {
      setError("Please upload a PNG or JPG image")
    }
  }, [])

  const handleConvert = useCallback(async () => {
    if (activeTab === "image" && !file) return
    if (activeTab === "text" && !textInput.trim()) {
      setError("Please enter some notes")
      return
    }

    try {
      setIsProcessing(true)
      setError(null)

      if (activeTab === "image") {
        // Fake image-to-notes for MVP
        const detectedNotes = fakeImageToNotes(file!)
        const tabStrings = convertTextToTabs(detectedNotes.join(' '))
        setTabs(tabStrings)
      } else {
        // Convert text input to tabs
        const tabStrings = convertTextToTabs(textInput)
        setTabs(tabStrings)
      }
    } catch (err) {
      setError("Error processing input. Please try again.")
      console.error(err)
    } finally {
      setIsProcessing(false)
    }
  }, [file, textInput, activeTab])

  const handleClear = useCallback(() => {
    if (activeTab === "image") {
      setFile(null)
      setPreview(null)
    } else {
      setTextInput("")
    }
    setError(null)
    setTabs(null)
  }, [activeTab])

  const handleDownload = useCallback((format: 'png' | 'jpeg') => {
    if (!tabs) return

    // Create a canvas element
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 800
    canvas.height = 400

    // Fill background
    ctx.fillStyle = '#1f2937'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Set text style
    ctx.font = '24px monospace'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'

    // Draw tabs
    const lineHeight = 40
    const startY = 50
    tabs.forEach((line, i) => {
      // Draw string name
      ctx.fillStyle = '#22d3ee'
      ctx.textAlign = 'left'
      ctx.fillText(line[0], 20, startY + i * lineHeight)

      // Draw tab lines and numbers
      ctx.fillStyle = '#ffffff'
      ctx.textAlign = 'center'
      const chars = line.slice(2, -1).split('')
      const charWidth = (canvas.width - 100) / chars.length
      chars.forEach((char, j) => {
        const x = 100 + j * charWidth
        const y = startY + i * lineHeight
        if (char !== '-') {
          ctx.fillText(char, x, y)
        }
        // Draw horizontal line
        ctx.beginPath()
        ctx.strokeStyle = '#4b5563'
        ctx.moveTo(50, y + 5)
        ctx.lineTo(canvas.width - 50, y + 5)
        ctx.stroke()
      })
    })

    // Convert to image and download
    const link = document.createElement('a')
    link.download = `guitar-tabs.${format}`
    link.href = canvas.toDataURL(`image/${format}`)
    link.click()
  }, [tabs])

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-gray-900/50 border-gray-800 backdrop-blur-sm">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Upload
            </TabsTrigger>
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Text Input
            </TabsTrigger>
          </TabsList>

          <TabsContent value="image">
            <div
              className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {!preview ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Upload Sheet Music</h3>
                    <p className="text-gray-400 mb-4">
                      Drag and drop your sheet music image, or click to browse
                    </p>
                    <input
                      type="file"
                      accept="image/png,image/jpeg"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <Button
                      onClick={() => document.getElementById("file-upload")?.click()}
                      className="bg-cyan-500 hover:bg-cyan-600"
                    >
                      Select File
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={preview}
                      alt="Sheet music preview"
                      className="max-h-96 mx-auto rounded-lg"
                    />
                    <button
                      onClick={handleClear}
                      className="absolute top-2 right-2 p-1 rounded-full bg-gray-900/80 hover:bg-gray-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    onClick={handleConvert}
                    disabled={isProcessing}
                    className="bg-cyan-500 hover:bg-cyan-600"
                  >
                    {isProcessing ? "Processing..." : "Convert to Tabs"}
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="text">
            <div className="space-y-4">
              <div className="border-2 border-gray-700 rounded-lg p-4">
                <Textarea
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="Enter notes (e.g., e4, b2, f#3, etc.)"
                  className="min-h-[200px] font-mono"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Enter notes in the format: string+fret (e.g., e4, b2, f#3). Separate notes with spaces or commas.
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  onClick={handleConvert}
                  disabled={isProcessing}
                  className="bg-cyan-500 hover:bg-cyan-600"
                >
                  {isProcessing ? "Processing..." : "Convert to Tabs"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {tabs && (
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Generated Tabs</h3>
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Tab Preview</DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-800/50 p-6 rounded-lg overflow-auto max-h-[80vh]">
                      <TabDisplay tabs={tabs} />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('png')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  PNG
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload('jpeg')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  JPEG
                </Button>
              </div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <TabDisplay tabs={tabs} />
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Note: This is a demonstration output. The actual conversion will be implemented in future updates.
            </p>
          </div>
        )}
      </Card>
    </div>
  )
}

