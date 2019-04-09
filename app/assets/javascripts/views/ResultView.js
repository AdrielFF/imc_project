class ResultView extends View {

  constructor(element){
    super(element);
    
  }


  template(model){
    return `<div class='alert alert-primary col-md-6 offset-md-3' role='alert'>
      <p>IMC:${model.result} </p>
      <p>situação: ${model.situation}</p>
    </div>`;

  }

}
