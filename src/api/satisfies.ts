import { VERSION } from '../constants'
import {
  compareSegments,
  compareStrings,
  isOperator,
  validateAndParse,
} from '../utils'

import { compare } from './'

import type { Version } from '../types'

/**
 * @example
 * ```ts
 * satisfies('10.0.1', '~10.0.0') // true
 * satisfies('10.1.0', '~10.0.0') // false
 * satisfies('10.1.2', '^10.0.0') // true
 * satisfies('11.0.0', '^10.0.0') // false
 * satisfies('10.1.8', '>10.0.4') // true
 * satisfies('10.0.1', '=10.0.1') // true
 * satisfies('10.1.1', '<10.2.2') // true
 * satisfies('10.1.1', '<=10.2.2') // true
 * satisfies('10.1.1', '>=10.2.2') // false
 * ```
 *
 * @param version A version.
 * @param semanticVersion A semantic version range.
 * @returns Whether `version` satisfies `semanticVersion`.
 */
export const satisfies = (version: string, semanticVersion: string) => {
  const matchVersion = semanticVersion.match(/[<>=~^]{1,2}/)
  const versioning = matchVersion ? matchVersion[0] : '='

  assertIsVersioning(versioning)

  if (isOperator(versioning)) {
    if (matchVersion) {
      semanticVersion = semanticVersion.replace(versioning, '')
    }
    return compare(version, semanticVersion, versioning)
  }

  const [v1, v2, v3] = validateAndParse(version)
  const [m1, m2, m3] = validateAndParse(semanticVersion)

  if (compareStrings(v1, m1) !== 0) {
    return false
  }

  if (versioning === '^') {
    return compareSegments([v2, v3], [m2, m3]) >= 0
  }

  if (compareStrings(v2, m2) !== 0) {
    return false
  }

  return compareStrings(v3, m3) >= 0
}

function assertIsVersioning(val: unknown): asserts val is Version {
  if (!VERSION.includes(val as Version)) {
    throw new Error(`${val} is not of type Version`)
  }
}
