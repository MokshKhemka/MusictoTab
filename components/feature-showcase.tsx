"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, FileText, Settings, Cpu } from "lucide-react"

export default function FeatureShowcase() {
  return (
    <Tabs defaultValue="accuracy" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="bg-gray-900/50 backdrop-blur-sm">
          <TabsTrigger
            value="accuracy"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Accuracy
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400">
            <Cpu className="mr-2 h-4 w-4" />
            AI Engine
          </TabsTrigger>
          <TabsTrigger
            value="customization"
            className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
          >
            <Settings className="mr-2 h-4 w-4" />
            Customization
          </TabsTrigger>
          <TabsTrigger
            value="formats"
            className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-400"
          >
            <FileText className="mr-2 h-4 w-4" />
            Formats
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="accuracy" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Unmatched Accuracy</h3>
            <p className="text-gray-400 mb-6">
              Our proprietary neural network has been trained on millions of sheet music samples to ensure the highest
              possible accuracy in note recognition and tablature generation.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">99.8% note recognition accuracy</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Intelligent handling of complex musical passages</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Precise rhythm and timing preservation</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Advanced musical expression detection</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-cyan-500/20 rounded-lg blur-md"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Accuracy visualization"
                className="relative rounded max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="ai" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Advanced AI Engine</h3>
            <p className="text-gray-400 mb-6">
              Our cutting-edge AI engine uses deep learning to understand musical context and generate optimal tablature
              for any instrument.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Cpu className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Neural network trained on 10+ million musical pieces</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Cpu className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Contextual understanding of musical phrases</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Cpu className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Adaptive learning from user feedback</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Cpu className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Real-time processing capabilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-purple-500/20 rounded-lg blur-md"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="AI engine visualization"
                className="relative rounded max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="customization" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Extensive Customization</h3>
            <p className="text-gray-400 mb-6">
              Tailor the conversion process to your specific needs with our comprehensive customization options.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Settings className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Multiple instrument and tuning options</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Settings className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Adjustable difficulty levels for playability</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Settings className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Fingering and technique suggestions</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <Settings className="h-3 w-3 text-cyan-400" />
                </div>
                <span className="text-gray-300">Custom notation styles and formats</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-cyan-500/20 rounded-lg blur-md"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Customization options"
                className="relative rounded max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="formats" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Multiple Format Support</h3>
            <p className="text-gray-400 mb-6">
              Import and export your music in a wide variety of formats to seamlessly integrate with your existing
              workflow.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <FileText className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Import: PDF, PNG, JPG, MusicXML, MIDI</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <FileText className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Export: PDF, Guitar Pro, TXT, MusicXML, PNG</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <FileText className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Integration with popular music software</span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 mt-0.5">
                  <FileText className="h-3 w-3 text-purple-400" />
                </div>
                <span className="text-gray-300">Cloud storage and sharing capabilities</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-purple-500/20 rounded-lg blur-md"></div>
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Format support visualization"
                className="relative rounded max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
