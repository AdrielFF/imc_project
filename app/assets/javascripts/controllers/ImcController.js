class ImcController {

  constructor(){

    this.weight = document.getElementById("weight");
    this.height = document.getElementById("height");

  }

  getImc(event){

    event.preventDefault();

    this.result = new DadosPessoa(this.weight.value, this.height.value);

    let view = new View(document.getElementById('result'));

    view.render(Math.floor(this.result.getResult()), this.result.getSituation());
  }

}
