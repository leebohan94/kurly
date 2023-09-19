(function($,window){

   const obj = {
      init: function(){
         this.main();
      },
      main: function(){
        // 1. 제이쿼리 $ 충돌 막기 위해서 즉시표현함수식(IIFE) 사용
         // 2. 홈페이지에 각 요소 마다 사용되는 변수가 중복사용 막기위해서 객체(Object)사용
         // 3. 홈페이지에 각 요소 마다 사용되는 선택자 클래스 요소가 공용사용되는 경우를 막기위서 
         //    고유한 아이디를 활용 변수를 지정하여 사용 
         //    요소 선택자(Element Selector) 변수 접두어는 달러사인 사용하여 다른변수와 차별화한다.
         const  $serviceCenterBtn =  $('#header .service-center-btn');
         const  $serviceBox       =  $('#header .service-box');
         const  $mapTootipBtn     =  $('#header .map-tootip-btn');
         const  $mapTooltipBox    =  $('#header .map-tooltip-box');
         const  $topTooltip       =  $('#header .top-tooltip');
         const  $mapTooltipMemnu  =  $('#header .map-tooltip-memnu');

         
         // 고객센터 버튼에 마우스 올리면
         $serviceCenterBtn.on({
            mouseenter: function(){
               $topTooltip.show();
            }
         });

         // 해당칸을 마우스가 떠나면 툴팁메뉴 숨김
         $serviceBox.on({
            mouseleave: function(){
               $topTooltip.hide();
            }
         });

         // 배송지 마우스 오버 이벤트
         $mapTootipBtn.on({
            mouseenter: function(){
               $mapTooltipMemnu.show();
            }
         });

         // 배송지 박스 영역을 떠나면 툴팁메뉴 숨김
         $mapTooltipBox.on({
            mouseleave: function(){
               $mapTooltipMemnu.hide();
            }
         })




         // 윈도우 스크롤 이벤트
         // 현재 스크롤탑값(scrollTop()) 이 100픽셀 이상이면 헤더영역 row3을 고정한다.
         $(window).scroll(function(){
            if( $(window).scrollTop() >= 100 ){
               $('#header .row3').addClass('on');
            }
            else{
               $('#header .row3').removeClass('on');
            }
         });

 
      }
   }
   obj.init();

})(jQuery, window);