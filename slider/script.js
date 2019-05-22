var slider = {
    slides: ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg'], // массив картинок
    hit: ['currentSlide1', 'currentSlide2', 'currentSlide3', 'currentSlide4'],
    frame: 0 , // начальный кадр
    set: function(image) { //установака слайдеру нужного фона
        document.getElementById("slider").style.backgroundImage = "url("+image+")";
    },
    init: function () { //запуск слайдера с начальной картинкой
        this.set(this.slides[this.frame]);
    },
    left: function() { //листание влево 
        this.frame--;
        if (this.frame < 0) this.frame = this.slides.length-1;
        this.set(this.slides[this.frame]);
        slider.setHit();
    },
    right: function() { //листание вправо 
        this.frame++;
        if (this.frame == this.slides.length) this.frame = 0;
        this.set(this.slides[this.frame]);
        slider.setHit();
    },
    setHit: function() { // подсветка текущего слайда
        document.getElementById(this.hit[this.frame]).classList.add("activeCurrentSlidItem");
        document.getElementById(this.hit[this.frame]).classList.remove("currentSlidItem");

        for (i = 0; i <= (this.hit.length-1); i++){
            if (i != (this.frame)) {
                document.getElementById(this.hit[i]).classList.remove("activeCurrentSlidItem");
                document.getElementById(this.hit[i]).classList.add("currentSlidItem");
            }
        }
    }
};

window.onload = function() {
    slider.init();
    setInterval(function() {
        slider.right();
        slider.setHit();
    },5000);
};