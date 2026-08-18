export const siteConfig = {
  name: "Hyperion Technologies",
  tagline: "Powering Innovation Through Technology",
  description:
    "Hyperion Technologies builds secure, scalable technology solutions that help businesses and organizations solve problems, improve operations, and grow.",
  email: "hello@hyperiontechnology.com",
  phone: "+233 30 000 0000",
  address: "Airport City, Accra, Ghana",
  social: {
    linkedin: "https://www.linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;
