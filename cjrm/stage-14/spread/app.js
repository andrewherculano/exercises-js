//Concatenando arrays com "spread operator"
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const newArray1 = arr1.concat(arr2)
const newArray2 = [...arr1, ...arr2]

console.log(newArray1)
console.log(newArray2)

//Concatenando objetos em um novo objeto
const obj1 = {
  prop: 1,
  prop2: 2,
  prop3: 3
}

const obj2 = {
  prop4: 4,
  prop5: 5,
  prop6: 6
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

//Fazendo o mesmo com o "spread operator"
const obj4 = {...obj1, ...obj2}
console.log(obj4)
