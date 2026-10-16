export interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const footerQuickLinks: NavItem[] = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Portfolio Demos", href: "#portfolio" },
  { name: "Pricing Packages", href: "#pricing" },
  { name: "About Studio", href: "#about" },
  { name: "Inquiry Form", href: "#contact" },
  { name: "Admin Dashboard Demo", href: "/admin-demo", badge: "Demo" },
];
