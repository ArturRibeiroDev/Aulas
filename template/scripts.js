const input = document.querySelector("input")
const button = document.querySelector("button")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault()
})

button.addEventListener("click", () => {
  document.body.style.background = "black"
})