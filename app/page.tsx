"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Database, Globe, Smartphone, Zap, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "./components/navigation"
import Footer from "./components/footer"

import type { Service, Testimonial, HeroContent } from "@/lib/types"
import CssGridBackground from "./components/css-grid-background"
import FramerSpotlight from "./components/framer-spotlight"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
  zap: Zap,
}

export default function Home() {
  // ────────────────────────────────────────────────────────────────
  // STATE
  // ────────────────────────────────────────────────────────────────
  const [services, setServices] = useState<Service[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null)
  const [loading, setLoading] = useState(true)

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // ────────────────────────────────────────────────────────────────
  // FETCH CMS DATA
  // ────────────────────────────────────────────────────────────────
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [servicesRes, testimonialsRes, heroRes] = await Promise.all([
          fetch("/api/services?sort=order"),
          fetch("/api/testimonials?sort=order"),
          fetch("/api/hero-content"),
        ])

        const servicesData = await servicesRes.json()
        const testimonialsData = await testimonialsRes.json()
        const heroData = await heroRes.json()

        
        setServices(servicesData?.docs
          ??
          [
            {
              id: "1",
              title: "Full-Stack Web Development",
              description: "Modern web applications built with React, Next.js, and cutting-edge technologies.",
              icon: "globe",
              order: 1,
            },
            {
              id: "2",
              title: "Mobile-First Design",
              description: "Responsive, mobile-optimized experiences that work seamlessly across all devices.",
              icon: "smartphone",
              order: 2,
            },
            {
              id: "3",
              title: "Backend & Database",
              description: "Scalable server architecture with secure APIs and optimised database solutions.",
              icon: "database",
              order: 3,
            },
            {
              id: "4",
              title: "Performance Optimisation",
              description: "Lightning-fast applications with advanced caching and optimisation techniques.",
              icon: "zap",
              order: 4,
            },
          ]
        )
        setTestimonials(testimonialsData?.docs 
          ?? 
          [
            {
              id: "1",
              name: "Sarah Johnson",
              company: "TechStart Inc.",
              content: "Mammone Software delivered an exceptional e-commerce platform that exceeded our expectations.",
              order: 1,
            },
            {
              id: "2",
              name: "Michael Chen",
              company: "Digital Innovations",
              content: "Working with Mammone Software was a game-changer for our business.",
              order: 2,
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              company: "Creative Agency Co.",
              content: "Their expertise let us launch 3 months ahead of schedule. Highly recommended!",
              order: 3,
            },
          ])
        setHeroContent(heroData?.docs?.[0] 
          ??
          {
            id: "1",
            badge: "Full-Stack Development Services",
            title: "Custom Web Solutions for Modern Businesses",
            subtitle:
              "Transform your digital presence with enterprise-grade web apps, scalable back-ends, and stunning UX.",
            inputPlaceholder: "Describe your project idea…",
            ctaText: "Get Started",
            features: [{ text: "Free Consultation" }, { text: "30-Day Support" }, { text: "Money-Back Guarantee" }],
            profileAlt: "Headshot of Mammone Software founder",
            introText: "Hi, I'm the founder of Mammone Software",
            statusText: "Ready to bring your vision to life",
            profileImage: {
              id: "1",
              url: "/placeholder.svg",
              alt: "Headshot of Mammone Software founder",
            },
          } as HeroContent )
      } catch (err) {
        // fallback hard-coded data (same as before) ...
        setServices([
          {
            id: "1",
            title: "Full-Stack Web Development",
            description: "Modern web applications built with React, Next.js, and cutting-edge technologies.",
            icon: "globe",
            order: 1,
          },
          {
            id: "2",
            title: "Mobile-First Design",
            description: "Responsive, mobile-optimized experiences that work seamlessly across all devices.",
            icon: "smartphone",
            order: 2,
          },
          {
            id: "3",
            title: "Backend & Database",
            description: "Scalable server architecture with secure APIs and optimised database solutions.",
            icon: "database",
            order: 3,
          },
          {
            id: "4",
            title: "Performance Optimisation",
            description: "Lightning-fast applications with advanced caching and optimisation techniques.",
            icon: "zap",
            order: 4,
          },
        ])

        setTestimonials([
          {
            id: "1",
            name: "Sarah Johnson",
            company: "TechStart Inc.",
            content: "Mammone Software delivered an exceptional e-commerce platform that exceeded our expectations.",
            order: 1,
          },
          {
            id: "2",
            name: "Michael Chen",
            company: "Digital Innovations",
            content: "Working with Mammone Software was a game-changer for our business.",
            order: 2,
          },
          {
            id: "3",
            name: "Emily Rodriguez",
            company: "Creative Agency Co.",
            content: "Their expertise let us launch 3 months ahead of schedule. Highly recommended!",
            order: 3,
          },
        ])

        setHeroContent({
          id: "1",
          badge: "Full-Stack Development Services",
          title: "Custom Web Solutions for Modern Businesses",
          subtitle:
            "Transform your digital presence with enterprise-grade web apps, scalable back-ends, and stunning UX.",
          inputPlaceholder: "Describe your project idea…",
          ctaText: "Get Started",
          features: [{ text: "Free Consultation" }, { text: "30-Day Support" }, { text: "Money-Back Guarantee" }],
          profileAlt: "Headshot of Mammone Software founder",
          introText: "Hi, I'm the founder of Mammone Software",
          statusText: "Ready to bring your vision to life",
          profileImage: {
            id: "1",
            url: "/placeholder.svg",
            alt: "Headshot of Mammone Software founder",
          },
        } as HeroContent)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    )
  }

  // ────────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────────
  return (
    
    
    <div className="min-h-screen relative overflow-hidden">
    
      {/* Dynamic Spotlight Effect */}
      
      {/* <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
       */}
      {/* Secondary spotlight for depth */}
      
      {/* <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 40%)`,
        }}
      />
       */}
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        <Navigation />

        {/* ──────────────────  HERO SECTION  ────────────────── */}
        <section id="hero" className="relative overflow-hidden pt-24 pb-20 px-4">
          <CssGridBackground/>
          <FramerSpotlight/>
    
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl" />
          <div className="container relative z-10 mx-auto flex max-w-6xl flex-col items-center md:flex-row md:gap-16">
            {/* TEXT BLOCK */}
            <motion.div
              className="order-2 mt-12 flex-1 text-center md:order-1 md:mt-0 md:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Badge */}
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-blue-500/20 text-blue-300">{heroContent?.badge}</Badge>
              </motion.div>

              {/* Intro / Name */}
              {heroContent?.introText && (
                <motion.p className="mb-3 text-lg font-medium text-slate-400" variants={fadeInUp}>
                  {heroContent.introText}
                </motion.p>
              )}

              {/* Heading */}
              <motion.h1
                className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-6xl"
                variants={fadeInUp}
              >
                {heroContent?.title?.split(" ").slice(0, 4).join(" ")}
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {heroContent?.title?.split(" ").slice(4).join(" ")}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate-300 md:mx-0"
                variants={fadeInUp}
              >
                {heroContent?.subtitle}
              </motion.p>

              {/* INPUT + CTA */}
              <motion.div className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row md:mx-0" variants={fadeInUp}>
                <Input
                  placeholder={heroContent?.inputPlaceholder}
                  className="h-12 flex-1 rounded-md border-blue-500/30 bg-slate-800/50 text-white placeholder:text-slate-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] focus:border-blue-400/50 focus:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                />
                <Button className="h-12 px-8 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                  {heroContent?.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Feature list */}
              <motion.div className="mt-10 flex flex-wrap justify-center gap-6 md:justify-start" variants={fadeInUp}>
                {(heroContent?.features ?? []).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>{f.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* PROFILE IMAGE */}
            <motion.div
              className="order-1 flex-shrink-0 md:order-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] md:h-48 md:w-48">
                <Image
                  src={
                    (heroContent?.profileImage?.sizes?.card?.url ??
                    heroContent?.profileImage?.url ??
                    "/placeholder.svg")
                   || "/placeholder.svg"}
                  alt={heroContent?.profileAlt ?? "Profile picture"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 160px, 192px"
                />
                {/* Status dot */}
                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-500 ring-2 ring-slate-900" />
              </div>
              {heroContent?.statusText && (
                <p className="mt-4 text-center text-sm font-medium text-slate-400">{heroContent.statusText}</p>
              )}
            </motion.div>
          </div>
        </section>

        {/* ──────────────────  SERVICES  ────────────────── */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div className="text-center space-y-4" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Services That Scale</h2>
                <p className="mx-auto max-w-2xl text-xl text-slate-300">
                  From concept to deployment, I provide comprehensive solutions tailored to your business needs.
                </p>
              </motion.div>

              <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" variants={staggerContainer}>
                {services.map((s) => {
                  const Icon = iconMap[s.icon] ?? Globe
                  return (
                    <motion.div key={s.id} variants={fadeInUp}>
                      <Card className="h-full border-slate-700 bg-slate-800/50 transition-all duration-300 hover:bg-slate-800/70">
                        <CardHeader>
                          <Icon className="mb-4 h-12 w-12 text-blue-400" />
                          <CardTitle className="text-white">{s.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-slate-300">{s.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────  TESTIMONIALS  ────────────────── */}
        <section className="bg-slate-800/30 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <motion.div className="text-center space-y-4" variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Client Success Stories</h2>
                <p className="mx-auto max-w-2xl text-xl text-slate-300">
                  See what businesses are saying about working with Mammone Software.
                </p>
              </motion.div>

              <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer}>
                {testimonials.map((t) => (
                  <motion.div key={t.id} variants={fadeInUp}>
                    <Card className="h-full border-slate-700 bg-slate-800/50">
                      <CardContent className="p-6">
                        <p className="mb-6 italic text-slate-300">"{t.content}"</p>
                        <div>
                          <p className="font-semibold text-white">{t.name}</p>
                          <p className="text-sm text-slate-400">{t.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────  CTA  ────────────────── */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl border border-slate-700 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 text-center space-y-8"
            >
              <h2 className="text-3xl font-bold text-white md:text-5xl">Ready to Build Something Amazing?</h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-300">
                Let's discuss your project and craft a solution that drives your business forward.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 bg-transparent text-white shadow-[0_0_15px_rgba(148,163,184,0.2)] hover:bg-slate-800 hover:shadow-[0_0_25px_rgba(148,163,184,0.3)]"
                >
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div> {/* End of content wrapper */}
    </div>
  )
}
