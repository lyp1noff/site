export const SEO = {
  siteName: "lyp1noff",
  name: "Andrii Paziuka",
  alternateName: "lyp1noff",
  jobTitle: "DevOps & Software Engineer",
  description:
    "DevOps & Software Engineer focusing on automation, observability, and backend systems. MSc Data Science @ University of Surrey.",
  baseUrl: "https://lyp1noff.com",
  imagePath: "/og.png",
  organization: "Helen Marlen Group",
  university: "University of Surrey",
  social: {
    github: "https://github.com/lyp1noff",
    linkedin: "https://linkedin.com/in/paziuka",
  },
} as const;

export const SchemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SEO.name,
  alternateName: SEO.alternateName,
  jobTitle: SEO.jobTitle,
  description: SEO.description,
  url: SEO.baseUrl,
  image: `${SEO.baseUrl}${SEO.imagePath}`,
  worksFor: {
    "@type": "Organization",
    name: SEO.organization,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: SEO.university,
  },
  sameAs: [SEO.social.github, SEO.social.linkedin],
};

export const SchemaOrgJSON = JSON.stringify(SchemaOrg);
