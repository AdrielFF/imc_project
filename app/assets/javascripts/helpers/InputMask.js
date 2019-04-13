class InputMask {

  constructor(elements){

    this.init(elements)
  }

  init(elements){

    elements.map((element) => {
        element.addEventListener("keyup", (event) => {
            element.value = this.addMask(element)
        })

    })
  }

  addMask(element){

      let value = element.value.replace(/(\D)/g, "").replace(/^(\d{1,})(\d{2})/g, "$1.$2")
      return value
  }


}
