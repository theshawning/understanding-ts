function add(n1: number, n2: number) {
  return n1 + n2
}

// use void if a function returns nothing, or let TS infer this itself
function printResult(num: number) {
  console.log('Result: ' + num)
}

console.log(printResult(add(5, 12)))

// let someValue = undefined