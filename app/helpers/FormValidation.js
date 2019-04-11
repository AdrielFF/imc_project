class FormValidation {

  constructor(){
    this.heightInput = document.querySelector('#heightInput')
    this.init(this.heightInput)
  }

  init(element){
    element.addEventListener("input", (event) =>{
      if(element.value != ''){

        let arrayValue = this.convertValueToArray(element.value)

          if (arrayValue.length > 1){
            let newValue = this.putDot(arrayValue)
            element.value = newValue
          }
      }

    })
  }

  verifyDotArray(array){
    let dot = false

    for(let i = 0; i < array.length; i++){
      if(array[i] == "."){
        dot = true
      }
    }

    return dot
  }

  putDot(array){

    if(!this.verifyDotArray(array)){

      array.splice(1, 0, ".")
      return array.join("")
    }

    return array.join("")
  }

  convertValueToArray(string){
    let array = [];

    for(let i = 0;i < string.length; i++){
      array[i] = string.charAt(i)
    }
    return array
  }

  validadeFloatValue(target) {

      console.log(target);

  }

}
