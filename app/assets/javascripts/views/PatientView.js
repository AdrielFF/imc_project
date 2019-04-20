class PatientView {

  constructor(element){
    this.element = element;

  }


  template(model){

    return `<table class="table table-bordered">
              <thead>

                <tr>
                  <th>Nome</th>
                  <th>Altura</th>
                  <th>Peso</th>
                  <th>Resultado</th>
                  <th>Dia</th>
                </tr>

              </thead>

              <tbody>
              ${model.map(data => `
                <tr>
                  <td>${data._name}</td>
                  <td>${data._height} m</td>
                  <td>${data._weight} kg</td>
                  <td>${"("+data._imc.result+") "+data._imc.description}</td>
                  <td>${data._date}</td>
                <tr>
                `
              )}
              </tbody>
            </table>`;

  }

  update(model){
    this.element.innerHTML = this.template(model);
  }

}
