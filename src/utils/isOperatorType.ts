import { OPERATORS } from '../constants'
import type { OperatorType } from '../types'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const isOperatorType = (op: any): op is OperatorType => {
  return OPERATORS[op] !== undefined
}
