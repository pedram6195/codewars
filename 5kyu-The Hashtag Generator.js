function generateHashtag(str) {
  str = str.trim().replace(/^ *$/, ' ')
  if (!str || !str.replace(/\s/g, '').length) return false
  let final = `#${str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')}`
  if (final.length > 140) return false
  return final
}
