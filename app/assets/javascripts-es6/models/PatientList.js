class PatientList {

  constructor(){
    this.patients = (localStorage.patients == null) ? ([]) : (this.patients =JSON.parse(localStorage.patients))

  }

  add(patient){

    this.patients.push(patient)
    localStorage.setItem("patients", JSON.stringify(this.patients))
  }

  get list(){
    if(localStorage.getItem("patients") === null){
      return []
    }

    return JSON.parse(localStorage.getItem("patients"))
  }

  clear(){
    localStorage.removeItem("patients")
    this.patients = []
  }

}
