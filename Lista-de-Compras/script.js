const form = document.querySelector("form")
const text = document.getElementById("add")
const ul = document.querySelector("ul")
const ItemRemoved = document.querySelector(".removed")
const buttonRemove = document.querySelector(".Button-Remove")


form.onsubmit = (event) => {
  event.preventDefault()

  if (text.value.trim() === "") {
    return alert("Escreva algo antes de enviar!")
  } else {
    criarItem(text.value)
    text.value = ""
  }
}

function criarItem(content) {
  const li = document.createElement("li")
  li.classList.add("itens")

  /* 
  li.innerHTML = `
    <div class="checkbox-wrapper">
      <div class="checkbox-image"></div>
      <input type="checkbox">
      <label>${content}</label>
      <button class="buttonDelete"></button>
    </div>
  `

  ul.prepend(li)
  */
  const divWrapper = document.createElement("div")
  divWrapper.classList.add("checkbox-wrapper")

  li.append(divWrapper)

  const checkboxImage = document.createElement("div")
  checkboxImage.classList.add("checkbox-image")
  const input = document.createElement("input")
  input.type = "checkbox"
  const label = document.createElement("label")
  label.textContent = content
  const buttonDelete = document.createElement("button")
  buttonDelete.classList.add("buttonDelete")

  divWrapper.append(checkboxImage)
  divWrapper.append(input)
  divWrapper.append(label)
  divWrapper.append(buttonDelete)

  ul.prepend(li)



  buttonDelete.addEventListener("click", () => {
  li.remove()

  ItemRemoved.classList.add("setVisible")

  setTimeout(() => {
    ItemRemoved.classList.remove("setVisible")
  }, 5000);
  
})


  buttonRemove.addEventListener("click", () => {
    ItemRemoved.classList.remove("setVisible")
  })
    
}

/*
ul.addEventListener("click", (event) => {

  if (event.target.classList.contains("buttonDelete")) {
    const li = event.target.closest("li")

    li.remove()

    mostrarAviso()

  }

})

function mostrarAviso() {

  itemRemoved.classList.add("setVisible")

  setTimeout(() => {
    itemRemoved.classList.remove("setVisible")
  }, 5000)

}

buttonRemove.addEventListener("click", () => {
  itemRemoved.classList.remove("setVisible")
})
*/



