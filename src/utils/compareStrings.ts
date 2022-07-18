import { isWildcard, tryParse } from './'

import type { EqualityInteger } from '../types'

export const compareStrings = (a: string, b: string): EqualityInteger => {
  if (isWildcard(a) || isWildcard(b)) {
    return 0
  }

  const ap = tryParse(a)
  const bp = tryParse(b)

  if (ap > bp) {
    return 1
  }

  if (ap < bp) {
    return -1
  }

  return 0
}
