import { OPERATOR_TO_EQUALITY_INTEGER } from '../constants'

import { compareVersions } from './'

import type { Operator } from '../types'

export const compare = (v1: string, v2: string, operator: Operator) => {
  const res = compareVersions(v1, v2)

  return OPERATOR_TO_EQUALITY_INTEGER[operator].includes(res)
}
