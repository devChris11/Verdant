'use client'

import { NextStudio, type NextStudioProps } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function Studio() {
  // NextStudioProps extends sanity's StudioProps (which includes `config`). Some
  // TS language servers mis-resolve that `extends` across package exports and then
  // treat `config` as invalid; the cast matches the real runtime API.
  const props = { config } as unknown as NextStudioProps
  return <NextStudio {...props} />
}
