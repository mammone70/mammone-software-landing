"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FramerSpotlight from "./framer-spotlight"
import CssGridBackground from "./css-grid-background"

export default function Navigation() {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md cursor-default"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CssGridBackground/>
          <FramerSpotlight/>
    
      <div className="container mx-auto px-4">
      
        <div className="flex items-center justify-between px-2 pt-4 h-16">
          {/* Logo */}
          <motion.div className="flex align-middle items-center space-x-2" whileHover={{ scale: 1.05 }}>
            {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div> */}
            <span className="text-white font-bold text-xl">Mammone Software</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-300 font-bold hover:text-blue-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="text-slate-300 hover:text-white"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* <Button className="hidden md:flex bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold border-0 rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"> */}
                         <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold border-0 rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              Get Quote
              <ArrowRight className="ml-2 h-5 w-5" />

              {/* <Badge variant="secondary" className="ml-2 bg-blue-500 text-white text-xs">
                Free
              </Badge> */}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-slate-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold border-0 rounded-lg shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
