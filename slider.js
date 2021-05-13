let slider1 = {
  showPrevBtn: document.getElementById("show-prev"),
  showNextBtn: document.getElementById("show-next"),
  slideImage: document.getElementById("slider-img"),
  imagesUrl: ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg"],
  currentImageIndex: 0,
  imagesUrlLastIndex: function () {
    let that = this;
    that.imagesUrl.length - 1;
  },


  start: function () {
    let that = this;
    //подписываемся на события
    that.showPrevBtn.addEventListener("click", function (e) {
      that.onShowPrevBtnClick;
      console.log("its OK");
    });
    //this.onShowPrevBtnClick);
    that.showNextBtn.addEventListener("click", function (e) {
      that.onShowNextBtnClick;
      console.log("its OK");
    });

    //массив картинок
    // this.imagesUrl.push("img/01.jpg");
    // this.imagesUrl.push("img/02.jpg");
    // this.imagesUrl.push("img/03.jpg");
    // this.imagesUrl.push("img/04.jpg");
    // this.imagesUrl.push("img/05.jpg");
    // this.imagesUrl.push("img/06.jpg");



    that.slideImage.src = that.imagesUrl[that.currentImageIndex];


  },

  onShowPrevBtnClick: function (e) {
    let that = this;
    console.log("click on prevBtn");
    if (that.currentImageIndex === 0) {
      that.currentImageIndex = that.imagesUrlLastIndex + 1;
    };
    that.currentImageIndex--;
    that.slideImage.src = that.imagesUrl[that.currentImageIndex];
  },
  onShowNextBtnClick: function (e) {
    let that = this;
    if (that.currentImageIndex === that.imagesUrlLastIndex) {
      that.currentImageIndex = -1;
    };
    that.currentImageIndex = that.currentImageIndex + 1;
    that.slideImage.src = that.imagesUrl[that.currentImageIndex];
  }
}