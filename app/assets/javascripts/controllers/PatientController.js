class PatientController {

  constructor(){

    this.weight = document.getElementById("weight");
    this.height = document.getElementById("height");

  }

  getImc(event){

    event.preventDefault();

    let model = new Patient(this.weight.value, this.height.value);

    let view = new View(document.getElementById('resultImc'));

    view.update(model);

  }

}
