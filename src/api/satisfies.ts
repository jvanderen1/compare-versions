import {
  compareSegments,
  compareStrings,
  isOperator,
  validateAndParse,
} from '../utils'

import { compare } from './'

import type { Version } from '../types'

/**
 * @example
 * ```ts
 * satisfies('10.0.1', '~10.0.0') // true
 * satisfies('10.1.0', '~10.0.0') // false
 * satisfies('10.1.2', '^10.0.0') // true
 * satisfies('11.0.0', '^10.0.0') // false
 * satisfies('10.1.8', '>10.0.4') // true
 * satisfies('10.0.1', '=10.0.1') // true
 * satisfies('10.1.1', '<10.2.2') // true
 * satisfies('10.1.1', '<=10.2.2') // true
 * satisfies('10.1.1', '>=10.2.2') // false
 * ```
 *
 * @param v A semantic version.
 * @param r A semantic version range.
 * @returns Whether `v` satisfies `r`.
 */
export const satisfies = (v: string, r: string) => {
  const match = r.match(/^([<>=~^]+)/)
  const op = <Version>(match ? match[1] : '=')

  if (isOperator(op)) {
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
