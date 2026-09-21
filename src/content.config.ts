import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      summary: z.string().min(1),
      type: z.enum(['android', 'windows', 'web', 'other']),
      status: z.enum(['development', 'available', 'archived']),
      featured: z.boolean().default(false),
      technologies: z.array(z.string().min(1)).default([]),
      image: z
        .object({
          src: image(),
          alt: z.string().min(1),
        })
        .optional(),
      repositoryUrl: z.url().optional(),
      websiteUrl: z.url().optional(),
      playStoreUrl: z.url().optional(),
      downloadUrl: z.url().optional(),
    }),
});

export const collections = { projects };
