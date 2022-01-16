import { SEMVER } from '../constants'

export const validateAndParse = (v: string) => {
  const match = v.match(SEMVER)
  if (!match) {
    throw new Error(`Invalid argument not valid semver ('${v}' received)`)
  }
  match.shift()
  return match
}
