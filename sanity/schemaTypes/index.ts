import { type SchemaTypeDefinition } from 'sanity'
import { testimonialType } from './testimonialType'
import { pricingPlanType } from './pricingPlanType'
import { blogPostType } from './blogPostType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [testimonialType, pricingPlanType, blogPostType],
}
