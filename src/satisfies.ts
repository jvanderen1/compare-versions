import { compare } from './compare'
import { OperatorType } from './types'
import {
  compareSegments,
  compareStrings,
  isOperatorType,
  validateAndParse,
} from './utils'

export const satisfies = (v: string, r: string) => {
  const match = r.match(/^([<>=~^]+)/)
  const op = <OperatorType | string>(match ? match[1] : '=')

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
