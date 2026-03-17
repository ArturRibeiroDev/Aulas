const form = document.querySelector("form")
const numbers = document.getElementById("numbers")
const FirstNumber = document.getElementById("first-number")
const SecondNumber = document.getElementById("second-number")
const repeat = document.getElementById("repeat")

numbers.oninput = () => {
  let value = numbers.value.replace(/\D/g, "")

  numbers.value = value
}

FirstNumber.oninput = () => {
  let value = FirstNumber.value.replace(/\D/g, "")

  FirstNumber.value = value
}

SecondNumber.oninput = () => {
  let value = SecondNumber.value.replace(/\D/g, "")

  SecondNumber.value = value
}

form.onsubmit = (event) => {
  event.preventDefault()

  const quantity = Number(numbers.value)
  const min = Number(FirstNumber.value)
  const max = Number(SecondNumber.value)

  if (quantity == "" || min  == "" || max  == "") {
    alert("Preencha todos os campos!!! Por gentileza")
    return
  }

  if (max <= min) {
    alert("O valor máximo deve ser maior do que o mínimo, tente novamente")
    return
  }

  SortNumbers(quantity, min, max)
}

function SortNumbers(numbers, FirstNumber, SecondNumber) {
  let Numbers_Sorted = []
  if (repeat.checked) {
      const range = SecondNumber - FirstNumber + 1

      if (numbers > range) {
    alert("Quantidade maior que o intervalo disponível")
    return
      }
  }
  while(Numbers_Sorted.length < numbers) {
    let NumberSorted = Sort(FirstNumber, SecondNumber)
    if (repeat.checked) {
      

      if (Numbers_Sorted.includes(NumberSorted)) {
        continue
      } else {
      Numbers_Sorted.push(NumberSorted)
    }
    } else {
      Numbers_Sorted.push(NumberSorted)
    }
  }

console.log(Numbers_Sorted)
}

function Sort(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
