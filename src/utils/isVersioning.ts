import { VERSIONING } from '../constants'

import type { Versioning } from '../types'

export function isVersioning(val: unknown): val is Versioning {
  return VERSIONING.includes(val as Versioning)
}
