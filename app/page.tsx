import Header from '@/components/Header'
import RenderSection from '@/components/RenderSection'
import { Zap, Shield, BarChart3, Upload } from 'lucide-react'
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Check Your File Render Time Instantly
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your file and get detailed insights about render time, size, and performance metrics in seconds.
          </p>
          <RenderSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose FileCheck?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant render time analysis for your files with our advanced processing system.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Secure & Reliable</h3>
              <p className="text-gray-600">
                Your files are analyzed securely with industry-standard encryption and best practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 mx-auto bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Detailed Analytics</h3>
              <p className="text-gray-600">
                Get comprehensive insights about your file's performance and optimization opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

