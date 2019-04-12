class ImcConsultation {

  constructor(weight, height){
    this.weight = weight
    this.height = height
    this._results = {}
  }

  get result(){
    this.imcCalc = this.calculateImc()
    this.imcDescription = this.imcDescription()

    this._results.result = this.imcCalc
    this._results.description = this.imcDescription
    return this._results
  }

  calculateImc(){
    return (this.weight / (this.height * this.height)).toFixed(0)
  }

  imcDescription(){

    let msg
    const imc = this.imcCalc
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
