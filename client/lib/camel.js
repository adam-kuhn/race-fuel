export default (string) => {
  return string.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase()
  }).replace(/\s+|[^a-zA-Z]/g, '')
}
