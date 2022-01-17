import { OPERATORS } from '../constants'
import type { OperatorType } from '../types'

export const isOperatorType = (op: string): op is OperatorType => {
  return OPERATORS.includes(op)
}
