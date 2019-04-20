class Carousel {

  constructor(){

    this.images = document.getElementsByClassName('carousel-container__image-container')
    this.imageIndex = 0
    this.images[this.imageIndex].style.opacity = 1

    this.init()
  }

  init(){

    setInterval(() => {
      this.nextSlide(this.imageIndex + 1)
    }, 3000)

  }

  nextSlide(n){

    if(n != this.imageIndex){
      if(n >= this.images.length){n=0}

      let current = this.images[this.imageIndex]
      let next = this.images[n]

      for(let i = 0; i < this.images.length; i++){
        this.images[i].className= "carousel-container__image-container"
        this.images[i].style.opacity = 0
      }

      current.classList.add('current')
      next.classList.add('next')

      this.imageIndex = n
    }


  }

}
