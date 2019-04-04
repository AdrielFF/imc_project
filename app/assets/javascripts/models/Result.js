class Result {

  constructor(){

  }

  getResult(weight, height){

    let heightSqr = height*height;

    let result = weight/heightSqr;

    return result;

  }

}
