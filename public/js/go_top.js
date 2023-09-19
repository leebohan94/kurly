(function($, window){
   'use strict'; // 자바스크립트 업격한 모드 

   const obj = {
      init: function(){
         this.main();
      },
      main: function(){

         // 예외적인 오류 발생을 막기 위해 
         // 예외적 오류 처리 
         // try {} catch {}
         // try {} catch(e) {}
         let sec5Top = 250;
         try {
            // 만약 섹션5가 없어서 오류 발생하면 catch 에게 넘긴다.
            sec5Top = $('#section2').offset().top;
         }  
         catch(err) {
            // catch는 오류발생시 아래의 내용을 수행한다.           
            sec5Top = 250;
         } 
         
         // 반드시 스크롤 이벤트가 발생 되어야 실행된다.
         $(window).scroll(function(){
            if( $(window).scrollTop() >= sec5Top ){
               $('#goTop').addClass('on');
            }
            else{
               $('#goTop').removeClass('on');
            }
         });
        
        $('.gotop-btn').on({
            click(e){
               e.preventDefault();
               $('html,body').stop().animate({scrollTop: 0}, 600);
            }
        });


      }
   }

   obj.init();


})(jQuery, window);