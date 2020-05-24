// 冒泡排序
let arr = [2,4,1,7,6,5,3,8,9]
for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
  }
}
console.log(arr)