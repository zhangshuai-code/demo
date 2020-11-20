// 只读
// function readonly (target, name, descriptor) {
//   console.log(target, name, descriptor, '目标类')
//   discriptor.writable = false
//   return discriptor
// }

// class Cat {
//   @readonly
//   say () {
//     console.log('哇哇哇。。。')
//   }
// }

// let kety = new Cat()
// kety.say()


// function readonly(target, name, descriptor) {
//   discriptor.writable = false;
//   return discriptor;
// }
// class Cat {
//   @readonly
//   say() {
//       console.log("meow ~");
//   }
// }
// var kitty = new Cat();
// kitty.say = function() {
//   console.log("woof !");
// }
// kitty.say()

function isAnimal(target) {
  target.isAnimal = true;
  return target;
}
@isAnimal
class Cat {
  
}
console.log(Cat.isAnimal)