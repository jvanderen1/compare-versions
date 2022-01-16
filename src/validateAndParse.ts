import { semver } from './semver'

export const validateAndParse = (v: string) => {
  const match = v.match(semver)
  if (!match) {
    throw new Error(`Invalid argument not valid semver ('${v}' received)`)
  }
  match.shift()
  return match
}
