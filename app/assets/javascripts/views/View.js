class View {

  constructor(element){

    this.element = element;

  }

  template(){
    console.log("está vindo pra cá");
  }


  update(model){

      this.element.innerHTML = this.template(model);
  }

}
