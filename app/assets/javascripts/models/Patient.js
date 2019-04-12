class Patient {

  constructor(pName, pAge, pWeight, pHeight){

    this.name = pName
    this.age = pAge
    this.weight = pWeight
    this.height = pHeight
  }

  calculateImc(patient){
    this.imc = (patient.weight / (patient.height * patient.height)).toFixed(0)
    return this.imc
  }

  get imcDescription(){

    let msg
    const imc = this.imc
    switch (true) {
      case imc < 18.5:
        msg = "Abaixo do peso"
        break

      case imc >= 18.5 && imc <= 24.9:
        msg = "Peso normal"
        break

      case imc >= 25 && imc <= 29.9:
        msg = "Sobrepeso"
        break

      case imc >= 30 && imc <= 34.9:
        msg = "obesidade grau 1"
        break

      case imc >= 35 && imc <= 39.9:
        msg = "obesidade grau 2"
        break

      default:
        msg = "obesidade grau 3"
        break
    }

    return msg
  }
}
