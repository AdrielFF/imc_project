class DadosPessoa {

  constructor(weight, height){

    this.weight = weight;
    this.height = height;
  }

  // calculateImc(){
  //
  //   let heightSqr = this.height * this.height;
  //   let result = this.weight/heightSqr;
  //   this.result = Math.floor(result);
  //   return this.result;
  // }

  get situation(){

    if(this.result < 18.5){

      return "abaixo do peso";

    }else if(this.result >= 18.5 && this.result <= 24.9){

      return "peso normal";

    }else if (this.result >= 25 && this.result <= 29.9){

      return "sobrepeso";

    }else if(this.result >= 30 && this.result <= 34.9){

      return "obesidade grau 1";

    }else if(this.result >= 35 && this.result <= 39.9){

      return "obesidade grau 2";

    }else{

      return "obesidade grau 3";
    }

  }

  get result(){

    let heightSqr = this.height * this.height;
    let result = this.weight/heightSqr;
    return Math.floor(result);

  }

}
