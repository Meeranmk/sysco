"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle } from "lucide-react"

interface UploadAreaProps {
  uploadProgress: number | null
  uploadSuccess: boolean
  uploadedFileName: string
  onFileUpload: (file?: File) => void
}

export default function UploadArea({ uploadProgress, uploadSuccess, uploadedFileName, onFileUpload }: UploadAreaProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      onFileUpload(file)
    }
  }

  return (
    <div
      className={`border-2 border-dashed ${
        dragActive
          ? "border-blue-500 bg-blue-50"
          : uploadProgress !== null
            ? "border-blue-400"
            : "border-gray-300 hover:border-blue-400"
      } rounded-lg bg-gradient-to-br from-[#e3f2fd] via-[#f1f8e9] to-[#fffde7] mb-6 sm:mb-8 cursor-pointer transition-colors`}
      onClick={uploadProgress === null ? () => onFileUpload() : undefined}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{ position: "relative" }}
    >
      <div className="p-8 sm:p-12 lg:p-20 text-center select-none">
        {uploadProgress === null ? (
          <>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
            </div>
            <div className="text-gray-700">
              <div className="font-medium mb-1 text-sm sm:text-base">Click to upload or</div>
              <div className="text-sm sm:text-base">Drag and Drop your code file in Zipped Format</div>
            </div>
          </>
        ) : uploadSuccess ? (
          <>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            </div>
            <div className="text-gray-700">
              <div className="font-medium mb-1 text-green-600 text-sm sm:text-base">File Uploaded Successfully</div>
              <div className="text-xs sm:text-sm text-gray-500 truncate px-4">{uploadedFileName}</div>
            </div>
          </>
        ) : (
          <>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <div className="relative">
                <svg className="w-10 h-10 sm:w-12 sm:h-12">
                  <circle
                    className="text-gray-200"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="18"
                    cx="20"
                    cy="20"
                  />
                  <circle
                    className="text-blue-500"
                    strokeWidth="4"
                    strokeDasharray={113}
                    strokeDashoffset={113 - (113 * (uploadProgress || 0)) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="18"
                    cx="20"
                    cy="20"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  {uploadProgress}%
                </span>
              </div>
            </div>
            <div className="text-gray-700">
              <div className="font-medium mb-1 text-sm sm:text-base">Uploading...</div>
              <div className="text-xs sm:text-sm text-gray-500 truncate px-4">{uploadedFileName}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
