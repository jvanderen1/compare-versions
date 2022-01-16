export const tryParse = (v) => {
  const n = parseInt(v, 10)
  return isNaN(n) ? v : n
}
