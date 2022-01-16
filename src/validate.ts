import { SEMVER } from './constants'

export const validate = (version: string) => {
  return SEMVER.test(version)
}
