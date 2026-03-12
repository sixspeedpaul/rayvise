// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Rayvise | Tile Artist",
  description: "Rayvise - Master tile artist creating stunning geometric stone inlay artwork in Huntsville, Ontario. Specializing in custom wildlife mosaics and luxury tile installations.",
  language: "en",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "RAYVISE",
  items: [
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
};

// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "RAYVISE",
  subtitle: "Where Stone Becomes Art",
  backgroundImage: "./hero-main.jpg",
  servicesLabel: "Custom Tile Art | Stone Inlay | Luxury Installations",
  copyright: "© 2024 Rayvise",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Transforming raw stone into",
  titleLine2: "breathtaking geometric masterpieces.",
  description: "Based in Huntsville, Ontario, Rayvise is a master tile artist who pushes the boundaries of traditional craftsmanship. Each piece is a unique fusion of natural stone beauty and precision geometric design, creating stunning wildlife portraits and custom installations that transform spaces into galleries.",
  image1: "./about-1.jpg",
  image1Alt: "Rayvise at work in the studio",
  image2: "./about-2.jpg",
  image2Alt: "Stone material selection",
  authorImage: "./photographer.jpg",
  authorName: "Rayvise",
  authorBio: "With years of experience in custom tile artistry, I specialize in creating one-of-a-kind stone inlay pieces that capture the essence of Canadian wildlife and natural beauty. Every project is a collaboration between artist and material.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Selected Works",
  subtitle: "A curated collection of custom tile artistry and stone inlay masterpieces.",
  projects: [
    { id: 1, title: "The Majestic Moose", category: "Wildlife Mosaic", image: "./work-4.jpg" },
    { id: 2, title: "Northern Bear", category: "Wall Installation", image: "./work-2.jpg" },
    { id: 3, title: "Swimming Spirit", category: "Floor Inlay", image: "./work-3.jpg" },
    { id: 4, title: "Canadian Pride", category: "Custom Map", image: "./work-6.jpg" },
    { id: 5, title: "Forest Guardian", category: "Entryway Design", image: "./work-1.jpg" },
    { id: 6, title: "Modern Bathroom", category: "Residential Installation", image: "./project-bathroom.jpg" },
    { id: 7, title: "Home Bar Feature", category: "Custom Bar Design", image: "./project-bar.jpg" },
    { id: 8, title: "Windswept Pine", category: "Framed Art Piece", image: "./art-tree-frame.jpg" },
    { id: 9, title: "Alpine Tree", category: "Wall Art", image: "./art-tree-whiteframe.jpg" },
  ],
};

// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Our Craft",
  subtitle: "Every project is an opportunity to create something extraordinary.",
  services: [
    { 
      id: "01", 
      title: "Custom Wildlife Mosaics", 
      description: "Bespoke geometric animal portraits crafted from premium natural stone, perfect for feature walls and statement pieces.",
      image: "./service-1.jpg" 
    },
    { 
      id: "02", 
      title: "Luxury Floor Inlays", 
      description: "Intricate floor medallions and patterns that transform ordinary spaces into extraordinary showcases.",
      image: "./service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Commercial Installations", 
      description: "High-end tile work for showrooms, hotels, and corporate spaces that demand the finest craftsmanship.",
      image: "./service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Custom Design Consultation", 
      description: "Collaborative design process to bring your vision to life with expert guidance on materials and execution.",
      image: "./service-4.jpg" 
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Client Voices",
  testimonials: [
    { 
      id: 1, 
      name: "David Chen", 
      title: "Architect", 
      quote: "Working with Rayvise has been a game-changer for our projects. His ability to translate complex designs into stunning stone artwork sets a new standard for tile craftsmanship.",
      image: "./testimonial-2.jpg" 
    },
    { 
      id: 2, 
      name: "Emma Thompson", 
      title: "Homeowner", 
      quote: "The custom bear installation Rayvise created for our home exceeded all expectations. It's not just tile work—it's a piece of art that tells a story every time someone sees it.",
      image: "./testimonial-3.jpg" 
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  unit: string;
  featured: boolean;
  features: string[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  plans: PricingPlan[];
}

export const pricingConfig: PricingConfig = {
  title: "",
  subtitle: "",
  ctaButtonText: "",
  plans: [],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "FAQ",
  faqs: [
    {
      question: "What is the typical timeline for a custom tile project?",
      answer: "Project timelines vary based on complexity and size. A single feature piece typically takes 4-6 weeks from design approval to installation, while larger commercial projects may take 3-6 months. I'll provide a detailed timeline during our consultation."
    },
    {
      question: "What types of stone do you work with?",
      answer: "I work with a wide variety of premium natural stones including granite, marble, slate, travertine, and quartzite. Each stone is carefully selected for its unique veining, color, and durability to ensure your piece is both beautiful and long-lasting."
    },
    {
      question: "Can you create custom designs based on my ideas?",
      answer: "Absolutely! Custom design is at the heart of what I do. Whether you have a specific animal, pattern, or concept in mind, we'll collaborate to create a unique piece that reflects your vision while incorporating my artistic expertise."
    },
    {
      question: "Do you handle installation as well?",
      answer: "Yes, I provide complete installation services for all my projects. This ensures that the artistic vision is maintained from design through final execution, with the same attention to detail at every step."
    },
    {
      question: "What areas do you serve?",
      answer: "I'm based in Huntsville, Ontario, and primarily serve Muskoka, Toronto, and surrounding areas. For larger commercial projects, I'm available to travel throughout Canada and internationally."
    }
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Studio Notes",
  subtitle: "Insights from the world of tile artistry and stone craftsmanship.",
  allPostsLabel: "All Posts",
  readMoreLabel: "Read More",
  readTimePrefix: "Read ",
  posts: [
    { 
      id: 1, 
      title: "The Art of Stone Selection", 
      excerpt: "How I choose the perfect materials for each unique project, from understanding veining patterns to matching colors that bring designs to life.", 
      readTime: "5 min", 
      date: "Feb 15, 2024", 
      image: "./blog-1.jpg", 
      category: "Craftsmanship" 
    },
    { 
      id: 2, 
      title: "Geometric Wildlife: A Modern Tradition", 
      excerpt: "Exploring the intersection of traditional mosaic techniques and contemporary geometric design in creating stunning animal portraits.", 
      readTime: "7 min", 
      date: "Jan 28, 2024", 
      image: "./blog-2.jpg", 
      category: "Design" 
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
}

export const contactConfig: ContactConfig = {
  title: "Let's Create Together",
  subtitle: "Your vision deserves an extraordinary presentation. Let's discuss how we can bring your project to life.",
  nameLabel: "Name *",
  emailLabel: "Email *",
  projectTypeLabel: "Project Type",
  projectTypePlaceholder: "Select...",
  projectTypeOptions: [
    { value: "wildlife", label: "Wildlife Mosaic" },
    { value: "floor", label: "Floor Inlay" },
    { value: "wall", label: "Wall Feature" },
    { value: "commercial", label: "Commercial Project" },
    { value: "other", label: "Other" },
  ],
  messageLabel: "Tell me about your project",
  submitButtonText: "Send Message",
  image: "./contact.jpg",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Every Stone Tells a Story",
  marqueeHighlightChars: ["S", "T"],
  navLinks1: [
    { label: "Home", href: "#hero" },
    { label: "Works", href: "#works" },
    { label: "About", href: "#about" },
  ],
  navLinks2: [
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Instagram", href: "https://instagram.com/rayvise", icon: "Instagram" },
  ],
  ctaText: "Start Your Project",
  ctaHref: "#contact",
  copyright: "© 2024 Rayvise. All rights reserved.",
  tagline: "Crafted with passion in Huntsville, Ontario",
};
