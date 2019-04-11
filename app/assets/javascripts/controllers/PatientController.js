class PatientController {

  constructor(){

    this.inputName = document.getElementById("weightInput")
    this.inputAge = document.getElementById("heightInput")
    this.inputWeight = document.getElementById("weightInput")
    this.inputHeight = document.getElementById("heightInput")
    this.target = document.getElementById('resultImcInput')
  }

  getImc(event){
    event.preventDefault()

    let model = new Patient(this.inputName.value, this.inputAge.value ,this.inputWeight.value, this.inputHeight.value)
    let view = new PatientView(this.target)

    view.update(model)
  }
}
