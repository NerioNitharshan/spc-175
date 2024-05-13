import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        post_id: z.number(),
        desc: z.string(),
        pubDate: z.date(),
        author: z.string(),
        cover: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    posts: postsCollection,
};
