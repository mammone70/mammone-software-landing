import { getPayload } from "../lib/payload"

async function seedData() {
  const payload = await getPayload()

  try {
    // Create admin user
    await payload.create({
      collection: "users",
      data: {
        email: "admin@mammonesoftware.com",
        password: "admin123",
      },
    })

    // Seed hero content
    await payload.create({
      collection: "hero-content",
      data: {
        badge: "Full-Stack Development Services",
        title: "Custom Web Solutions for Modern Businesses",
        subtitle:
          "Transform your digital presence with enterprise-grade web applications, scalable backends, and stunning user experiences that drive results.",
        inputPlaceholder: "Describe your project idea...",
        ctaText: "Get Started",
        features: [{ text: "Free Consultation" }, { text: "30-Day Support" }, { text: "Money-Back Guarantee" }],
      },
    })

    // Seed services
    const services = [
      {
        title: "Full-Stack Web Development",
        description: "Modern web applications built with React, Next.js, and cutting-edge technologies.",
        icon: "globe",
        order: 1,
      },
      {
        title: "Mobile-First Design",
        description: "Responsive, mobile-optimized experiences that work seamlessly across all devices.",
        icon: "smartphone",
        order: 2,
      },
      {
        title: "Backend & Database",
        description: "Scalable server architecture with secure APIs and optimized database solutions.",
        icon: "database",
        order: 3,
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast applications with advanced caching and optimization techniques.",
        icon: "zap",
        order: 4,
      },
    ]

    for (const service of services) {
      await payload.create({
        collection: "services",
        data: service,
      })
    }

    // Seed testimonials
    const testimonials = [
      {
        name: "Sarah Johnson",
        company: "TechStart Inc.",
        content:
          "Mammone Software delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.",
        order: 1,
      },
      {
        name: "Michael Chen",
        company: "Digital Innovations",
        content:
          "Working with Mammone Software was a game-changer for our business. They transformed our outdated system into a modern, scalable solution.",
        order: 2,
      },
      {
        name: "Emily Rodriguez",
        company: "Creative Agency Co.",
        content:
          "The team's expertise in full-stack development helped us launch our product 3 months ahead of schedule. Highly recommended!",
        order: 3,
      },
    ]

    for (const testimonial of testimonials) {
      await payload.create({
        collection: "testimonials",
        data: testimonial,
      })
    }

    // Seed site settings
    await payload.create({
      collection: "site-settings",
      data: {
        siteName: "Mammone Software",
        tagline: "Full-stack web development solutions for modern businesses",
        email: "hello@mammonesoftware.com",
        phone: "+1 (555) 123-4567",
        socialLinks: {
          github: "https://github.com/mammonesoftware",
          linkedin: "https://linkedin.com/company/mammonesoftware",
        },
      },
    })

    console.log("Data seeded successfully!")
  } catch (error) {
    console.error("Error seeding data:", error)
  }
}

seedData()
