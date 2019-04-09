class ImcController {

  constructor(){

    this.weight = document.getElementById("weight");
    this.height = document.getElementById("height");

  }

  getImc(event){

    event.preventDefault();

    let model = new DadosPessoa(this.weight.value, this.height.value);

    let view = new View(document.getElementById('result'));

    view.update(model);

  }

}
