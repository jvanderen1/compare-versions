export const indexOrEnd = (str: string, q: string): number => {
  return str.indexOf(q) === -1 ? str.length : str.indexOf(q)
}
