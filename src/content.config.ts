import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    style: z.string().optional(),
  }),
});

export const collections = { artes };
