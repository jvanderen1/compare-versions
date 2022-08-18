import type { ComparisonOperatorToComparisonInteger } from '../types'

export const COMPARISON_OPERATOR_TO_COMPARISON_INTEGER: ComparisonOperatorToComparisonInteger =
  {
    '>': [1] as const,
    '>=': [0, 1] as const,
    '=': [0] as const,
    '<=': [-1, 0] as const,
    '<': [-1] as const,
  } as const
