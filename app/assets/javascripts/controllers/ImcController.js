class ImcController {

  constructor(){

    this.weight = document.getElementById('weight');
    this.height = document.getElementById('height');
    this.result = new Result();

  }

  calculate(event){

    event.preventDefault();

    let view = new View(document.getElementById('result'));

    view.render(Math.floor(this.result.getResult(this.weight.value, this.height.value)));

  }

}
