import { isVersioning } from './isVersioning'

import type { Versioning } from '../types'

export function assertIsVersioning(val: unknown): asserts val is Versioning {
  if (!isVersioning(val)) {
    throw new Error(`${val} is not of type Versioning`)
  }
}
