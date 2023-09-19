(function($, window){

   const obj = {
      init: function(){
         this.main();
      },
      main: function(){
          
         // console.log( $('#section2 .slide-container').offset().top );

         // 스크롤 탑값이 300 이상이면 고정하는 이벤ㄴ트
         $(window).scroll(function(){
            if( $(window).scrollTop() >=300 ){
               $('#quickMenu').addClass('on');
            }
            else{
               $('#quickMenu').removeClass('on');
            }
         })

      }
   }

   obj.init();


})(jQuery, window);