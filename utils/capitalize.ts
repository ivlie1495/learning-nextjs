export const capitalize = (str?: string): string => {
  if (!str) return ''

  // hello
  // h + ello
  // H + ello
  // Hello
  return str.charAt(0).toUpperCase() + str.slice(1)
}
