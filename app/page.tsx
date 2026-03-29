import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import type { TESTIMONIALS_QUERY_RESULT, PRICING_PLANS_QUERY_RESULT, BLOG_POSTS_QUERY_RESULT } from "@/sanity.types";
import { ModalProvider} from "@/components/providers/ModalProvider";

const TESTIMONIALS_QUERY = groq`*[_type == "testimonial"] { _id, fullName, jobTitle, avatar, quote }`;
const PRICING_PLANS_QUERY = groq`*[_type == "pricingPlan"] { _id, priceHeading, chipText, price, features, ctaLabel, isPopular }`;
const BLOG_POSTS_QUERY = groq`*[_type == "blogPost"] { _id, blogTitle, coverImage, tag, publishedAt, readTime, "blogSlug": blogSlug.current }`;

export default async function Home() {

  const testimonials = await client.fetch<TESTIMONIALS_QUERY_RESULT>(TESTIMONIALS_QUERY);
  const pricingPlans = await client.fetch<PRICING_PLANS_QUERY_RESULT>(PRICING_PLANS_QUERY);
  const blogPosts = await client.fetch<BLOG_POSTS_QUERY_RESULT>(BLOG_POSTS_QUERY);

  return <ModalProvider testimonials={testimonials} pricingPlans={pricingPlans} blogPosts={blogPosts} />;
}
