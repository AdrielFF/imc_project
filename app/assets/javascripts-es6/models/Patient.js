class Patient {

  constructor(pName, pDate, pWeight, pHeight){

    this._name = pName
    this._date = pDate.convert()
    this._weight = pWeight
    this._height = pHeight
    this._imc = new ImcConsultation(this.weight, this.height)
    this._imc = this._imc.result

    Object.freeze(this)
  }

  get name() {
    return this._name
  }

  get date() {
    return this._date
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
