import { OPERATORS } from './operators'

export const VERSIONING = [...OPERATORS, '~', '^'] as const
