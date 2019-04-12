class Patient {

  constructor(pName, pAge, pWeight, pHeight){

    this._name = pName
    this._age = pAge
    this._weight = pWeight
    this._height = pHeight
    this._imc = new ImcConsultation(this.weight, this.height)
    this._imc = this._imc.result

    Object.freeze(this)
  }

  get name() {
    return this._name
  }

  get age() {
    return this._age
  }
  get weight() {
    return this._weight
  }
  get height() {
    return this._height
  }
  get imc() {
    return this._imc
  }

}
