"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Music, FileMusic, Zap, Layers } from "lucide-react"
import MusicConverter from "@/components/music-converter"
import FeatureShowcase from "@/components/feature-showcase"
import Testimonials from "@/components/testimonials"
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
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
              Roadmap
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
        <HeroSection />

        {/* Main Converter Tool */}
        <section id="converter" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Music</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-powered engine converts standard sheet music notation into precise guitar tablature in seconds.
            </p>
          </div>

          <MusicConverter />
        </section>

        {/* Features */}
        <section id="features" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              TabGenius uses cutting-edge technology to deliver accurate and customizable tabs.
            </p>
          </div>

          <FeatureShowcase />
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="my-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proprietary algorithm analyzes sheet music with precision and converts it to tablature format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <FileMusic className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Sheet Music</h3>
              <p className="text-gray-400">
                Upload your sheet music in various formats including PDF, PNG, or use our integrated notation editor.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Processing</h3>
              <p className="text-gray-400">
                Our neural network analyzes the notation, identifies notes, rhythms, and musical expressions.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Generate Tabs</h3>
              <p className="text-gray-400">
                Receive optimized guitar tablature with multiple string and fingering options for playability.
              </p>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Roadmap */}
        <Roadmap />

        {/* CTA */}
        <section className="my-24">
          <Card className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border-none p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Music?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join thousands of musicians who are already using TabGenius to convert their sheet music to tabs.
              </p>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => {
                  document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Try TabGenius Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-800 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Music className="h-6 w-6 text-cyan-400" />
                <span className="text-xl font-bold">TabGenius</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing how musicians translate sheet music to tablature with AI technology.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400">
                    Terms
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