class PatientController {

  constructor(){

    this.inputName = document.querySelector("#nameInput")
    this.inputDate = document.querySelector("#dateInput")
    this.inputWeight = document.querySelector("#weightInput")
    this.inputHeight = document.querySelector("#heightInput")
    this.target = document.querySelector('#target')

    new InputMask([this.inputHeight, this.inputWeight])
    this.patientList = new PatientList()
    this.view = new PatientView(this.target)
    this.view.update(this.patientList.list)
  }

  add(event){
    event.preventDefault()

    this.patientList.add(new Patient(
          this.inputName.value,
          new Date(this.inputDate.value),
          this.inputWeight.value,
          this.inputHeight.value))

    this.view.update(this.patientList.list)
    this.clearForm()
  }

  clearTable(){
    this.patientList.clear()
    this.view.update(this.patientList.list)
  }

  clearForm(){
    this.inputName.value = ''
    this.inputDate.value = ''
    this.inputWeight.value = ''
    this.inputHeight.value = ''
    this.inputName.focus()

  }

}
