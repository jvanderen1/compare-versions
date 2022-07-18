import { SEMVER } from '../constants'

export const validate = (version: string) => {
  return (
    /^[v\d]/.test(version) &&
    SEMVER.test(version)
  )
}
