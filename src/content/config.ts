import { defineCollection, z } from 'astro:content';

const artes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string().transform((val) => new Date(val))),
    image: z.string(),
    style: z.string().optional(),
  }),
});

export const collections = { artes };
