class Patient {

  constructor(weight, height){

    this.weight = weight;
    this.height = height;
  }

  calculateImc(){

     let heightSqr = this.height * this.height;
     let resultImc = this.weight/heightSqr;
     return Math.floor(resultImc);
  }

  get imc(){
     return this.calculateImc();
  }


  get imcDescription(){

    console.log(this.calculateImc());

    if(this.calculateImc() < 18.5){

      return "abaixo do peso";

    }else if(this.calculateImc() >= 18.5 && this.calculateImc() <= 24.9){

      return "peso normal";

    }else if (this.calculateImc() >= 25 && this.calculateImc() <= 29.9){

      return "sobrepeso";

    }else if(this.calculateImc() >= 30 && this.calculateImc() <= 34.9){

      return "obesidade grau 1";

    }else if(this.calculateImc() >= 35 && this.calculateImc() <= 39.9){

      return "obesidade grau 2";

    }else{

      return "obesidade grau 3";
    }

  }


}
