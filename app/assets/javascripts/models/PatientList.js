class PatientList {

  constructor(){

    this.patients = JSON.parse(localStorage.getItem("patiens"))

  }

  init(){

  }

  add(patient){

    if(this.patients == null){
      this.patients = []
    }

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
