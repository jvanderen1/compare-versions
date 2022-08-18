import { COMPARISION_OPERATORS } from '../constants'

import type { Operator } from '../types'

export const isOperator = (op: unknown): op is Operator => {
  return COMPARISION_OPERATORS.includes(op as Operator)
}
