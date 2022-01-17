import { SEMVER } from './constants'

export const validate = (version: any) => {
  return (
    typeof version === 'string' &&
    /^[v\d]/.test(version) &&
    SEMVER.test(version)
  )
}
