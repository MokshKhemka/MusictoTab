"use client"

import { Button } from "@/components/ui/button"
import MusicConverter from "@/components/music-converter"
import { useState } from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 text-black font-sans">
      <div className="w-full max-w-4xl mx-auto px-0 py-0">
        {/* Blocky Navigation */}
        <nav className="w-full flex justify-between items-center bg-gray-400 border-b-2 border-black p-4 mb-8">
          <div className="font-extrabold text-2xl tracking-tight">TabGenius</div>
          <div className="flex gap-4">
            <a href="#features" className="px-2 py-1 bg-gray-300 border border-black text-black">Features</a>
            <a href="#how-it-works" className="px-2 py-1 bg-gray-300 border border-black text-black">How It Works</a>
            <Button className="px-2 py-1 bg-gray-300 border border-black text-black shadow-none rounded-none" style={{boxShadow: 'none', borderRadius: 0}} onClick={() => {document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })}}>Try Now</Button>
          </div>
        </nav>

        {/* Blocky Hero Section */}
        <section className="w-full bg-gray-300 border-2 border-black p-8 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Convert Sheet Music to Tabs</h1>
          <p className="text-lg mb-6">Upload your sheet music and get instant guitar tablature. Beta version, basic melodies only.</p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-gray-400 border border-black text-black px-4 py-2 shadow-none rounded-none" style={{boxShadow: 'none', borderRadius: 0}} onClick={() => {document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })}}>Try It Now</Button>
            <Button className="bg-white border border-black text-black px-4 py-2 shadow-none rounded-none" style={{boxShadow: 'none', borderRadius: 0}} onClick={() => {document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}}>Learn More</Button>
          </div>
        </section>

        {/* Text to Tabs Section */}
        <TextToTabsBox />

        {/* Blocky Converter Tool */}
        <section id="converter" className="w-full bg-gray-100 border-2 border-black p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">Image to Tabs <span className="bg-yellow-300 text-black px-2 py-1 text-xs font-bold border border-black ml-2">BETA</span></h2>
          <p className="mb-4 text-red-700 font-semibold">I'm still working on this feature; The basic capability is there but please use the text input for better results. Thanks </p>
          <MusicConverter />
        </section>

        {/* Blocky Features */}
        <section id="features" className="w-full bg-gray-300 border-2 border-black p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Current Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 border-2 border-black p-4">
              <h3 className="font-bold mb-2">Image Processing</h3>
              <p>Upload PNG or JPG images of sheet music. Clear, well-formatted sheet music works best.</p>
            </div>
            <div className="bg-gray-100 border-2 border-black p-4">
              <h3 className="font-bold mb-2">Basic Conversion</h3>
              <p>Convert simple melodies to guitar tabs. Standard tuning only.</p>
            </div>
            <div className="bg-gray-100 border-2 border-black p-4">
              <h3 className="font-bold mb-2">Simple Output</h3>
              <p>Get clean, readable tab output. Basic formatting with string and fret positions.</p>
            </div>
          </div>
        </section>

        {/* Blocky How It Works */}
        <section id="how-it-works" className="w-full bg-gray-100 border-2 border-black p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-300 border-2 border-black p-4">
              <h3 className="font-bold mb-2">Upload Sheet Music</h3>
              <p>Upload your sheet music in PNG or JPG format. Clear, well-formatted images work best.</p>
            </div>
            <div className="bg-gray-300 border-2 border-black p-4">
              <h3 className="font-bold mb-2">AI Processing</h3>
              <p>Our system detects staff lines and notes using computer vision algorithms.</p>
            </div>
            <div className="bg-gray-300 border-2 border-black p-4">
              <h3 className="font-bold mb-2">Generate Tabs</h3>
              <p>Convert detected notes to guitar tablature using music theory algorithms.</p>
            </div>
          </div>
        </section>

        {/* Blocky CTA */}
        <section className="w-full bg-gray-400 border-2 border-black p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Try It Now</h2>
          <p className="mb-4">Upload your sheet music and get instant guitar tabs. Beta version, free to use.</p>
          <Button className="bg-gray-300 border border-black text-black px-4 py-2 shadow-none rounded-none" style={{boxShadow: 'none', borderRadius: 0}} onClick={() => {document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })}}>Convert Sheet Music</Button>
        </section>

        {/* Blocky Footer */}
        <footer className="w-full bg-gray-300 border-t-2 border-black p-4 text-center">
          <div className="font-bold">TabGenius</div>
          <div className="text-sm">Converting sheet music to guitar tabs using AI and computer vision.</div>
        </footer>
      </div>
    </main>
  )
}

function TextToTabsBox() {
  const [input, setInput] = useState("");
  const [tabs, setTabs] = useState<string[]>(["E|--------|", "A|--------|", "D|--------|", "G|--------|", "B|--------|", "e|--------|"]);

  // Mapping: note name (case-insensitive) to [string index, fret number]
  const noteToTab: Record<string, [number, number]> = {
    "e": [0, 0], // 6th string open
    "a": [1, 0], // 5th string open
    "d": [2, 0], // 4th string open
    "g": [3, 0], // 3rd string open
    "b": [4, 0], // 2nd string open
    "e1": [5, 0], // 1st string open (use e1 for 1st string)
    "f": [0, 1], // F: 1st fret, 6th string
    "b2": [1, 2], // B: 2nd fret, 5th string
    "c2": [4, 1], // C: 1st fret, 2nd string
    "f1": [5, 1], // F: 1st fret, 1st string
    "g3": [0, 3], // G: 3rd fret, 6th string
    "c3": [1, 3], // C: 3rd fret, 5th string
    "e2": [2, 2], // E: 2nd fret, 4th string
    "f3": [2, 3], // F: 3rd fret, 4th string
    "a2": [3, 2], // A: 2nd fret, 3rd string
    "d3": [4, 3], // D: 3rd fret, 2nd string
    "g1": [5, 3], // G: 3rd fret, 1st string
  };

  // Standard tuning string names (from low E to high E)
  const stringNames = ["E", "A", "D", "G", "B", "e"];

  function handleConvert() {
    const notes = input.split(/[\s,]+/).filter(Boolean);
    // Start with empty tab lines
    const tabLines = stringNames.map((name) => name + "|");
    let foundAny = false;
    notes.forEach((noteRaw) => {
      const note = noteRaw.trim().toLowerCase();
      let mapping = noteToTab[note];
      if (!mapping) {
        // Try open string (e, a, d, g, b, e1)
        if (["e", "a", "d", "g", "b", "e1"].includes(note)) {
          mapping = noteToTab[note];
        }
      }
      if (mapping) {
        foundAny = true;
        for (let i = 0; i < tabLines.length; i++) {
          if (i === mapping[0]) {
            tabLines[i] += mapping[1] + "-";
          } else {
            tabLines[i] += "-";
          }
        }
      } else {
        // Unknown note, put dash on all strings
        for (let i = 0; i < tabLines.length; i++) {
          tabLines[i] += "-";
        }
      }
    });
    // If no notes or all unrecognized, show all dashes
    if (notes.length === 0 || !foundAny) {
      setTabs(["E|--------|", "A|--------|", "D|--------|", "G|--------|", "B|--------|", "e|--------|"]);
    } else {
      setTabs(tabLines.map((line) => line + "|"));
    }
  }

  return (
    <section id="text-to-tabs" className="w-full bg-gray-100 border-2 border-black p-8 mb-8">
      <h2 className="text-2xl font-bold mb-2">Text to Tabs</h2>
      <p className="mb-4">Paste or type your notes below to generate guitar tabs instantly.</p>
      <textarea
        className="w-full border-2 border-black p-2 mb-4 bg-white text-black"
        rows={4}
        placeholder="Type notes here (e.g., E, F, G3, C2, etc.)..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-gray-400 border border-black text-black px-4 py-2 shadow-none rounded-none"
        onClick={handleConvert}
      >
        Convert to Tabs
      </button>
      <div className="mt-6 bg-white border-2 border-black p-4 font-mono text-lg">
        {tabs.map((line, i) => (
          <div key={i} style={{ whiteSpace: "pre" }}>{line}</div>
        ))}
      </div>
    </section>
  );
}
