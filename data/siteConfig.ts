export interface SiteConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  url: string;
  ogImage: string;
  keywords: string[];
}

export const siteConfig: SiteConfig = {
  name: "NEXOVANTA STUDIO",
  tagline: "Build. Innovate. Grow.",
  shortDescription:
    "Engineering high-performance web applications, custom AI solutions, SaaS products, and digital experiences for ambitious businesses.",
  fullDescription:
    "NEXOVANTA STUDIO is a next-generation digital engineering and design studio specializing in modern websites, full-stack applications, intelligent AI tools, and scalable SaaS solutions for startups, small businesses, restaurants, and entrepreneurs.",
  url: "https://nexovanta.studio",
  ogImage: "/og-image.png",
  keywords: [
    "Nexovanta Studio",
    "Website Development",
    "AI Applications",
    "Full-Stack Development",
    "SaaS Products",
    "Digital Solutions",
    "Web App Development India",
    "Restaurant Website",
    "Small Business Website",
  ],
};
