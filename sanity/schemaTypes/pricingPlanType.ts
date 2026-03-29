import { defineField, defineType } from "sanity";

export const pricingPlanType = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  preview: {
    select: {
      title: "priceHeading",
    },
  },
  fields: [
    defineField({
      name: "priceHeading",
      title: "Plan Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "chipText",
      title: "Badge Text",
      type: "string",
      description: "Optional label e.g. 'Most Popular'",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g. 'Free', '$99/mo', 'Custom'",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Add each feature as a separate item e.g. '500GB storage'",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Button text e.g. 'Get started free'",
    }),
    defineField({
      name: "isPopular",
      title: "Mark as Popular",
      type: "boolean",
      description: "Enables the highlighted styling on this plan",
      initialValue: false,
    }),
  ],
});