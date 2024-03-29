import { compareStrings } from './'

import type { ComparisonInteger } from '../types'

export const compareSegments = (
  a: [string, string],
  b: [string, string],
): ComparisonInteger => {
  for (let i = 0; i < Math.max(a.length, b.length); i += 1) {
    const r = compareStrings(a[i] || '0', b[i] || '0')
    if (r !== 0) {
      return r
    }
  }
  return 0
}
