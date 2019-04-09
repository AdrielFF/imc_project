class PatientView {

  constructor(element){
    this.element = element;

  }


  template(model){
    return `<div class='alert alert-primary col-md-6 offset-md-3' role='alert'>
      <p>IMC:${model.imc} </p>
      <p>situação: ${model.imcDescription}</p>
    </div>`;

  }

  update(model){
    this.element.innerHTML = this.template(model);
  }

}
