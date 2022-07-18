import { split, tryParse, validateAndParse } from '../utils'

import type { EqualityInteger } from '../types'

export const compareVersions = (v1: string, v2: string): EqualityInteger => {
  validateAndParse(v1)
  validateAndParse(v2)

  const s1 = split(v1)
  const s2 = split(v2)

  for (let i = 0; i < Math.max(s1.length - 1, s2.length - 1); i += 1) {
    const n1 = parseInt(s1[i] || '0', 10)
    const n2 = parseInt(s2[i] || '0', 10)

    if (n1 > n2) {
      return 1
    }

    if (n2 > n1) {
      return -1
    }
  }

  const sp1 = s1[s1.length - 1]
  const sp2 = s2[s2.length - 1]

  if (sp1 && sp2) {
    const p1 = sp1.split('.').map(tryParse)
    const p2 = sp2.split('.').map(tryParse)

    for (let i = 0; i < Math.max(p1.length, p2.length); i += 1) {
      const p1V = p1[i]
      const p2V = p2[i]

      if (
        p1V === undefined ||
        (typeof p2V === 'string' && typeof p1V === 'number')
      ) {
        return -1
      }

      if (
        p2V === undefined ||
        (typeof p1V === 'string' && typeof p2V === 'number')
      ) {
        return 1
      }

      if (p1V > p2V) {
        return 1
      }

      if (p2V > p1V) {
        return -1
      }
    }
  } else if (sp1 || sp2) {
    return sp1 ? -1 : 1
  }

  return 0
}
