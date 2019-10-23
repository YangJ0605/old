!function ()  {
  var view = document.querySelector('#sideWorks')
  var controller = {
    view:null,
    swiper:null,
    init:function(view){
      this.view = view
      this.initSwiper()
    },
    swiperOptions:{
        // Optional parameters
        //   direction: 'vertical',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        }
    },
    initSwiper: function(){
       this.swiper = new Swiper (
        this.view.querySelector('.swiper-container'),
        this.swiperOptions
      )
    }
  }
  controller.init(view)
}.call()