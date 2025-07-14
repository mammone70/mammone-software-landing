export interface Service {
  id: string
  title: string
  description: string
  icon: "globe" | "smartphone" | "database" | "zap"
  order: number
}

export interface Testimonial {
  id: string
  name: string
  company: string
  content: string
  order: number
}

export interface HeroContent {
  id: string
  badge: string
  title: string
  subtitle: string
  inputPlaceholder: string
  ctaText: string
  features: Array<{ text: string }>
  profileImage: Media
  profileAlt: string
  introText: string
  statusText: string
}

export interface Media {
  id: string
  url: string
  alt: string
  sizes: {
    card: {
      url: string
    }
  }
}

export interface SiteSettings {
  id: string
  siteName: string
  tagline: string
  email: string
  phone: string
  socialLinks: {
    github?: string
    linkedin?: string
  }
}
