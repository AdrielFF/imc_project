class PatientController {

  constructor(){

    this.inputWeight = document.getElementById("weight")
    this.inputHeight = document.getElementById("height")
    this.target = document.getElementById('resultImc')
  }

  getImc(event){
    event.preventDefault()

    let model = new Patient(this.inputWeight.value, this.inputHeight.value)
    let view = new PatientView(this.target)

    view.update(model)
  }
}
