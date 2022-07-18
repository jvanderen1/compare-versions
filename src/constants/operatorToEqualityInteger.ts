import type { OperatorToEqualityInteger } from '../types'

export const OPERATOR_TO_EQUALITY_INTEGER: OperatorToEqualityInteger = {
  '>': [1] as const,
  '>=': [0, 1] as const,
  '=': [0] as const,
  '<=': [-1, 0] as const,
  '<': [-1] as const,
} as const
