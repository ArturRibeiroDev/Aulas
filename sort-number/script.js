const form = document.querySelector("form")
const numbers = document.getElementById("numbers")
const FirstNumber = document.getElementById("first-number")
const SecondNumber = document.getElementById("second-number")
const repeat = document.getElementById("repeat")
const aside = document.querySelector("aside")

const again = document.querySelector("aside button")

const ul = document.querySelector("ul")

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

  if (!quantity || !min || !max) {
    alert("Preencha todos os campos!!! Por gentileza")
    return
  }

  if (max <= min) {
    alert("O valor máximo deve ser maior do que o mínimo, tente novamente")
    return
  }
  
  let Numbers_Sorted = SortNumbers(quantity, min, max)

  if (!Numbers_Sorted) return

  again.classList.add("setInvisible")

  Numbers_Sorted.forEach((number, index) => {
    setTimeout(() => {
      createElement(number)
    }, index * 4000)
  })

  setTimeout(() => {
    again.classList.remove("setInvisible")

    setTimeout(() => {
      again.classList.add("show")
    }, 400)
  }, Numbers_Sorted.length * 4000)

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

return Numbers_Sorted
}

function Sort(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function createElement(value) {

  form.classList.add("setInvisible")
  aside.classList.remove("setInvisible")
  aside.classList.add("setVisible")


  const liCreated = document.createElement("li")

  liCreated.textContent = String(value).padStart(2, '0')

  liCreated.classList.add("number")
  
  ul.append(liCreated)

  void liCreated.offsetWidth

  liCreated.classList.add("animate")
}

again.addEventListener("click", () => {
  const quantity = Number(numbers.value)
  const min = Number(FirstNumber.value)
  const max = Number(SecondNumber.value)

  let Numbers_Sorted = SortNumbers(quantity, min, max)

  if (!Numbers_Sorted) return

  ul.innerHTML = ""

  Numbers_Sorted.forEach((number, index) => {
    setTimeout(() => {
      createElement(number)
    }, index * 4000)
  })
})