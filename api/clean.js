exports.clean = string => {
  if(!string) return
  const alphabet = string.replace(/[^A-Za-z']+/g, " ").trim()
  const lowerCase = alphabet.toLowerCase()
  return lowerCase
}
