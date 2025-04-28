"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
        <div className="absolute h-12 w-12 rounded-full border-2 border-r-transparent border-white animate-spin animate-reverse"></div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-lg font-medium text-white"
      >
        Secure loading with GetXCloud
      </motion.p>
    </motion.div>
  )
}
