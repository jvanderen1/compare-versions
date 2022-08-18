import { VERSIONING } from '../constants'

import type { Versioning } from '../types'

export const assertIsVersioning = (val: unknown): asserts val is Versioning => {
  if (!VERSIONING.includes(val as Versioning)) {
    throw new Error(`${val} is not of type Versioning`)
  }
}
