import type { OperatorType } from '../types'
import { OPERATORS } from '../constants'

export const isOperatorType = (op: any): op is OperatorType => {
  return OPERATORS[op] !== undefined
}
