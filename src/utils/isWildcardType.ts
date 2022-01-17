import { WILDCARDS } from '../constants'
import { WildcardType } from '../types'

export const isWildcardType = (s: string): s is WildcardType => {
  return WILDCARDS.includes(s)
}
