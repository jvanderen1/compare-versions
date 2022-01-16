export const indexOrEnd = (str: string, q: string) => {
  return str.indexOf(q) === -1 ? str.length : str.indexOf(q)
}
