import { defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  preview: {
    select: {
      title: "blogTitle",
      media: "coverImage",
    },
  },
  fields: [
    defineField({
      name: "blogTitle",
      title: "Blog Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "blogSlug",
      title: "Blog Slug",
      type: "slug",
      options: {
        source: "blogTitle",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: "e.g. '6 min read'",
      validation: (Rule) => Rule.required(),
    }),
  ],
});