export const social = [
  { url: "mailto:ssifontes@valentinproteccionintegral.com", name: "mail" },
  { url: "https://github.com/sebsv123", name: "github" },
  { url: "https://www.linkedin.com/in/sebastian-sifontes-valentin-752665187/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
