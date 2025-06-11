"use client"

import { ChevronDown, BarChart3, Code, Wrench, TestTube, Rocket, Cloud, Activity, Monitor } from "lucide-react"

interface MenuOverviewProps {
  onBackClick: () => void
}

export default function MenuOverview({ onBackClick }: MenuOverviewProps) {
  const menuItems = [
    {
      icon: BarChart3,
      title: "Plan",
      description: "Define scope, gather requirements, and outline system architecture for efficient development.",
      color: "text-blue-500",
    },
    {
      icon: Code,
      title: "Code",
      description: "Develop application logic using clean, efficient, and scalable code that aligns with design specs.",
      color: "text-blue-500",
    },
    {
      icon: Wrench,
      title: "Build",
      description: "Compile code, resolve dependencies, and package the application into deployable artifacts.",
      color: "text-blue-500",
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Run automated and manual tests to ensure code quality, performance, and bug-free functionality.",
      color: "text-blue-500",
    },
    {
      icon: Rocket,
      title: "Release",
      description: "Approve and version the tested build for delivery to staging or production environments.",
      color: "text-blue-500",
    },
    {
      icon: Cloud,
      title: "Deploy",
      description: "Distribute and install the application in target environments using automated pipelines.",
      color: "text-blue-500",
    },
    {
      icon: Activity,
      title: "Operate",
      description: "Track system performance, usage, and health using logs, metrics, and alerts for proactive actions.",
      color: "text-blue-500",
    },
    {
      icon: Monitor,
      title: "Monitor",
      description: "Run automated and manual tests to ensure code quality, performance, and bug-free functionality.",
      color: "text-blue-500",
    },
  ]

  return (
    <div className="flex-1 bg-gradient-to-br from-[#e3f2fd] via-[#f1f8e9] to-[#fffde7] overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#e3f2fd] via-[#f1f8e9] to-[#fffde7] px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-bold">
            <span className="text-[#009FE3]">S</span>
            <span className="text-green-500">y</span>
            <span className="text-[#009FE3]">sco</span>
          </div>

          <div className="flex items-center gap-2">
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

      {/* Menu Grid */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-center mb-4 sm:mb-6">
          <button
            onClick={onBackClick}
            className="text-blue-500 hover:text-blue-700 flex items-center gap-2 font-medium cursor-pointer text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <item.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                <h3 className={`text-base sm:text-lg font-semibold ${item.color}`}>{item.title}</h3>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
