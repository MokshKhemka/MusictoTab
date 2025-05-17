"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Music, FileMusic, Zap, Layers } from "lucide-react"
import MusicConverter from "@/components/music-converter"
import FeatureShowcase from "@/components/feature-showcase"
import Roadmap from "@/components/roadmap"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              TabGenius
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
              How It Works
            </a>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              onClick={() => {
                document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Try Now
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Convert Sheet Music to Tabs
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Upload your sheet music and get instant guitar tablature. Currently in beta - supports basic melodies and clear sheet music images.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              onClick={() => {
                document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Try It Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Main Converter Tool */}
        <section id="converter" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Convert Sheet Music to Tabs</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Upload your sheet music and get instant guitar tablature. Currently in beta - supports basic melodies and clear sheet music images.
            </p>
          </div>

          <MusicConverter />
        </section>

        {/* Features */}
        <section id="features" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our beta version includes essential features for basic sheet music conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <FileMusic className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Image Processing</h3>
              <p className="text-gray-400">
                Upload PNG or JPG images of sheet music. Clear, well-formatted sheet music works best.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Basic Conversion</h3>
              <p className="text-gray-400">
                Convert simple melodies to guitar tabs. Currently supports standard tuning only.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Simple Output</h3>
              <p className="text-gray-400">
                Get clean, readable tab output. Basic formatting with string and fret positions.
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our system uses computer vision and music theory to convert sheet music to tabs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <FileMusic className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Sheet Music</h3>
              <p className="text-gray-400">
                Upload your sheet music in PNG or JPG format. Clear, well-formatted images work best.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Processing</h3>
              <p className="text-gray-400">
                Our system detects staff lines and notes using computer vision algorithms.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Generate Tabs</h3>
              <p className="text-gray-400">
                Convert detected notes to guitar tablature using music theory algorithms.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="my-24">
          <Card className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-none p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Now</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Upload your sheet music and get instant guitar tabs. Currently in beta - free to use.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Convert Sheet Music <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold">TabGenius</span>
              </div>
              <p className="text-gray-400">
                Converting sheet music to guitar tabs using AI and computer vision.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-cyan-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-cyan-400">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#converter" className="hover:text-cyan-400">
                    Converter
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:contact@tabgenius.app" className="hover:text-cyan-400">
                    contact@tabgenius.app
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MokshKhemka/MusictoTab/tree/main" className="hover:text-cyan-400">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} TabGenius. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  )
}