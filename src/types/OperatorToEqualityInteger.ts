import type { EqualityInteger, ComparisonOperator } from './'

export type OperatorToEqualityInteger = {
  [key in ComparisonOperator]: readonly EqualityInteger[]
}
