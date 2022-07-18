import { SEMVER } from './constants'

export const validate = (version: unknown) => {
  return (
    typeof version === 'string' &&
    /^[v\d]/.test(version) &&
    SEMVER.test(version)
  )
}
