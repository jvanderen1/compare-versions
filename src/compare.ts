import { compareVersions } from './compareVersions'
import { OPERATOR_RES_MAP } from './constants'
import type { OperatorType } from './types'

export const compare = (v1: string, v2: string, operator: OperatorType) => {
  const res = compareVersions(v1, v2)
  return OPERATOR_RES_MAP[operator].includes(res)
}
