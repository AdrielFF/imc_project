class PatientView {

  constructor(element){
    this.element = element;

  }


  template(model){

    return `<table class="table table-bordered">
              <thead>

                <tr>

                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Altura</th>
                  <th>Peso</th>
                  <th>IMC</th>
                  <th>Resultado<th>
                </tr>

              </thead>

              </tbody>
              ${model.map(data => `
                <tr>
                  <td>${data.name}</td>
                  <td>${data.age}</td>
                  <td>${data.height} m</td>
                  <td>${data.weight} kg</td>
                  <td>${data.imc.result}</td>
                  <td>${data.imc.description}<td/>
                <tr>
                `
              )}
              </tbody>
            <table>`;

  }

  update(model){
    this.element.innerHTML = this.template(model);
  }

}
