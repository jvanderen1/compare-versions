import type { ComparisonInteger, ComparisonOperator } from '.'

export type ComparisonOperatorToComparisonInteger = {
  [key in ComparisonOperator]: readonly ComparisonInteger[]
}
