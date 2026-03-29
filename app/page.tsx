import { client } from "@/sanity/lib/client";
import { ModalProvider, TestimonialData, PricingPlanData, BlogPostData } from "@/components/providers/ModalProvider";

const TESTIMONIALS_QUERY = '*[_type == "testimonial"] { _id, fullName, jobTitle, avatar, quote }';
const PRICING_PLANS_QUERY = '*[_type == "pricingPlan"] { _id, priceHeading, chipText, price, features, ctaLabel, isPopular }';
const BLOG_POSTS_QUERY =
  '*[_type == "blogPost"] { _id, blogTitle, coverImage, tag, publishedAt, readTime, "blogSlug": blogSlug.current }';

export default async function Home() {

  const testimonials = await client.fetch<TestimonialData[]>(TESTIMONIALS_QUERY);
  const pricingPlans = await client.fetch<PricingPlanData[]>(PRICING_PLANS_QUERY);
  const blogPosts = await client.fetch<BlogPostData[]>(BLOG_POSTS_QUERY);

  return <ModalProvider testimonials={testimonials} pricingPlans={pricingPlans} blogPosts={blogPosts} />;
}
