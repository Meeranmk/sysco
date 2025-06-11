"use client"

import { Code, Star, X } from "lucide-react"

interface SidebarProps {
  selectedItem: string
  setSelectedItem: (item: string) => void
  onMenuClick: () => void
  onClose?: () => void
}

const sidebarItems = [
  "Code Generation",
  "Code Refactoring",
  "Code Translation and Porting",
  "Code Completion and Suggestion",
  "Code Review",
  "Bug and Vulnerability Detection",
  "Compliance Checking",
  "Performance Analysis",
  "Test Case Generation",
  "Test Automation",
  "Documentation Generation",
  "Explanation and Summarization",
  "Personalized Recommendations",
  "User Interface Code Generation",
  "Intelligent Test Optimization",
]

export default function Sidebar({ selectedItem, setSelectedItem, onMenuClick, onClose }: SidebarProps) {
  return (
    <div className="w-72 sm:w-80 lg:w-72 bg-white flex flex-col font-sans h-screen shadow-lg lg:shadow-none">
      {/* Logo Header */}
      <div className="flex items-center justify-between px-4 sm:px-5 pt-4 sm:pt-5 pb-2">
        <div className="text-2xl sm:text-3xl font-bold leading-none select-none">
          <span className="text-[#009FE3]">S</span>
          <span className="text-green-500">y</span>
          <span className="text-[#009FE3]">sco</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="p-2 rounded-full bg-[#eaf7fb] cursor-pointer hover:bg-[#d4edfa] transition-colors"
            onClick={onMenuClick}
            title="Menu"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3.5" y="3.5" width="3" height="3" fill="currentColor" />
              <rect x="10.5" y="3.5" width="3" height="3" fill="currentColor" />
              <rect x="17.5" y="3.5" width="3" height="3" fill="currentColor" />
              <rect x="3.5" y="10.5" width="3" height="3" fill="currentColor" />
              <rect x="10.5" y="10.5" width="3" height="3" fill="currentColor" />
              <rect x="17.5" y="10.5" width="3" height="3" fill="currentColor" />
              <rect x="3.5" y="17.5" width="3" height="3" fill="currentColor" />
              <rect x="10.5" y="17.5" width="3" height="3" fill="currentColor" />
              <rect x="17.5" y="17.5" width="3" height="3" fill="currentColor" />
            </svg>
          </div>
          {/* Mobile Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors lg:hidden"
              title="Close"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* "Code" Section */}
      <div className="flex items-center gap-2 px-4 sm:px-5 pt-2 pb-2">
        <Code className="h-4 w-4 sm:h-5 sm:w-5 text-[#009FE3]" />
        <span className="font-semibold text-[#009FE3] text-base sm:text-lg">Code</span>
      </div>
      <div className="border-b border-gray-400 mx-4 sm:mx-5 mb-4 sm:mb-5" />

      {/* Scrollable Navigation Items */}
      <div className="px-3 sm:px-4 pb-4 overflow-y-auto flex-1">
        <div className="space-y-1">
          {sidebarItems.map((item, index) => {
            const isSelected = item === selectedItem
            return (
              <div
                key={index}
                className={`flex items-center gap-2 px-3 py-2.5 sm:py-2 rounded text-sm cursor-pointer transition-colors ${
                  isSelected ? "bg-[#009FE3] text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <Star
                  className={`h-4 w-4 flex-shrink-0 ${
                    isSelected ? "fill-white text-white" : "fill-[#009FE3] text-blue-500"
                  }`}
                />
                <span className="truncate text-xs sm:text-sm leading-relaxed">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
