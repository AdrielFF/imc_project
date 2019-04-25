class ResponsiveMenu {

  constructor(){

    this.trigger = document.getElementById("trigger-menu");
    this.menu = document.querySelector(".nav-menu")

    this.init()
  }

  init(){
    this.responseMenu()
    this.hideHeader()
  }

  responseMenu(){
    this.trigger.addEventListener("click", () => {
      this.menu.classList.toggle("active")
    })
  }

  hideHeader(){
    let prevScrollPos = window.pageYOffset
    window.onscroll = function(){
      let currentScrollPos = window.pageYOffset

      if(prevScrollPos > currentScrollPos){
        document.getElementById("header").style.top = "0"
        document.querySelector(".carousel-container").style.top = "8vh"
      }else{
        document.getElementById("header").style.top = "-8vh"
        document.querySelector(".carousel-container").style.top = "0"
      }

      prevScrollPos = currentScrollPos

    }
  }

  toggle(element){
    element.classList.toggle("active")
  }

}
