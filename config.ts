/**
 * Pain Interactive Website Configuration
 * Easy-to-configure settings for your website
 */

export const siteConfig = {
  // Basic Info
  siteName: 'Pain Interactive',
  siteDescription: 'Pain Interactive builds immersive Roblox experiences, live operations, and brand opportunities for the next generation.',
  siteUrl: 'https://paininteractive.com', // Update with your domain
  logo: '/PainInteractive.png',

  // Social Links
  social: {
    twitter: 'https://twitter.com/PainInteractive',
    discord: 'https://discord.gg/paininteractive',
    youtube: 'https://youtube.com/@PainInteractive',
    instagram: 'https://instagram.com/paininteractive',
  },

  // Navigation Menu
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Theme Colors
  theme: {
    primary: '#0a0408', // Dark background
    accent: '#ff6b35', // Orange accent
    text: '#ffffff',
    secondaryText: '#cccccc',
  },

  // Contact Information
  contact: {
    email: 'hello@paininteractive.com',
    phone: '+1 (555) 123-4567',
    address: 'Your Address Here',
  },

  // Features/Services
  services: [
    {
      title: 'Immersive Roblox Experiences',
      description: 'Create engaging and interactive experiences in the Roblox metaverse.',
      icon: 'Gamepad2',
    },
    {
      title: 'Live Operations',
      description: 'Dynamic in-game events and updates to keep players engaged.',
      icon: 'Zap',
    },
    {
      title: 'Brand Partnerships',
      description: 'Collaborate with brands to create unique in-game opportunities.',
      icon: 'Briefcase',
    },
  ],

  // Metadata
  meta: {
    themeColor: '#0a0408',
    appleTouchIcon: '/PainInteractive.png',
  },

  // Analytics (optional)
  analytics: {
    enabled: true,
    googleAnalyticsId: 'G_YOUR_ID_HERE', // Add your Google Analytics ID
  },

  // Feature Flags
  features: {
    showBlog: false,
    showTeam: true,
    showPortfolio: true,
    showPricing: false,
  },
} as const;
