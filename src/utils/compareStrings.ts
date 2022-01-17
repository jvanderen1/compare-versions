import { isWildcardType } from './isWildcardType'
import { tryParse } from './tryParse'

export const compareStrings = (a: string, b: string) => {
  if (isWildcardType(a) || isWildcardType(b)) {
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
