export const tryParse = (v: string) => {
  const n = parseInt(v, 10)
  return isNaN(n) ? v : n
}
