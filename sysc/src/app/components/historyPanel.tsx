"use client"

import { Star, ChevronRight } from "lucide-react"

interface HistoryPanelProps {
  historyItems: string[]
  onClose: () => void
}

export default function HistoryPanel({ historyItems, onClose }: HistoryPanelProps) {
  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-80 lg:w-80 bg-white border-l border-gray-200 shadow-lg z-50">
      {/* Close Button */}
      <div
        style={{
          position: "absolute",
          left: "-44px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        className="hidden sm:block"
      >
        <div
          className="bg-green-500 text-white px-2 py-3 rounded-l-md cursor-pointer hover:bg-green-600 transition-colors flex flex-col items-center shadow-lg"
          onClick={onClose}
          style={{
            minWidth: "44px",
            boxShadow: "0 2px 8px 0 rgba(60, 60, 60, 0.15)",
            userSelect: "none",
          }}
        >
          <ChevronRight className="h-4 w-4 text-white mb-2" />
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

      {/* Panel Content */}
      <div className="h-full flex flex-col">
        <div className="p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-blue-500 text-blue-500 flex-shrink-0" />
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">Code Translation and Porting</h2>
          </div>
          {/* Mobile Close Button */}
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors sm:hidden">
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
          <div className="space-y-2 sm:space-y-3">
            {historyItems.map((item, index) => (
              <div
                key={index}
                className="p-2.5 sm:p-3 text-gray-700 hover:bg-gray-50 rounded cursor-pointer transition-colors text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
