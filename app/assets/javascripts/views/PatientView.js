class PatientView {

  constructor(element){
    this.element = element;

  }


  template(model){
    return `<div class='alert alert-primary' role='alert'>
      <p>IMC:${model.imc} </p>
      <p>situação: ${model.imcDescription}</p>
    </div>`;

  }

  update(model){
    this.element.innerHTML = this.template(model);
  }

}
