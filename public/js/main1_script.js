(($, window)=>{

    // 객체생성(리터럴) => 프로토타입 객체
    const Obj = {
        init(){
            this.catagoryFn();
            this.newProduct();
        },
        catagoryFn(){ // 좌측 카테고리 버튼 이벤트
           const categoryBtn = $('#section2 .left .category-btn');
             
           categoryBtn.on({
                click: function(e){
                    e.preventDefault();
                    // $(this).next().slideUp(300);
                    // $(this).next().slideDown(300);
                    $(this).next().slideToggle(300);
                    // 현재  a 버튼 자식요소 중 svg 선택하여  화살방향 회전 클래스 추가 삭제
                    // $(this).children('svg').addClass('on');
                    // $(this).children('svg').removeClass('on');
                    // $(this).children('svg').toggleClass('on');
                    $(this).find('svg').toggleClass('on');
                }
           });
        },
        newProduct(){  //신상품 제품관리 스크립트, 외부데이터 JSON 데이터를 생성 사용
            // DATA 폴더안에 new_product.json 파일 객체 저장해두고 
            // 로딩시 JSON 객체 파일을 가져와서 신상품 컨텐츠를 구성하도록 바인딩 시킨다.
            // 반복문 사용 처리한다.
            // 판매가 는 할인율과  정가에 의해서 계산된다.
            // 판매가와 정가는 3자리마다. 콤머형식 표현한다. 정규표현식

            // 1. JSON 객체 가져오기 AJAX API 비동기 방식 처리
            $.ajax({
                url: './data/product.json',
                dataType: 'JSON',
                success: function(result){
                    // console.log('AJAX 성공 ', result.신상품 );
                    // console.log('AJAX 성공 ', result.베스트 );
                    // console.log('AJAX 성공 ', result.알뜰상품 );
                    // console.log('AJAX 성공 ', result.특가혜택 );
                    // 반복문 반복처리 

                    // 정규 표현식
                    // 1. 정규 표현식 표현 형식 문법
                    // // 표현식을 감싸는 기호(슬래쉬로 시작)
                    // [] 곽괄호 의미 범위
                    // [^] 부정(NOT)
                    // {5} 5자
                    // {5,} 5자 이상
                    // {5,12} 5~12 범위 
                    // +  1자이상
                    // *  0자이상
                    // ?  0자 또는 1자
                    const regexpLowerCase1  = /[a-z]/g;        // 영문소문자 a-z
                    const regexpLowerCase2  = /^[a-z]{5}$/g;     // 영문소문자 a-z 5자 제한
                    const regexpLowerCase3  = /^[a-z]{5,}$/g;     // 영문소문자 a-z  최소 5자 이상 ~
                    const regexpLowerCase4  = /^[a-z]{5,10}$/g;     // 영문소문자 a-z 5 ~ 10자로 제한 전체  ^ 시작    $ 끝
                    const regexpUpperCase   = /^[A-Z]$/g;     // 영문대문자 a-z
                    const regexpUpperLower  = /^[A-Z]$/gi;   // 영문대소문자 A-Z a-z
                    const regexpUpperLower2 = /^[a-a]$/gi;   // 영문대소문자 A-Z a-z
                    const regexpNumber1     = /^[0-9]$/g;  // 숫자 0 ~ 9 
                    const regexpNumber2     = /^[^0-9]$/g;  // 부정 숫자가 아닌것 [] 곽괄호안에 ^ 부정(not)
                    const regexpNumber3     = /^[\d]$/g;   // 시작 숫자로시작하고 끝나는것도 숫자 숫자 0 ~ 9 범위
                    const regexpNumber4     = /^[^\d]$/g;   // 숫자 부정 0 ~ 9 범위 => 숫자가 아닌것
                    const regexpNumber5     = /(\d)/g;   // 그룹지정은 숫자 0 ~ 9 범위 => 숫자
                    const regexpNumber6     = /(^\d)/g;   // 그루지정은 시작이 숫자0 ~ 9 범위 => 숫자
                    const regexpNumber7     = /^(\d)$/g;   // 숫자 0 ~ 9 범위 => 숫자 문자 숫자 섞인경우 
                    const regexpNumber8     = /[\d]/g;   // 숫자 0 ~ 9 그룹 ()()() 전화번호형식, ()()우편번호형식, ()()사업자번호형식
                    const regexpNumber9     = /^[\d]$/g;     // 숫자 0 ~ 9 기본숫자

                    // 유효성 검증 테스트 test() 사용 => true, false
                    // console.log(  정규표현식.test('문자열') );
                    // console.log(  RegExp.test('string') );
                    const str0 = 'megaq';
                    const str1 = 'megacomputer';
                    const str2 = 'MEGACOMPUTER';
                    const str3 = 'mega2 computer1';
                    const str4 = '12345';  /* 숫자만 */
                    const str5 = '12345love';  /* 숫자, 문자 섞인경우 */
                    const str6 = 'Mega Computer';
                    // 함수 만들고 
                    // 정규표현식 만들기
                    // 콤머형식을 구현
                    // 판매가를 가져와서 확인
                    function commaDecimal(value){
                        // console.log('판매가 호출한 숫자 숫자 자료형[number] : ',  value     );
                        let strValue = value.toString();  // 숫자(number) => 문자열(string) : 타입  형변환
                        // console.log('판매가 호출한 숫자 문자열 숫자 문자자료형[string] : ',  strValue  );
                        // return value;  // 되돌려주기 콤머형식을 만들어서 보내주기  142,000

                        // 숫자 3자리 마다 콤머형식을 정규표현식으로 만들기
                        // 보내온 숫자를 콤머형식으로 치환(변경하기) replace(정규표햔식, '(그룹1),(그룹2)' )
                        // 898   그룹2 3자만 있어서 콤머 형식 없음.
                        // 5 898 => (5는 시작 숫자1자이상),(뒤3자는 숫자) => 5,898

                        // const regExp = /(시작숫자가1자이상\d+)(뒷3자리 숫자\d{3})/g;
                        const regExp = /(^\d+)(\d{3})/g;  //4자이상 인경우 콤머형식

                        // 숫자문자열.replace(REGEXP, '$1,$2');
                        // 반복문
                        // 조건이 만족하면 계속 만족안하면 끝 while(){};
                        // 1,000,000,000,000,000
                        while( regExp.test(strValue) ){ // 숫자가 4자리 이상이면 반복처리하면 천단위 백만단위 10억 단위....
                            strValue = strValue.replace(regExp, '$1,$2');
                            // console.log(  strValue  );                       
                        }
                        return strValue;
                    }

                    let txt ='';
                    result.신상품.map((item, idx)=>{
                        // return console.log( idx,  item.제품코드, item.제품이미지, item.제품명, item.할인율, item.정가, item.판매처 );
                        txt += `<li class="product-list">`;
                        txt += `    <div class="gap">`;
                        txt += `    <div class="img-box">`;
                        txt += `        <a href="#">`;
                        txt += `            <img src="./img/main1/${item.제품이미지}" alt="" />`;
                        txt += `            <span><img src="./img/main1/cart_fill.svg" alt="" /></span>`;
                        txt += `        </a>`;
                        txt += `    </div>`;
                        txt += `    <div class="caption-box">`;
                        txt += `        <h2>${item.제품명}</h2>`;
                        txt += `        <h3>
                                            ${ item.할인율 > 0 ? `<strong>${Math.round(item.할인율*100)}%</strong>` : `` }
                                            <em>${commaDecimal(Math.round(item.정가*(1-item.할인율)))}원</em>
                                        </h3>`;
                        txt += `        ${ item.할인율 > 0 ?  `<h4><s>${commaDecimal(item.정가)}원</s></h4>` : `` }`;
                        txt += `    </div>`;
                        txt += `    </div>`;
                        txt += `</li>`;
                    });

                    // 출력 바인딩
                    $('#section2 .new-product-gallery').append( txt );


                },
                error: function(error){
                    console.log('AJAX 실패 ',  error );
                }
            });

        }
    }
    Obj.init();
    
})(jQuery, window);