import { compare } from './compare'
import { compareSegments, compareStrings, validateAndParse } from './utils'
import { OperatorType } from './types'
import { isOperatorType } from './utils'

export const satisfies = (v: string, r: string) => {
  // if no range operator then "="
  const match = r.match(/^([<>=~^]+)/)
  const op = <OperatorType | string>(match ? match[1] : '=')

  // if gt/lt/eq then operator compare
  if (isOperatorType(op)) {
    return compare(v, r, op)
  }

  const [v1, v2, v3] = validateAndParse(v)
  const [m1, m2, m3] = validateAndParse(r)

  if (compareStrings(v1, m1) !== 0) {
    return false
  }

  if (op === '^') {
    return compareSegments([v2, v3], [m2, m3]) >= 0
  }

  if (compareStrings(v2, m2) !== 0) {
    return false
  }

  return compareStrings(v3, m3) >= 0
}
