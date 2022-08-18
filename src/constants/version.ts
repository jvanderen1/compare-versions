import { OPERATORS } from './operators'

export const VERSION = [...OPERATORS, '~', '^'] as const
