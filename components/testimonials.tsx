"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Professional Guitarist",
    content:
      "TabGenius has completely transformed my workflow. I can now convert complex sheet music to tabs in seconds, saving me hours of manual transcription.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Williams",
    role: "Music Teacher",
    content:
      "As a music educator, I need to create tabs for my students regularly. TabGenius makes this process incredibly simple and the results are always accurate.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "Composer",
    content:
      "The AI behind TabGenius is remarkable. It understands musical context and generates tabs that are not just accurate but also optimized for playability.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Emily Rodriguez",
    role: "Studio Musician",
    content:
      "I've tried many conversion tools, but TabGenius is in a league of its own. The customization options allow me to get exactly the tabs I need for any project.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="my-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Musicians Are Saying</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join thousands of satisfied musicians who have transformed their workflow with TabGenius.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-cyan-400" : "bg-gray-700"}`}
                ></div>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="overflow-hidden">
            <div className={`transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="relative">
                      <div className="absolute -top-6 left-0 text-6xl text-cyan-500/20">"</div>
                      <p className="text-xl relative z-10 leading-relaxed">{testimonials[currentIndex].content}</p>
                      <div className="absolute -bottom-16 right-0 text-6xl text-cyan-500/20">"</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
