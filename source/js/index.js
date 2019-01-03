class Index {
  constructor () {
    this.slideIndex = 1
    this.watch()
  }

  watch () {
    this.showSlides(this.slideIndex)

    $(".next").on("click", function(e) {
      this.plusSlides(1)
    }.bind(this));

    $(".prev").on("click", function(e) {
      this.plusSlides(-1)
    }.bind(this));
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {this.slideIndex = 1} 
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    
    if (this.slideIndex-1 == 0 || this.slideIndex-1 == 1) {
      slides[this.slideIndex-1].style.display = "block";
      slides[this.slideIndex].style.display = "block";
    }

  }
}

const index = new Index()