"use client"

import { Upload, Trash2 } from "lucide-react"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: string
}

interface UploadedFilesListProps {
  uploadedFiles: UploadedFile[]
  onCancelUpload: (id: string) => void
}

export default function UploadedFilesList({ uploadedFiles, onCancelUpload }: UploadedFilesListProps) {
  if (uploadedFiles.length === 0) return null

  return (
    <div className="mt-6 sm:mt-8">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Uploaded Files</h3>
      <div className="space-y-3">
        {uploadedFiles.map((file) => (
          <div
            key={file.id}
            className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Upload className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-gray-900 text-sm sm:text-base truncate">{file.name}</div>
                <div className="text-xs sm:text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB • Uploaded on {file.uploadDate}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Uploaded</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onCancelUpload(file.id)
                }}
                className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-full transition-colors"
                title="Remove file"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
