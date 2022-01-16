import { compareVersions } from './compareVersions'
import { OPERATOR_RES_MAP } from './constants'
import type { OperatorType } from './types'

export const compare = (v1: string, v2: string, operator: OperatorType) => {
  // since result of compareVersions can only be -1 or 0 or 1
  // a simple map can be used to replace switch
  const res = compareVersions(v1, v2)
  return OPERATOR_RES_MAP[operator].indexOf(res) > -1
}
