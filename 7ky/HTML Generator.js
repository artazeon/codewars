function HTMLGen() {
  this.a = function (content) {
    return `<a>${content}</a>`
  }

  this.b = function (content) {
    return `<b>${content}</b>`
  }

  this.p = function (content) {
    return `<p>${content}</p>`
  }

  this.body = function (content) {
    return `<body>${content}</body>`
  }

  this.div = function (content) {
    return `<div>${content}</div>`
  }

  this.span = function (content) {
    return `<span>${content}</span>`
  }

  this.title = function (content) {
    return `<title>${content}</title>`
  }

  this.comment = function (content) {
    return `<!--${content}-->`
  }
}

const g = new HTMLGen()

const paragraph = g.p('Hello, World!')
console.log(paragraph)
