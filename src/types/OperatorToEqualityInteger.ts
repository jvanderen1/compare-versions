import type { ComparisonInteger, ComparisonOperator } from './'

export type OperatorToEqualityInteger = {
  [key in ComparisonOperator]: readonly ComparisonInteger[]
}
