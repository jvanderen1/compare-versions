import { SEMVER } from '../constants'

/**
 * @example
 * ```ts
 * validate('1.0.0-rc.1') // true
 * validate('1.0-rc.1') // false
 * validate('foo') // false
 * ```
 *
 * @param version A string to test.
 * @returns Whether or not `version` is a valid representation of a semantic version range.
 */
export const validate = (version: string) => {
  return /^[v\d]/.test(version) && SEMVER.test(version)
}
