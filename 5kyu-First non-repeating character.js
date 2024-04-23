function firstNonRepeatingLetter(s) {
  return (
    s
      .split('')
      .filter(
        (ch) =>
          s.toLowerCase().indexOf(ch.toLowerCase()) ===
          s.toLowerCase().lastIndexOf(ch.toLowerCase())
      )[0] || ''
  )
}
