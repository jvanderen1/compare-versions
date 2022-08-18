import { COMPARISION_OPERATORS } from './comparisonOperators'

export const VERSIONING = [...COMPARISION_OPERATORS, '~', '^'] as const
