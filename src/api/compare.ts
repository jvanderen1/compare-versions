import { OPERATOR_TO_EQUALITY_INTEGER } from '../constants'

import { compareVersions } from './'

import type { ComparisonOperator } from '../types'

/**
 * @example
 * ```ts
 * compare('10.1.8', '10.0.4', '>') // true
 * compare('10.0.1', '10.0.1', '=') // true
 * compare('10.1.1', '10.2.2', '<') // true
 * compare('10.1.1', '10.2.2', '<=') // true
 * compare('10.1.1', '10.2.2', '>=') // false
 * ```
 *
 * @param v1 The first semantic version to compare.
 * @param v2 The second semantic version to compare.
 * @param operator An equality and/or inequality string.
 * @returns Whether the semantic versioning of `v1` and `v2` compared via an `operator` is valid.
 */
export const compare = (
  v1: string,
  v2: string,
  operator: ComparisonOperator,
) => {
  const res = compareVersions(v1, v2)

  return OPERATOR_TO_EQUALITY_INTEGER[operator].includes(res)
}
