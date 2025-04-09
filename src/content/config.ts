import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
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

const images = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
  }),
});

const products = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    features: z.array(z.string()).optional(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    project: z.string(),
    image: z.string(),
    logo: z.string().optional(),
    text: z.string(),
    name: z.string(),
    role: z.string(),
  }),
});

// Export collections to make them available
export const collections = {
  projects,
  images,
  products,
  testimonials,
}; 