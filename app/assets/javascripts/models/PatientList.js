class PatientList {

  constructor(){
    this.patients = []
  }

  add(patient){
    this.patients.push(patient)
  }

  get list(){
    return [].concat(this.patients)
  }

}
