"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileUp, FileText, Settings, Download } from "lucide-react"

export default function MusicConverter() {
  const [isDragging, setIsDragging] = useState(false)
  const [isConverting, setIsConverting] = useState(false)
  const [isConverted, setIsConverted] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Simulate file upload
    simulateConversion()
  }

  const handleFileUpload = () => {
    // Simulate file upload
    simulateConversion()
  }

  const simulateConversion = () => {
    setIsConverting(true)
    // Simulate processing time
    setTimeout(() => {
      setIsConverting(false)
      setIsConverted(true)
    }, 2000)
  }

  return (
    <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
      <Tabs defaultValue="upload" className="w-full">
        <div className="border-b border-gray-800">
          <TabsList className="bg-transparent w-full justify-start px-4 h-16">
            <TabsTrigger value="upload" className="data-[state=active]:bg-gray-800">
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="editor" className="data-[state=active]:bg-gray-800">
              <FileText className="mr-2 h-4 w-4" />
              Editor
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gray-800">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="upload" className="p-0 m-0">
          <div className="p-6">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${isDragging ? "border-cyan-500 bg-cyan-500/10" : "border-gray-700 hover:border-gray-600"}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                  <FileUp className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Sheet Music</h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Drag and drop your sheet music file here, or click to browse. We support PDF, PNG, JPG, and MusicXML
                  formats.
                </p>
                <Button onClick={handleFileUpload}>Select File</Button>
              </div>
            </div>

            {isConverting && (
              <div className="mt-8">
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 w-2/3 animate-pulse"></div>
                </div>
                <div className="mt-4 text-center text-gray-400">
                  Converting your sheet music... This may take a few moments.
                </div>
              </div>
            )}

            {isConverted && (
              <div className="mt-8">
                <Card className="bg-gray-800 border-gray-700 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Conversion Complete</h3>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="bg-black rounded p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                    <pre>{`e|-------0--------|-------3--------|
B|-----0---0------|-----0---0------|
G|---0-------0----|---0-------0----|
D|-2-------------0|-0--------------|
A|-----------------|----------------|
E|-----------------|----------------|`}</pre>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="editor" className="p-0 m-0">
          <div className="p-6 min-h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold mb-2">Music Notation Editor</h3>
              <p className="max-w-md mx-auto mb-4">
                Our interactive editor allows you to create or modify sheet music directly in your browser.
              </p>
              <Button>Launch Editor</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="p-0 m-0">
          <div className="p-6 min-h-[400px]">
            <h3 className="text-xl font-bold mb-4">Conversion Settings</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700 p-4">
                <h4 className="font-medium mb-3">Instrument Configuration</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Instrument Type</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded p-2">
                      <option>Guitar (Standard Tuning)</option>
                      <option>Guitar (Drop D)</option>
                      <option>Bass (4 String)</option>
                      <option>Ukulele</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">String Count</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded p-2">
                      <option>6 Strings</option>
                      <option>7 Strings</option>
                      <option>4 Strings</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-4">
                <h4 className="font-medium mb-3">Conversion Options</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Difficulty Level</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded p-2">
                      <option>Beginner-Friendly</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                      <option>Exact Transcription</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Notation Style</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded p-2">
                      <option>Standard Tab</option>
                      <option>Tab + Rhythm</option>
                      <option>Tab + Standard Notation</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-4">
                <h4 className="font-medium mb-3">Output Format</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">File Format</label>
                    <select className="w-full bg-gray-900 border border-gray-700 rounded p-2">
                      <option>PDF</option>
                      <option>Guitar Pro</option>
                      <option>Plain Text</option>
                      <option>MusicXML</option>
                    </select>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800 border-gray-700 p-4">
                <h4 className="font-medium mb-3">Advanced Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" id="include-fingering" className="mr-2" />
                    <label htmlFor="include-fingering" className="text-sm">
                      Include fingering suggestions
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="optimize-playability" className="mr-2" />
                    <label htmlFor="optimize-playability" className="text-sm">
                      Optimize for playability
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="include-techniques" className="mr-2" />
                    <label htmlFor="include-techniques" className="text-sm">
                      Include playing techniques
                    </label>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" className="mr-2">
                Reset to Default
              </Button>
              <Button>Save Settings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
