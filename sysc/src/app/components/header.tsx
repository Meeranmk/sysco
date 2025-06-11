"use client"

import { Star, ChevronDown, Menu } from "lucide-react"

interface HeaderProps {
  selectedItem: string
  onMenuToggle?: () => void
}

export default function Header({ selectedItem, onMenuToggle }: HeaderProps) {
  return (
    <div className="bg-gradient-to-br from-[#e3f2fd] via-[#f1f8e9] to-[#fffde7] px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          {/* Mobile Menu Button with enhanced visibility */}
          {onMenuToggle && (
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors lg:hidden flex-shrink-0 border border-gray-200"
              title="Open Menu"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          )}

          <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-blue-500 text-blue-500 flex-shrink-0" />
          <h1 className="text-base sm:text-xl font-semibold text-gray-900 truncate">{selectedItem}</h1>
          {selectedItem === "Code Translation and Porting" && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium flex-shrink-0 hidden sm:inline">
              New
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-gray-900">John Doe</div>
            <div className="text-xs text-gray-500">Project Manager</div>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">JD</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500 hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
