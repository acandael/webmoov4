import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subttitle: z.string(),
    type: z.enum(["onepager", "premium", "ecommerce"]),
    "hero-image": z.string(),
    tech: z.array(z.string()),
    client: z.string(),
    website: z.string().url(),
    timeline: z.string(),
    services: z.array(z.string()),
    gallery: z.array(z.string()),
    results: z.array(z.tuple([z.string(), z.string()])),
  }),
});

// Export collections to make them available
export const collections = {
  projects,
};
