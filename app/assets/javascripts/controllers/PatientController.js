class PatientController {

  constructor(){

    this.inputName = document.querySelector("#nameInput")
    this.inputAge = document.querySelector("#ageInput")
    this.inputWeight = document.querySelector("#weightInput")
    this.inputHeight = document.querySelector("#heightInput")
    this.target = document.querySelector('#target')

    new InputMask([this.inputHeight, this.inputWeight])
    this.patientList = new PatientList()
    this.view = new PatientView(this.target)
  }

  add(event){
    event.preventDefault()

    this.patientList.add(new Patient(
          this.inputName.value,
          this.inputAge.value,
          this.inputWeight.value,
          this.inputHeight.value))

    this.view.update(this.patientList.list)
    this.clearForm()
  }

  clearForm(){
    this.inputName.value = ''
    this.inputAge.value = ''
    this.inputWeight.value = ''
    this.inputHeight.value = ''
    this.inputName.focus()

  }

}
