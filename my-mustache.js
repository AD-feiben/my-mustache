class MyMustache {
  static parse (temp, obj) {
    const reg = /\{\{ *(\w+) *\}\}/
    while (reg.test(temp)) {
      temp = temp.replace(reg, obj[RegExp.$1])
    }
    return temp
  }
}

const str = 'my name is {{ name }}, i am {{age}}'
const data = {
  name: 'feiben',
  age: 18
}

MyMustache.parse(str, data) // => 'my name is feiben, i am 18'
