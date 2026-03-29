import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  preview:{
    select:{
        title: "fullName",
        media: "avatar",
    },
  },
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "fullName",
        title: "Full Name",
        type: "string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:"jobTitle",
        title:"Job Title",
        type:"string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name:"avatar",
        title:"Avatar",
        type:"image",
        options: {
            hotspot: true,
        },
    }),
  ],
});