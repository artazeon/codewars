function htmlspecialchars(formData) {
  formData = formData.replace(/&/g, '&amp;')
  formData = formData.replace(/</g, '&lt;')
  formData = formData.replace(/>/g, '&gt;')
  formData = formData.replace(/"/g, '&quot;')
  
  return formData
}

console.log(htmlspecialchars("<h2>Hello World</h2>"))