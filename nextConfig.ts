import type { BlitzConfig } from "@blitzjs/next"
import { withBlitz } from "@blitzjs/next"
import withPlugins from "next-compose-plugins"

const blitzConfig: BlitzConfig = {}

export const config: BlitzConfig = withPlugins([withBlitz, blitzConfig])
