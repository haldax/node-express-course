const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

// because this module calls addValues()
// it will run automatically when another file requires this module
addValues()
