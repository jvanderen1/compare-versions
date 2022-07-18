import { indexOrEnd } from './'

export const split = (v: string) => {
  const c = v.replace(/^v/, '').replace(/\+.*$/, '')
  const patchIndex = indexOrEnd(c, '-')
  const arr = c.substring(0, patchIndex).split('.')
  arr.push(c.substring(patchIndex + 1))
  return arr
}
