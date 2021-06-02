function method_1(length, element) {

  if (typeof length != 'number') {
    console.log('ERRO: O primeiro parâmetro deve ser um numero natural')
    return
  }

  const array = []
  for (let index = 0; index < length; index++) {
    array[index] = element
  }
  return array
}

function method_2(array){

  if (!Array.isArray(array)) {
    console.log('ERRO: O parâmetro deve ser um array')
    return
  }

  let reverseArray = []
  for (let index = array.length; index > 0; index--){
    console.log(array.length - index)
    reverseArray[array.length - index] = array[index-1]  
  }

  return reverseArray
}

function method_3(array){

  if (!Array.isArray(array)) {
    console.log('ERRO: O parâmetro deve ser um array')
    return
  }

  let newArray = []
  for (let index = 0; index < array.length; index++) {
    if (array[index]) {
      newArray.push(array[index])
    }
  }

  return newArray
}

function method_4(array) {

  if (!Array.isArray(array)) {
    console.log('ERRO: O parâmetro deve ser um array')
    return
  }

  let newObj = {}
  for (const [key, value] of array) {
    newObj[key] = value
  }

  return newObj
}

function method_5(array, elementsToExclude) {
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < elementsToExclude.length; j++) {
      if (array[i] === elementsToExclude[j]) {
        array[i] = ''
      }
    }
  }
  
  return method_3(array)
}


function method_6(array) {

  if (!Array.isArray(array)) {
    console.log('ERRO: O parâmetro deve ser um array')
    return
  }

  array.sort()

  let newArray = []
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] !== array[index+1]) {
      newArray.push(array[index])
    }
  }
  newArray.push(array[array.length - 1])

 return newArray
}

function method_7(array1, array2) {

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log('ERRO: Os parâmetros devem ser um array')
    return
  }

  if (array1.length !== array2.length) {
    return false
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false
    }    
  }

  return true
}

function method_8(array){
  
  let newArray = []
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      realocateElements(newArray, array[index])
    }
    else{
      newArray.push(array[index])
    }
  }
  console.log(newArray)
}

function realocateElements(array1, array2) {

  for (const value of array2) {
    if(Array.isArray(value)){
      realocateElements(array1,value)
    }
    else{
      array1.push(value)
    }
  }
}

function method_9(array, size) {

  if (!Array.isArray(array)) {
    console.log('ERRO: O primeiro parâmetro deve ser um array')
    return
  }

  if (typeof size != 'number') {
    console.log('ERRO: O segundo parâmetro deve ser um numero natural')
    return
  }

  if(size > array.length){
    return array
  }

  let newArray = []
  for (let index = 0; index < array.length; index += size) {
    newArray.push(array.slice(index,index+size))
  }

  return newArray
}

function method_10(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    console.log('ERRO: Os parâmetros devem ser um array')
    return
  }

  let newArray = []
  for (const value1 of array1) {
    for (const value2 of array2) {
      if (value1 === value2) {
        newArray.push(value1)
      }
    }
  }

  return newArray
}

