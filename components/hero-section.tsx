"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music, FileMusic } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:50px_50px] opacity-5"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
        <div
          className={`md:w-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Sheet Music into
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
              {" "}
              Guitar Tabs
            </span>{" "}
            Instantly
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Our AI-powered technology converts standard music notation into precise guitar tablature with unmatched
            accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
              onClick={() => {
                document.getElementById("converter")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Try It Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>

        <div
          className={`md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30"></div>
            <div className="relative bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-cyan-400" />
                  <span className="font-medium">Sheet Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileMusic className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">Guitar Tabs</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded p-4 h-64 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sheet music notation example"
                    className="max-h-full"
                  />
                </div>
                <div className="bg-gray-800 rounded p-4 h-64 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Guitar tablature example"
                    className="max-h-full"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <div className="animate-pulse flex items-center justify-center gap-2 text-sm text-gray-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                  Converting in real-time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
