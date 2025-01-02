"use client"
import React, { useState } from 'react'
import { Upload } from 'lucide-react'

export default function RenderSection() {
    // State to store the render time
    const [renderTime, setRenderTime] = useState<number | null>(null)

    // Function to handle file upload and measure render time
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        const startTime = performance.now()

        const reader = new FileReader()

        reader.onloadend = () => {
            const endTime = performance.now()
            const timeTaken = (endTime - startTime).toFixed(2)  // Calculate render time
            setRenderTime(Number(timeTaken))  // Set the render time to state
        }

        // Read the file as a data URL (you can also use other methods like `readAsText`, `readAsArrayBuffer`, etc.)
        reader.readAsDataURL(file)
    }

    return (
        <div className="max-w-xl mx-auto space-y-4">
            <div className="relative">
                <input
                    type="file"
                    className="h-14 px-4 w-full  rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors file:hidden"
                    id="file-upload"
                    onChange={handleFileUpload}
                />
                <label
                    htmlFor="file-upload"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                    <Upload className="h-6 w-6 text-gray-400 mr-2" />
                    <span className="text-gray-600">Choose a file or drag and drop</span>
                </label>
            </div>
            {/* Show render time if available */}
            {renderTime !== null && (
                <div className="text-gray-600 mt-4">
                    File render time: <strong>{renderTime} ms</strong>
                </div>
            )}
        </div>
    )
}
