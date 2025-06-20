"use client"

import { Button } from "@/components/ui/button"
import MusicConverter from "@/components/music-converter"

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

        {/* Blocky Converter Tool */}
        <section id="converter" className="w-full bg-gray-100 border-2 border-black p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Convert Sheet Music to Tabs</h2>
          <p className="mb-4">Upload your sheet music and get instant guitar tablature. Beta version, basic melodies only.</p>
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