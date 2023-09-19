(function($,window){

   const obj = {
      init: function(){
         this.main();
      },
      main: function(){
          // 인트로 모달 닫기
          $('#introModal .close-btn').on({
            click:function(e){
               e.preventDefault();
               alert();
               $('#introModal').fadeOut(600);
            }
         });

         // 인트로 모달 닫기
         // 다시는 안보기 : 로컬스토레이지 메로리 사용
         $('#introModal .close-open-none-btn').on({
            click:function(e){
               e.preventDefault();
               $('#introModal').fadeOut(600);
               localStorage.setItem('MJKURLYINTROMODAL', 'marketkurlyintomodal');               
            }
         });


         // 웹페이지 열리면 또는 새로고치면
         // 로컬스토레이지 키와 값을 가져오기
         // 그리고 가져온 키와 비교 있다면 모달 숨김
         // 만약에 키가 없다면 열림
         // 키가 없으면 값이 없다 그래서 null
         if( localStorage.getItem('MJKURLYINTROMODAL')!==null ){
            $('#introModal').fadeOut(0); // 인트로 모달창 숨기기
         }
         else{
            $('#introModal').fadeIn(0);  // 인트로 모달창  보이기
         }

        
        
      }
   }

   obj.init();


})(jQuery, window);