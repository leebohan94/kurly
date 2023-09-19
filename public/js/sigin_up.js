(($,window,document)=>{

    const SignUp = {
        member:{
            아이디:'', //string
            아이디중복확인: false,  //boolean  

            비밀번호:'', //string
            비밀번호확인: false, //boolean  
            
            이름:'',  //string
            
            이메일:'', //string
            이메일중복확인: false,  //boolean  

            휴대폰:'',        //string
            휴대폰인증번호: 0, //number

            분: 2,           //number
            초: 59,          //number
            setId: 0,        //number

            주소:'', //string
            
            성별:'', //string
            
            생년월일:'',//string
            추가입력사항:'',//string
            이용약관동의: [] //Array<string>
        },
        init(){
            this.main();
        },
        main(){
            const that = this;
            // 입력폼 데이터 유효성검사와 데이터 전송
            // 1. 아이디 입력상자 
            // Event : onchange onkeyup  키보드로 입력하면 즉시 입력값을 점검한다.
            // 1) 특수문자입력과동시 삭제 
            // 2) 한글입력사용안됨.
            // 3) 영문혹은 / 영문과숫자조함
            // 4) 6자 ~ 16자
            // 5) 동일한 연속된 글자 3자 ddd
            // 6) 공백사용안됨.
            $('#userId').on({
                keyup(){
                    
                    const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]/g; //특수문자
                    const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; // 한글
                    const regExp3 = /[A-Za-z]+[0-9]*/g;  // 영문 또는 영문숫자
                    const regExp4 = /.{6,16}/g;          // 어떤 글자 .닷 6 ~ 16
                    const regExp5 = /(.)\1\1/g;          // 동일한 연속된 글자 3자 ddd
                    const regExp6 = /\s/g;               // 공백 

                    // 1. 정규표현식 특수문자가 아니면 삭제(공백으로 치환)
                    //    문자열.replace(정규식, '');
                    $(this).val( $(this).val().replace(regExp1,'') ); // 삭제된 내용을 다시 입력

                    if( regExp2.test($(this).val())===true  || regExp3.test($(this).val())===false || regExp4.test($(this).val())===false  || regExp5.test($(this).val())===true || regExp6.test($(this).val())===true ){ // 한글 || 영숫자 || 6~16 || 연속동일문자3자
                        $(this).parent().next().addClass('on').text('6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 동일한 문자 연속3자 이상 허용 안함,  한글 허용 안함, 공백 허용 안함.');

                    }
                    else {
                        $(this).parent().next().removeClass('on');
                        that.member.아이디 = $(this).val();
                    }

                }
            });


            // 2. 비밀번호 입력상자
            // Event: keyup
            // 1) 영문/숫자/특수문자만 허용하며, 2개 이상 조합(숫특수|영숫자|영특수)
            // 2) 최소 10자 이상 입력
            // 3) 한글 허용 안됨
            // 4) 공백 허용 안됨
            // 5) 동일한 연속된 글자 3자 안됨
            $('#userPw').on({
                keyup(){                    
                    // 1개씩 확인하고 모두 조합
                    // const regExp = /([A-Za-z]+[0-9]+)+/g;  // 영문 또는 영문숫자
                    // const regExp = /([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                    // const regExp = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                    const regExp1 = /([0-9]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]+)+/g;  // 영문 또는 영문숫자
                    const regExp2 = /.{10,}/g;           // 10자이상~ 
                    const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; // 한글
                    const regExp4 = /\s/g;               // 공백 
                    const regExp5 = /(.)\1\1/g;          // 동일한 연속된 글자 3자 
                    
                    if( regExp1.test($(this).val())===false || regExp2.test($(this).val())===false || regExp3.test($(this).val())===true || regExp4.test($(this).val())===true || regExp5.test($(this).val())===true ){ // 
                        $(this).parent().next().addClass('on').text('영문/숫자/특수문자만 허용하며, 2개 이상 조합');

                    }
                    else {
                        $(this).parent().next().removeClass('on');
                        that.member.비밀번호 = $(this).val();
                    }

                }
            });


            // 3. 비밀번호 확인 입력상자
            $('#userPw2').on({
                keyup(){                    
                    
                    if( $('#userPw').val()!==$('#userPw2').val()  ){ // 비밀번호값과 비밀번호확인 값이 다르면
                        $(this).parent().next().addClass('on').text('동일한 비밀번호를 입력');

                    }
                    else {
                        $(this).parent().next().removeClass('on');
                        that.member.비밀번호확인 = true;
                    }

                }
            });


            // 4. 이름 입력상자
            // 1) 한글
            // 2) 영문
            // 3) 숫자
            // 4) 공백
            // 5) 특수문자 입력즉시 삭제
            $('#userName').on({
                keyup(){                    
                    const regExp1 = /[`~!@#$%^&*()_\-+=|\\\[\]{}'";:\/?\.>,<]/g;  // 영문
                    const regExp2 = /[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,20}/g;  // 영문
                  
                    $(this).val( $(this).val().replace(regExp1,'') ); // 특수문자 삭제
                    
                    if( regExp2.test($(this).val())===false ){ // 
                        $(this).parent().next().addClass('on').text('이름을 입력해 주세요.');
                    }
                    else {
                        $(this).parent().next().removeClass('on');
                        that.member.이름 = $(this).val();
                    }

                }
            });

            // 5. 이메일 입력상자
            // 1) @ 앞부분 : \. (Dot) 1회 사용 
            // 2) @ 앞부분 : @ ( ) \ [ ] " ; : < > ,  사용안됨.
            // 3) @ 뒷부분 : ~ - _ .   사용.
            // 6) @ 뒷부분 미국 맨뒤: 영문 3
            // 7) @ 뒷부분 미국제외 맨뒤: 영문 2
            // 8) 공백 사용안됨.
            // 9) 한글사용안됨
            // moonjong@naver.com
            // moonjong@naver.com
            // moon_jong@naver.co.kr
            // moon.jong@naver_news.co.kr
            // /시작문자   @     .영문{2,3}끝문자/g
            // /^         @     .영문{2,3}$/g
            $('#userEmail').on({
                keyup(){                    
                    const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]+[\.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'\/?]*@[A-Za-z0-9~\-_\.]+\.[A-Za-z]{2,3}$/g;  // 이메일
                    const regExp2 = /\s/g;  // 공백
                    
                    if($(this).val()!==''){ // 이메일이 공백이 아니면
                        if( regExp1.test($(this).val())===false ||  regExp2.test($(this).val())===true ){ // 
                            $(this).parent().next().addClass('on').text('이메일 형식으로 입력해 주세요.');
                        }
                        else {
                            $(this).parent().next().removeClass('on');
                            that.member.이메일 = $(this).val();
                        }
                    }
                    else { // 이메일이 공백이면
                        $(this).parent().next().addClass('on').text('이메일을 입력해 주세요.');
                    }
                }
            });


            // 6. 후대폰 번호 입력상자
            $('#userHp').on({
                keyup(){

                    if( $(this).val()!=='' ){
                        
                        $(this).parent().next().removeClass('on').text(''); 

                        if( $(this).val().length >=1 ){
                            // $('.hp-num-btn').addClass('on').attr('disabled', false); //사용가능 속성변경
                            $('.hp-num-btn').addClass('on').prop('disabled', false); //사용가능 속성변경
                            // $('.hp-num-btn').addClass('on').prop('disabled', true); //사용불가능 속성변경
                        }
                        else{
                            $('.hp-num-btn').removeClass('on');
                            that.member.휴대폰 = $(this).val();
                        }
                    }
                    else{    

                        $(this).parent().next().addClass('on').text('휴대폰 번호를 입력해 주세요.'); 

                    }

                },
                focus(){
                    if( $(this).val()!=='' ){
                        $(this).parent().next().removeClass('on').text(''); 
                    }
                    else {
                        $(this).parent().next().addClass('on').text('휴대폰 번호를 입력해 주세요.'); 
                    }
                } 
            })


            // 7. 타이머 카운트 다운 함수 알고리즘 구현
            // 3분 카운트 2분 59초
            function timerCountDown(){
                that.member.setId = setInterval(function(){
                    that.member.초--;
                    if(that.member.초<0){
                        that.member.초=59;
                        that.member.분--;
                        if(that.member.분<0){
                            clearInterval( that.member.setId );  // 타이머 중지
                            $('#formEventModal').fadeIn(300);
                            $('#formEventModal .msg').html(`유효 시간이 만료되었습니다. 다시 시도해 주세요.`);
                            $('.hp2').removeClass('on');
                            that.member.초=59;
                            that.member.분=2;
                        }
                    }

                    // 분, 초가 2자리로 표시되어야한다.
                    // 10 미만이면 1자리 그래서 문자열 0을 추가한다.
                    $('.count-minutes').text( that.member.분 < 10 ? `0${that.member.분}`: that.member.분 );
                    $('.count-seconds').text( that.member.초 < 10 ? `0${that.member.초}`: that.member.초 );

                },1000);
            }



            // 8. 후대폰 인증번호 받기 버튼 클릭 이벤트
            // 1) 휴대폰번호 유효성 검사 정규표현식 통과하면 아래 수행
            // 2) 인증번호를 입력할 입력상좌 우측버튼 보이게 한다.
            // 3) 인증번호 전송(6자리의 랜덤번호 전송) 

            $('.hp-num-btn').on({
                click(e){
                    e.preventDefault();
                    // 010 7942 5305
                    // 010 348 6441
                    // 0113486441
                    // 0123486441
                    // 0143486441
                    // 0153486441
                    // 0163486441
                    // 0173486441
                    // 0183486441
                    // 0193486441                    
                    const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;

                    // console.log(  regExp.test($('#userHp').val()) );

                    if( regExp.test($('#userHp').val())===false ){
                        $('#formEventModal').fadeIn(300);
                        $('#formEventModal .msg').html(`잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.`);
                    }    
                    else{
                        $('.hp2').addClass('on');
                        const randomNum = Math.floor(Math.random()*900000+100000);  // 인증번호 6자리
                        // console.log( Math.ceil(Math.random()*900000+100000) ); //자리 올림(천장)
                        // console.log( Math.round(Math.random()*900000+100000) ); //자리 반올림
                        // console.log( Math.floor(Math.random()*900000+100000) ); //자리 자리내림(바닥)
                        $('#formEventModal').fadeIn(300);
                        $('#formEventModal .msg').html(`인증번호가 발송되었습니다. ${randomNum}`);
                        that.member.휴대폰인증번호 = randomNum;
                        timerCountDown(); // 타이머 카운트 시작
                    }

                        
                }
            });


            // 9. 폼이벤트 모달 닫기 버튼 클릭 이벤트 
            $('.msg-modal-close-btn').on({
                click(e){
                    e.preventDefault();
                    $('#formEventModal').fadeOut(300);
                }
            });


            // 10. 인증번호 입력상자
            // 1) 1글자 이상입력되면 버튼 사용가능
            $('#useHpNumBox').on({
                keyup(){
                    if($(this).val().length>=1){
                        $('.hp-ok-btn').addClass('on').prop('disabled', false);
                    }
                    else {
                        $('.hp-ok-btn').removeClass('on').prop('disabled', true);                        
                    }
                }
            });

            // 11. 인증번호 확인 버튼 클릭 이벤트 
            // 1) 전송된 인증번호와 입력된 인증번호 비교
            $('.hp-ok-btn').on({
                click(e){
                    e.preventDefault();
                    // console.log( Number($('#useHpNumBox').val()) ); //숫자변환 형변환
                    // console.log( that.member.휴대폰인증번호 );
                    if( Number($('#useHpNumBox').val()) === that.member.휴대폰인증번호 ){
                        // 인증에 성공 하였습니다.
                        $('#formEventModal').fadeIn(300);
                        $('#formEventModal .msg').html(`인증에 성공 하였습니다.`);

                        $('.hp-num-btn').addClass('off'); //인증번호 받기 버튼 숨기기
                        $('.hp-num-btn2').addClass('on'); //다른번호 인증 버튼 보이기

                        $('.hp2').removeClass('on');
                        clearInterval(that.member.setId);
                        that.member.초=59;
                        that.member.분=2;


                    }
                    else {
                        // 잘못된 인증 코드 입니다.
                        $('#formEventModal').fadeIn(300);
                        $('#formEventModal .msg').html(`잘못된 인증 코드 입니다.`);
                    }
                }
            })


            // 12. 다른번호 인증
            $('.hp-num-btn2').on({
                click(e){
                    e.preventDefault();
                    $('.hp-num-btn').removeClass('off'); //인증번호 받기 버튼 숨기기
                    $('.hp-num-btn2').removeClass('on'); //다른번호 인증 버튼 보이기
                    $('#userHp').val('').focus();   // 휴대폰 번호 입력 상자
                }
            })


            // 13. 주소검색버튼 클릭 이벤트: 카카오 API
            $('.addr-search-btn').on({
                click(e){
                    e.preventDefault();
                    
                    // 윈도우 팝업창
                    window.open('./popup.html','_address_search_popup','width=530, height=569, top=0, left=0');

                }
            });


        }
    }





    SignUp.init();

})(jQuery,window,document);