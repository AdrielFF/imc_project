class Date {

  constructor(date){
    this.date = date
    
  }

  convert(){

    let dateNumOnly = this.date.replace(/\D/g, '')
    let year = dateNumOnly.replace(/(\d{4})(\d{4})/, '$1')
    let month = dateNumOnly.replace(/(\d{4})(\d{2})(\d{2})/, '$2')
    let day = dateNumOnly.replace(/(\d{4})(\d{2})(\d{2})/, '$3')

    return day + "/" + month + "/" + year

  }
}
