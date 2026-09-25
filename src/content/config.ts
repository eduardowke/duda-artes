import { defineCollection, z } from 'astro:content';

const artesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    style: z.string().optional(),
  }),
});

export const collections = {
  artes: artesCollection,
};