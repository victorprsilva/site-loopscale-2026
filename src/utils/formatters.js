export const formatPhone = (value) => {
  const numbers = value.replace(/\D/g, '')
  
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, (match, p1, p2, p3) => {
      if (p3) return `(${p1}) ${p2}-${p3}`
      if (p2) return `(${p1}) ${p2}`
      if (p1) return `(${p1}`
      return numbers
    })
  }
  
  return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, (match, p1, p2, p3) => {
    if (p3) return `(${p1}) ${p2}-${p3}`
    if (p2) return `(${p1}) ${p2}`
    return numbers
  })
}

export const formatWebsite = (value) => {
  let url = value.trim().toLowerCase()
  
  if (!url) return ''
  
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  
  if (url.startsWith('www.')) {
    return `https://${url}`
  }
  
  return `https://www.${url}`
}
