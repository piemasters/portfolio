export const site = {
  name: "David Norton",
  role: "Senior Software Engineer",
  location: "London",
  url: "https://davidnorton.app",
  shareImage: "/og.png",
  portrait: "/images/profile.jpeg",
  description:
    "Portfolio of David Norton, a senior software engineer focused on frontend development who designs and builds interfaces for complex web applications.",
  intro:
    "Over 10 years of experience designing and developing map-based web applications across a range of sectors.",
  about: [
    "My main focus is keeping both code and UX simple and maintainable. I like to balance delivering new features with continuous improvement of the overall application.",
    "I also spend time creating dashboards and monitoring usage to understand how users are interacting with the application to better improve their experience.",
    "My free time is mostly consumed by my labrador and garden, but I manage to fit a bit of painting in occasionally and recently even won a couple of awards!",
  ],
  details: [
    { label: "Based", value: "London" },
    { label: "Focus", value: "UI/UX" },
    { label: "Sectors", value: "Property, Space, Security, Justice" },
  ],
  skills: [
    {
      label: "Technologies",
      tone: "technology",
      items: [
        "TypeScript",
        "React",
        "Deck.GL",
        "Tailwind CSS",
        "Cypress",
        "Storybook",
        "Vue",
        "Gatsby",
        "Angular",
        "CREODIAS",
        "OpenLayers",
      ],
    },
    {
      label: "Concepts",
      tone: "concept",
      items: [
        "User Experience",
        "Design Systems",
        "Accessibility",
        "Performance",
        "Security",
        "Testing",
        "Product Analytics",
      ],
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/piemasters" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davidnorton29" },
  ],
  projects: [
    {
      slug: "landinsight",
      title: "Landinsight",
      year: "2019 - 2026",
      summary:
        "Consolidates ownership, planning, and property data into one platform, letting developers assess opportunities, reduce risk, and act with confidence.",
      tags: ["TypeScript", "React", "Vue", "Deck.GL", "Product Analytics"],
      thumbnail: "/images/landinsight.jpg",
      banner: "/images/banners/landinsight.jpg",
      links: [{ label: "Website", href: "https://land.tech/products/landinsight" }],
      body: ["TBD"],
    },
    {
      slug: "ftep",
      title: "Forestry TEP",
      year: "2015 - 2019",
      summary:
        "Serves commercial, governmental and research users in the forestry sector. It enables easy access to satellite data from any global location.",
      tags: ["Angular", "CREODIAS", "OpenLayers", "Design Systems"],
      thumbnail: "/images/ftep.jpg",
      banner: "/images/banners/ftep.jpg",
      links: [{ label: "Website", href: "https://f-tep.com/" }],
      body: ["TBD"],
    },
    {
      slug: "minitothemax",
      title: "MiniToTheMax",
      year: "2012 - Present",
      summary: "A miniature painting and tabletop hobby platform.",
      tags: ["Gatsby", "Performance", "Miniature painting"],
      thumbnail: "/images/minitothemax.jpg",
      banner: "/images/banners/minitothemax.jpg",
      links: [{ label: "Website", href: "https://minitothemax.app/" }],
      body: ["TBD"],
    },
  ],
} as const;

export type Project = (typeof site.projects)[number] & {
  image?: string;
};

export function getProject(slug: string): Project | undefined {
  return site.projects.find((project) => project.slug === slug);
}

export type SkillTone = (typeof site.skills)[number]["tone"];

/** Named technologies keep the rust edge. Every other label uses the concept blue. */
export function skillTone(label: string): SkillTone {
  for (const group of site.skills) {
    for (const item of group.items) {
      if (item === label) return group.tone;
    }
  }
  return "concept";
}
