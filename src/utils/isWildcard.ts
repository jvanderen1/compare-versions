import { WILDCARDS } from '../constants'
import type { Wildcard } from '../types'

export const isWildcard = (s: unknown): s is Wildcard => {
  return WILDCARDS.includes(s as Wildcard)
}
