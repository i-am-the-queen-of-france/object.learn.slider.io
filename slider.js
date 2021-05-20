const slider1 = {
  showPrevBtn: document.getElementById("show-prev"),
  showNextBtn: document.getElementById("show-next"),
  slideImage: document.getElementById("slider-img"),
  imageUrls: ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"],
  currentImageIndex: 0,
  imageUrlsLastIndex: function() {
    return this.imageUrls.length - 1;
  },


  start: function () {
    this.showPrevBtn.addEventListener("click", this.onShowPrevBtnClick.bind(slider1));
    this.showNextBtn.addEventListener("click", this.onShowNextBtnClick.bind(slider1));

    this.slideImage.src = this.imageUrls[this.currentImageIndex];
  },

  onShowPrevBtnClick: function () {
    this.currentImageIndex--;
    if (this.currentImageIndex === -1) {
      this.currentImageIndex = this.imageUrlsLastIndex();
    }
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
  },
  onShowNextBtnClick: function () {
    this.currentImageIndex++;
    if (this.currentImageIndex > this.imageUrlsLastIndex()) {
      this.currentImageIndex = 0;
    }
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
  }
}