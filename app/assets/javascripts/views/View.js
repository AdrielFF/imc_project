class View {

  constructor(element){

    this.element = element;

  }


  render(result){
    if(result < 18.5){

      this.element.innerHTML = `<div class='alert alert-danger' role='alert'><p>IMC:</p>${result} abaixo do peso </div>`;

    }else if(result >= 18.5 && result <= 24.9){

      this.element.innerHTML = `<div class='alert alert-success' role='alert'><p>IMC:</p>${result} peso normal </div>`;

    }else if (result >= 25 && result <= 29.9){

      this.element.innerHTML = `<div class='alert alert-danger' role='alert'><p>IMC:</p>${result} sobrepeso </div>`;

    }else if(result >= 30 && result <= 34.9){

      this.element.innerHTML = `<div class='alert alert-danger' role='alert'><p>IMC:</p>${result} obesidade grau 1 </div>`;

    }else if(result >= 35 && result <= 39.9){

      this.element.innerHTML = `<div class='alert alert-danger' role='alert'><p>IMC:</p>${result} obesidade grau 2 </div>`;

    }else{
      this.element.innerHTML = `<div class='alert alert-danger' role='alert'><p>IMC:</p>${result} obesidade grau 3 </div>`;
    }

  }

}
