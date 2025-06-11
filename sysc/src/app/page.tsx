"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, Star } from "lucide-react"
import Sidebar from "@/app/components/sidebar"
import Header from "@/app/components/header"
import MenuOverview from "@/app/components/menuOverview"
import HistoryPanel from "@/app/components/historyPanel"
import UploadArea from "@/app/components/uploadArea"
import UploadedFilesList from "@/app/components/uploadList"
import SearchInput from "@/app/components/searchInput"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  uploadDate: string
}

export default function Page() {
  const [showMenu, setShowMenu] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [selectedItem, setSelectedItem] = useState("Code Translation and Porting")
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadedFileName, setUploadedFileName] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [historyItems, setHistoryItems] = useState<string[]>([
    "Java to Python",
    "Java2Py Translator",
    "Python to JavaScript Bridge",
    "Java to C# Migration",
    "TypeScript to JavaScript Simplifier",
    "PHP to Node Migration Tool",
    "Ruby to Python Code Adapter",
    "VB.NET to C# Conversion",
  ])
  const [searchInput, setSearchInput] = useState("")

  // Reset upload states after success message is shown
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (uploadSuccess) {
      timer = setTimeout(() => {
        setUploadSuccess(false)
        setUploadProgress(null)
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [uploadSuccess])

  // Close history panel when switching sidebar items
  useEffect(() => {
    setShowHistory(false)
  }, [selectedItem])

  // Close sidebar on mobile when item is selected
  useEffect(() => {
    setSidebarOpen(false)
  }, [selectedItem])

  // Updated: Accepts optional File parameter for drag-and-drop
  const handleFileUpload = (file?: File) => {
    if (!file) {
      // Open file dialog if no file is passed
      const input = document.createElement("input")
      input.type = "file"
      input.accept = ".zip,.rar,.7z"
      input.onchange = (e) => {
        const selectedFile = (e.target as HTMLInputElement).files?.[0]
        if (selectedFile) handleFileUpload(selectedFile)
      }
      input.click()
      return
    }

    setUploadedFileName(file.name)
    setUploadProgress(0)
    setUploadSuccess(false)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 10
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setUploadProgress(100)
        setTimeout(() => {
          setUploadSuccess(true)
          setUploadedFiles((prev) => [
            {
              id: Math.random().toString(36).substring(2, 15),
              name: file.name,
              size: file.size,
              type: file.type,
              uploadDate: new Date().toLocaleString(),
            },
            ...prev,
          ])
        }, 500)
      }
      setUploadProgress(Math.min(Math.round(progress), 100))
    }, 300)
  }

  const handleCancelUpload = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id))
  }

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      setHistoryItems((prev) => [searchInput.trim(), ...prev])
      setSearchInput("")
    }
  }

  // Check if current selected item should show history
  const shouldShowHistoryButton = selectedItem === "Code Translation and Porting"

  return (
    <div className="flex h-screen bg-gray-50 relative overflow-hidden">
      {/* Sidebar - Hidden on mobile unless open */}
      {!showMenu && (
        <div
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:relative z-50 lg:z-auto transition-transform duration-300 ease-in-out`}
        >
          <Sidebar
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            onMenuClick={() => setShowMenu(true)}
            onClose={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      {showMenu ? (
        <MenuOverview onBackClick={() => setShowMenu(false)} />
      ) : (
        <div className="flex-1 flex flex-col min-w-0">
          <Header selectedItem={selectedItem} onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

          <div className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-[#e3f2fd] via-[#f1f8e9] to-[#fffde7] overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              {selectedItem === "Code Translation and Porting" ? (
                <>
                  <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    Convert codebases between programming languages and frameworks. Handle dependencies and
                    compatibility during migration. Facilitate cross-platform development.
                  </p>

                  <UploadArea
                    uploadProgress={uploadProgress}
                    uploadSuccess={uploadSuccess}
                    uploadedFileName={uploadedFileName}
                    onFileUpload={handleFileUpload}
                  />

                  <SearchInput
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    onSubmit={handleSearchSubmit}
                  />

                  <UploadedFilesList uploadedFiles={uploadedFiles} onCancelUpload={handleCancelUpload} />
                </>
              ) : (
                <div className="text-center py-12 sm:py-20">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 sm:h-8 sm:w-8 fill-blue-500 text-blue-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 px-4">{selectedItem}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">This feature is coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* History Tab - Hidden on small screens */}
      {shouldShowHistoryButton && !showMenu && (
        <div className="hidden sm:block fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
          <div
            className="bg-green-500 text-white px-2 py-3 rounded-l-md cursor-pointer hover:bg-green-600 transition-colors flex flex-col items-center"
            onClick={() => setShowHistory(!showHistory)}
            style={{
              minWidth: "44px",
              boxShadow: "0 2px 8px 0 rgba(60, 60, 60, 0.10)",
              userSelect: "none",
            }}
          >
            <ChevronLeft className="h-4 w-4 text-white mb-2" />
            <span
              className="font-semibold text-base tracking-wide"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                letterSpacing: "0.05em",
                marginTop: "2px",
              }}
            >
              History
            </span>
          </div>
        </div>
      )}

      {/* History Panel - Responsive width */}
      {shouldShowHistoryButton && showHistory && (
        <HistoryPanel historyItems={historyItems} onClose={() => setShowHistory(false)} />
      )}
    </div>
  )
}
