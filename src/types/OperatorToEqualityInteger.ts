import type { EqualityInteger, Operator } from './'

export type OperatorToEqualityInteger = {
  [key in Operator]: readonly EqualityInteger[]
}
