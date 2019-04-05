class View {

  constructor(element){

    this.element = element;

  }


  render(result, situation){
    
      this.element.innerHTML = `<div class='alert alert-primary col-md-6 offset-md-3' role='alert'>
        <p>IMC:${result} </p>
        <p>situação: ${situation}</p>
      </div>`;
  }

}
