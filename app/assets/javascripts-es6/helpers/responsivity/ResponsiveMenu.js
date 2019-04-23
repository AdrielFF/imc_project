class ResponsiveMenu {

  constructor(){

    this.trigger = document.getElementById("trigger-menu");
    this.menu = document.querySelector(".nav-menu")

    this.init()
  }

  init(){
    this.trigger.addEventListener("click", () => {
      this.menu.classList.toggle("active")
    })
  }

}
