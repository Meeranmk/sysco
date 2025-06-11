"use client"

import { ArrowRight } from "lucide-react"

interface SearchInputProps {
  searchInput: string
  setSearchInput: (value: string) => void
  onSubmit: () => void
}

export default function SearchInput({ searchInput, setSearchInput, onSubmit }: SearchInputProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-0">
      <input
        type="text"
        placeholder="Input what languages or framework you need to convert?"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSubmit()}
        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
      />
      <button
        onClick={onSubmit}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2.5 sm:py-3 rounded-lg transition-colors flex items-center justify-center sm:w-auto"
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        <span className="ml-2 sm:hidden">Submit</span>
      </button>
    </div>
  )
}
