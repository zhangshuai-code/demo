class createUser {
  constructor (name) {
    this.name = name
    this.getName()
  }

  getName () {
    return this.name
  }
}

const proxyModle = (() => {
  let instance = null
  return (name) => {
    if (!instance) {
      instance = new createUser(name)
    }

    return instance
  }
})()

let test = proxyModle('zs')
let list = proxyModle('ls')
console.log(test)
console.log(list)
