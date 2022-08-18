import { COMPARISION_OPERATORS } from '../constants'

import type { ComparisonOperator } from '../types'

export const isOperator = (op: unknown): op is ComparisonOperator => {
  return COMPARISION_OPERATORS.includes(op as ComparisonOperator)
}
