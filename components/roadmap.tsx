"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Zap, Music, FileMusic, Cpu, Globe } from "lucide-react"

export default function Roadmap() {
  return (
    <section id="roadmap" className="my-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Future Development</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We're constantly improving TabGenius with new features and capabilities. Here's what's coming next.
        </p>
      </div>

      <Tabs defaultValue="q2" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-gray-900/50 backdrop-blur-sm">
            <TabsTrigger value="q2" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              Q2 2025
            </TabsTrigger>
            <TabsTrigger
              value="q3"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              Q3 2025
            </TabsTrigger>
            <TabsTrigger value="q4" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
              Q4 2025
            </TabsTrigger>
            <TabsTrigger
              value="future"
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
            >
              2026+
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="q2" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced Instrument Support</h3>
              <p className="text-gray-400">
                Expanding our instrument library to include banjo, mandolin, and other stringed instruments with
                specialized tablature formats.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Model Upgrade</h3>
              <p className="text-gray-400">
                Implementing our next-generation neural network with improved recognition of complex musical notations
                and ornamentations.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <FileMusic className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App Beta</h3>
              <p className="text-gray-400">
                Launching our mobile application beta for iOS and Android, allowing on-the-go sheet music conversion
                with camera integration.
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="q3" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Style Recognition</h3>
              <p className="text-gray-400">
                Implementing genre and style detection to provide more accurate and stylistically appropriate tablature
                conversions.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaborative Editing</h3>
              <p className="text-gray-400">
                Introducing real-time collaborative editing features, allowing multiple musicians to work on the same
                tablature simultaneously.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
              <p className="text-gray-400">
                Major performance improvements to enable real-time conversion of longer and more complex musical pieces.
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="q4" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Music className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Audio to Tab</h3>
              <p className="text-gray-400">
                Revolutionary feature that converts audio recordings directly to tablature, bypassing the need for sheet
                music entirely.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <FileMusic className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pro Suite Launch</h3>
              <p className="text-gray-400">
                Introducing our professional suite with advanced editing tools, custom fingering algorithms, and
                professional-grade export options.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">API for Developers</h3>
              <p className="text-gray-400">
                Releasing our public API, allowing third-party developers to integrate TabGenius conversion capabilities
                into their applications.
              </p>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="future" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Composition Assistant</h3>
              <p className="text-gray-400">
                AI-powered tool that suggests musical variations and complementary parts based on your converted
                tablature.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AR Integration</h3>
              <p className="text-gray-400">
                Augmented reality features that overlay tablature on physical sheet music through your mobile device
                camera.
              </p>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 p-6 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Music Database</h3>
              <p className="text-gray-400">
                Creating the world's largest searchable database of sheet music and corresponding tablature for all
                string instruments.
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
