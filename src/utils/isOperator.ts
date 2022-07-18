import { OPERATORS } from '../constants'
import type { Operator } from '../types'

export const isOperator = (op: unknown): op is Operator => {
  return OPERATORS.includes(op as Operator)
}
