(function($,window){

   const obj = {
      init: function(){
         this.main();
      },
      main: function(){
          
         //1. 탑모달 닫기 그리고 쿠키 설정하기  7일간 안보기
         $('.top-modal-close').on({
            click: function(){
               $('#topModal').fadeOut(0);
               let newDate = new Date();// 날짜 객체 생성
               
               // 7일간 설정
               newDate.setDate(newDate.getDate()+7);

               // document.cookie = `쿠키이름=쿠키값;  경로=/;  만료일expires=쿠키설정날짜기한.국제표준시설정;`;
               document.cookie = `KURLYTOPMDAL=mjkurlytopmodal; path=/; expires=${newDate.toUTCString()};`;

            }
         });

         //2. 쿠키 가져오기
         //   쿠키이름, 쿠키값이  일치한 쿠키를 찾는다
         //   만료기한이 남아 있다면 모달 숨긴다.
         //   만료기한이 지나면 모달 보인다.
         function getCookie(){

               if(document.cookie==='') return;

               const cookie = document.cookie.split(';');  // 쿠키를 쎄미콜론 단위로 나누어서 배열처리 저장
               let   arr = [];

               // 배열에 쿠키이름, 쿠키값 속성별 저장하기
               cookie.map((item, idx)=>{
                  arr[idx] = {
                     쿠키이름 : item.split('=')[0].trim(),
                     쿠키값 :   item.split('=')[1].trim()
                  }
               })

            // 쿠키이름, 쿠키값이  일치한 쿠키를 찾는다 
            arr.map((item)=>{
                  // 쿠키이름, 쿠키값 이 있다면(찾았다면) 모달 숨기기
                  if( item.쿠키이름==='KURLYTOPMDAL' && item.쿠키값==='mjkurlytopmodal' ){
                     $('#topModal').fadeOut(0);
                     return;
                  }               
            })
         }
         getCookie();
        

      }
   }
   obj.init();

})(jQuery,window);