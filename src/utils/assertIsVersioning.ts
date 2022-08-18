import { VERSION } from '../constants'

import type { Version } from '../types'

export const assertIsVersioning = (val: unknown): asserts val is Version => {
  if (!VERSION.includes(val as Version)) {
    throw new Error(`${val} is not of type Versioning`)
  }
}
