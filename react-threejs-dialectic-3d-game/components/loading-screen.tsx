"use client"

import { Html } from "@react-three/drei"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  // Use a ref to track if the component is mounted
  useEffect(() => {
    let mounted = true
    let rafId: number

    const updateProgress = () => {
      if (!mounted) return

      // Simulate progress increase
      setProgress((prev) => {
        const newProgress = Math.min(prev + 1, 100)
        if (newProgress < 100) {
          rafId = requestAnimationFrame(updateProgress)
        }
        return newProgress
      })
    }

    rafId = requestAnimationFrame(updateProgress)

    return () => {
      mounted = false
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-white text-sm font-medium">Loading classroom... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}
