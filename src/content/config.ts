import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().nonempty(),
        excerpt: z.string().nonempty(),
        category: z.string().nonempty(),
        publishedDate: z.date(),
        image: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
    })
});

export const collection = {
    'blog': blogCollection,
}