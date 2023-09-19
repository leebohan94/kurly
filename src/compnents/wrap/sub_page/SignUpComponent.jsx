import React from "react";
import axios from "axios";


export default function SignUpComponent({회원가입, setCountPlay, setId, seconds, minutes}){

   // React.useEffect(()=>{
   //    console.log('상위컴포넌트 setId : ', setId );
   //    console.log('상위컴포넌트 seconds : ', seconds );
   //    console.log('상위컴포넌트 minutes : ', minutes );
   // },[setId])   

   // 회원가입폼 상태관리 (변수, 세터변수)
   const [state, setState] = React.useState(회원가입); //회원가입속성은 빼고 나머지 모든 속성이 변수에 들어간다.
   


   // [0] 컨펌 모달 닫기 버튼 클릭 이벤트
   const onClickModalClose=(e)=>{
      e.preventDefault();
      setState({
         ...state,
         isModal: false
      })
   }


   // [1] 아이디 입력상자
   const onChangeUserId=(e)=>{

         const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
         const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;                         // 한글
         const regExp3 = /[A-Za-z]+[0-9]*/g;                          // 영문 또는 영문숫자
         const regExp4 = /.{6,16}/g;                                  // 어떤 글자 .닷 6 ~ 16
         const regExp5 = /(.)\1\1/g;                                  // 동일한 연속된 글자 3자 ddd
         const regExp6 = /\s/g;                                       // 공백 

         let {value} = e.target;    // 키보드 입력상자 입력값 비구조화
         let 아이디 = '';
         let isId = false;
         let isIdMsg = '';
            
         아이디 = value.replace(regExp1,'');

         if( regExp2.test(value)===true  || regExp3.test(value)===false || regExp4.test(value)===false  || regExp5.test(value)===true || regExp6.test(value)===true ){ // 한글 || 영숫자 || 6~16 || 연속동일문자3자
            isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 동일한 문자 연속3자 이상 허용 안함,  한글 허용 안함, 공백 허용 안함.';
            isId = false;
         }
         else {
            isIdMsg = '';
            isId = true;
         }

         setState({
            ...state,
            아이디: 아이디,
            isId: isId,
            isIdMsg: isIdMsg
         })

   }

   // [1] 아이디 중복확인 => 백앤드 DB 서버에서 데이터 가져오기 SELECT 구현
   const onClickIdOkBtn=(e)=>{
      e.preventDefault();
      const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
      const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;                         // 한글
      const regExp3 = /[A-Za-z]+[0-9]*/g;                          // 영문 또는 영문숫자
      const regExp4 = /.{6,16}/g;                                  // 어떤 글자 .닷 6 ~ 16
      const regExp5 = /(.)\1\1/g;                                  // 동일한 연속된 글자 3자 ddd
      const regExp6 = /\s/g;    

      let value = state.아이디;    // 상태관리 아이디 를 value 변수에 저장
      let isId = false;
      let isIdMsg = '';
      let 아이디중복확인 = false;

      let isModal = false;
      let modalMsg = '';
      
      if( regExp1.test(value)===true || regExp2.test(value)===true || regExp3.test(value)===false || regExp4.test(value)===false  || regExp5.test(value)===true || regExp6.test(value)===true ){ // 한글 || 영숫자 || 6~16 || 연속동일문자3자
         isIdMsg = '6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 동일한 문자 연속3자 이상 허용 안함,  한글 허용 안함, 공백 허용 안함.';
         isId = false;
         아이디중복확인 =false;
         isModal =true;
         modalMsg = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합, 동일한 문자 연속3자 이상 허용 안함,  한글 허용 안함, 공백 허용 안함.";
      }
      else {
         isIdMsg = '';
         isId = true;


         // 서버와 접속하기위해서 비동기전송방식인  AXIOS API 를 사용한다.
         // AXIOS API 패키지 설치하기
         // npm  i axios
         // 상단에 import axios from axios
         // axios().then().catch();
         // axios().then(성공succes).catch(실패error);
         // ajax({}).success(function(){}).error(function(){});
         // axios({}).then(function(){}).catch(function(){});
         // https://moonjong.co.kr/week6/select.php
         // HTTP 통신 실패 오류 분석
         //////////////////////////
         // Access to XMLHttpRequest at 
         // 닷홈 웹호스팅 서버 조회 SQL문 주소 
         // => 'https://moonjong.co.kr/week6/select.php' 
        
         // 현재 리액트 조회하는 서버주소 from origin 
         // =>  "https://localhost:3000' 

         // CORS(Cross Origin Resourse Sharing) 웹브라우저에서 차단 에러 접속에러 
         // => 서버주소가 서로 다르기 때문에 웹 호스팅 서버에 스크립언어 PHP 헤더에 권한 설정하고 다시 접속허용
         // has been blocked by CORS policy: No 
         // => 'Access-Control-Allow-Origin' 
         // header is present on the requested resource.
         
         
         axios({
            url:'https://moonjong.co.kr/week6/select.php',
            motod:'GET'
         })
         .then((res)=>{
            console.log(`axios 성공`);
               try{
                  // 반복문
                 
                  // const result = res.data.map((item, idx)=>{
                  //    if(item.아이디===state.아이디){
                  //       return '중복된아이디';
                  //    }
                  // });
                  // result.includes('중복된아이디'); 중복확인

                  // 한줄코딩은 화살표만 처리
                  // 배열에 true와 false가 저장된다
                  const result = res.data.map((item, idx)=>item.아이디===state.아이디);
                  
                  console.log( result );

                  if( result.includes(true) ){  // true 중복 
                     setState({
                        ...state,
                        아이디중복확인:false,
                        isModal: true,
                        modalMsg: "사용 불가능한 아이디 입니다."
                     })                    
                  }
                  else{
                     setState({
                        ...state,
                        아이디중복확인:true,
                        isModal: true,
                        modalMsg: "사용 가능한 아이디 입니다."
                     })
                  }
                  
               }
               catch(err){
                  console.log(`데이터 가져오기 실패 ${err}`);
               }
         })
         .catch((err)=>{
            console.log(`axios 실패 ${err}`);
         });  //권장 화살표함수


      }

      setState({
         ...state,
         isId: isId,
         isIdMsg: isIdMsg,
         아이디중복확인: 아이디중복확인,
         isModal: isModal,
         modalMsg: modalMsg
      })


   }



   // [2-1] 비밀번호 입력상자 이벤트
   const onChangeUserPw=(e)=>{

      const regExp1 = /.{10,}/g;           // 10자이상~ 
      const regExp2 = /([0-9]+[`~!@#$%^&*()_\-+=|\\[\]{}'";:/?.>,<]+)+|([A-Za-z]+[0-9]+)+|([A-Za-z]+[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]+)+/g;  // 영문 또는 영문숫자
      const regExp3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g; // 한글
      const regExp4 = /\s/g;               // 공백 
      const regExp5 = /(.)\1\1/g;          // 동일한 연속된 글자 3자 

      let {value} = e.target
      let isPw = false;
      let isPwMsg = '';

      // 1. 10글자 이상
      if( regExp1.test(value)===false ){
         isPwMsg = '10글자 이상입력';
         isPw = false;
      }
      // 영문+숫자, 영문+특수문자, 특수문자와 숫자 2가지이상 포함(공백제외)
      else if(regExp2.test(value)===false || regExp4.test(value)===true ||  regExp3.test(value)===true ){
         isPwMsg = '영문/숫자/특수문자만 허용하며, 2개 이상 조합, 공백제외, 한글제외';
         isPw = false;
      }
      else if(regExp5.test(value)===true){
         isPwMsg = '동일한 글자 3개 이상 연속 사용 불가';
         isPw = false;
      }
      else {
         isPwMsg = '';
         isPw = true;
      }

      setState({
         ...state,
         비밀번호: value,
         isPw: isPw,
         isPwMsg: isPwMsg
      })

   }


   // [2-1] 비밀번호 확인 입력상자
   const onChangeUserPw2=(e)=>{
      const {value} = e.target
      let isPw2 = false;
      let isPw2Msg = '';

      if( state.비밀번호 !== value ){
         isPw2 = false;
         isPw2Msg = '동일한 비밀번호를 입력';
      }
      else{
         isPw2 = true;
         isPw2Msg = '';
      }

      setState({
         ...state,
         isPw2: isPw2,
         isPw2Msg: isPw2Msg,
         비밀번호확인: value
      })

   }

   // [3] 이름 입력상자 
   const onChangeUserName=(e)=>{
      const {value} = e.target;
      let isName= false;
      let isNameMsg= '';
      let 이름 = '';

      const regExp1 = /[`~!@#$%^&*()_\-+=|\\[]{}'";:\/?.>,<]/g; //특수문자
      const regExp2 = /[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s]{1,20}/g;  // 영문
    
      이름 = value.replace(regExp1,''); // 특수문자 삭제
      
      if( regExp2.test(value)===false ){ // 
         isName= false;
         isNameMsg = '이름을 입력해 주세요.';
      }
      else {
         isName= true;
         isNameMsg = '';
      }

      setState({
         ...state,
         isName: isName,
         isNameMsg: isNameMsg,
         이름: 이름
      })
   }


   // [4] 이메일 입력상자 
   const onChangeUserEmail=(e)=>{
      const {value} = e.target;
      let isEmail = false;
      let isEmailMsg = '';

      const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]+[.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]*@[A-Za-z0-9~\-_.]+\.[A-Za-z]{2,3}$/g;  // 이메일
      const regExp2 = /\s/g;  // 공백
      
      if(value!==''){ // 이메일이 공백이 아니면
          if( regExp1.test(value)===false ||  regExp2.test(value)===true ){ // 
            isEmailMsg = '이메일 형식으로 입력해 주세요.';
            isEmail = false;
          }
          else {
            isEmailMsg = '';
            isEmail = true;
          }
      }
      else { // 이메일이 공백이면
         isEmailMsg = '이메일 형식으로 입력해 주세요.';
      }

      setState({
         ...state,
         isEmail: isEmail,
         isEmailMsg: isEmailMsg,
         이메일: value
      })
   }

   // [4-2] 이메일 중복확인 버튼 클릭 이벤트
   const onClickEmailOk=(e)=>{
      e.preventDefault();
      let isModal = '';
      let modalMsg = '';
      let 이메일중복확인 = false;

      const regExp1 = /^[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]+[.]?[A-Za-z0-9`~!#$%^&*_\-+=|{}'/?]*@[A-Za-z0-9~\-_.]+\.[A-Za-z]{2,3}$/g;  // 이메일
      const regExp2 = /\s/g;  // 공백
      
      if(state.이메일!==''){ // 이메일이 공백이 아니면
          if( regExp1.test(state.이메일)===false ||  regExp2.test(state.이메일)===true ){ // 
            isModal = true;
            modalMsg = '이메일 형식으로 입력해 주세요.';
          }
          else {

               // 이메일 중복검사
               axios({
                  url:'https://moonjong.co.kr/week6/select.php',
                  method:'GET'
               })
               .then((res)=>{ 

                  if(res.status===200){  // OK 메시지
                     const result = res.data.map((item)=>item.이메일===state.이메일);
                     if( result.includes(true) ){
                        isModal = true;
                        modalMsg = '사용 불가능한 이메일입니다.';
                        이메일중복확인 = false;
                     }
                     else {
                        isModal = true;
                        modalMsg = '사용 가능한 이메일입니다.';
                        이메일중복확인 = true;
                     }
                     setState({
                        ...state,
                        isModal: isModal,
                        modalMsg: modalMsg,
                        이메일중복확인: 이메일중복확인
                     })
                  }
                  else {
                     console.log( '가져올 데이터가 없습니다.');
                  }
               
               })
               .catch((err)=>{
                  console.log('axios 실패');
               });

         }
      }
      else { // 이메일이 공백이면
         isModal = true;
         modalMsg = '이메일 형식으로 입력해 주세요.';
      }

      setState({
         ...state,
         isModal: isModal,
         modalMsg: modalMsg
      })
    
      
   }



   
   // [5-1] 휴대폰 입력상자
   // 1. onChange 이벤트
   // 2. onChangeHp 함수 등록
   // 3. 상태관리 변수 등록
   // 4. 상택관리 변수와 입력상자 연결 value

   // 5. 입력제한조건 숫자만입력 나머진 모두 삭제 정규표현식
   // 6. 오류가 발생하면 상태관리 추가 오류발생 변수들을 추가 isHp isHpMsg
   const onChangeUserHp=(e)=>{
      const {value} = e.target;
      let 휴대폰 = '';
      let isHpDisabled = true;
      const regExp = /[^0-9]/g;  //[\D] [^\d]  [^0-9]
      let isHp = false;
      let isHpMsg = '';

      // 숫자가 아니면 삭제
      휴대폰 = value.replace(regExp, '');

      if(value.length >= 1){
         isHpDisabled=false;
         isHp=false;
         isHpMsg=''
      }
      else {
         isHpDisabled=true;
         isHp=true;
         isHpMsg='휴대폰 번호를 입력해 주세요.'
      }

      setState({
         ...state,
         휴대폰: 휴대폰,
         isHpDisabled: isHpDisabled,
         isHp: isHp,
         isHpMsg: isHpMsg
      })

   }

   // [5-2]  휴대폰번호 인증번호 발송하기
   //        휴대폰번호 정규표현식 => 맞다 => 인증번호를 발송한다.
   // 1. JSX에서 휴대폰 버튼 클릭 이벤트 등록
   // 2. 함수 등록한다.
   // 3. 버튼의 이벤트 제거 e.preventDefault()
   // 4. 변수 등록 : 휴대폰인증번호, 
   // 5. 정규표현식 등록 전화번호 010-7942-5305
   // 6. 인증번호 랜덤하게 전송한다.
   // 7. 카운트다운 시작=> 카운트다운 함수 만들기
   const onClickHpNumberBtn=(e)=>{
      e.preventDefault();
      const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
      let 휴대폰인증번호 = null;   
      let isHp2 = false;  
      let isModal = false;
      let modalMsg = '';

      if( regExp.test(state.휴대폰)===false ){                   
          isHp2 = false;
          isModal = true;
          modalMsg = `잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.`;
      }    
      else{
         isHp2 = true;
         const randomNum = Math.floor(Math.random()*900000+100000);  // 인증번호 6자리
         isModal = true;
         modalMsg = `인증번호가 발송되었습니다. ${randomNum}`;
         휴대폰인증번호 = randomNum; 
         setCountPlay(); // 부모컴포넌트 WrapComponent 에 함수 호출 실행   
      }                        

      setState({
         ...state,
         isHp2: isHp2,
         휴대폰인증번호: 휴대폰인증번호,
         isModal: isModal,
         modalMsg: modalMsg
      })
   }


   // [5-3] 인증번호 비교 입력상자
   const onChangeHp2=(e)=>{
      const {value} = e.target;
      let isDisabled2 = true;

      if( value.length >= 1){
         isDisabled2 = false
      }
      else {
         isDisabled2 = true
      }

      setState({
         ...state,
         인증번호입력값: value,
         isDisabled2: isDisabled2
      })
   }                                    
  
   

   // [5-4] 인증번호 확인 버튼 클릭 이벤트
   const onClickHp2=(e)=>{
      e.preventDefault();
      let isModal = false;
      let modalMsg = '';
      let isHpNumBtn2 = false;

      
      if( state.휴대폰인증번호 === Number(state.인증번호입력값) ){
         isModal = true;
         modalMsg =`인증에 성공 하였습니다.`;
         isHpNumBtn2 = true;
         clearInterval(setId);
     }
     else {
         isModal = true;
         modalMsg =`잘못된 인증 코드 입니다.`;
         isHpNumBtn2 = false;
     }

      setState({
         ...state,
         isHp: false,
         isHp2: false,
         isModal: isModal,
         modalMsg: modalMsg,
         isHpNumBtn2: isHpNumBtn2
      });

   }
   
   

   // [5-5] 다른번호 인증
   const onClickhpNumBtn2=(e)=>{
      e.preventDefault();

      setState({
         ...state,
         isHpNumBtn2: false,  // 다른번호 인증 버튼감추기
         휴대폰: '',
         인증번호입력값: ''
      })
   }





      
   // [6-0] 주소입력상자 온포커스 이벤트
   const onChangeAddr1=(e)=>{
      setState({
         ...state,
         주소1: e.target.value
      });
   }

   // [6-0] 주소입력상자 온포커스 이벤트
   const onChangeAddr2=(e)=>{
      setState({
         ...state,
         주소2: e.target.value
      });
   }

   // 주소 팝업창 API 띄우기
   const addressPopupAPI=()=>{
      const _file    = './popup.html';
      const _winName = '_address_search_popup';
      const _winHeight = window.innerHeight;
      const _winWidth = window.innerWidth;
      const _popWidth   = 530;
      const _popHeight  = 569;
      const _top     = (_winHeight-_popHeight)/2; // 화면의 가운데 수직좌표
      const _left    = (_winWidth-_popWidth)/2;   // 화면의 가운데 수평좌표
      window.open( _file, _winName ,`width=${_popWidth}, height=${_popHeight}, top=${_top}, left=${_left}`);
   }
   // [6-1] 주소감섹 버튼 클릭 이벤트 
   const onClickAddrSearch=(e)=>{
      e.preventDefault();
      addressPopupAPI();  // 팝업창 띄우기 함수
   }

   // [6-2] 주소 재검색 버튼 클릭 이벤트
   const onClickReSearchArress=(e)=>{
      e.preventDefault();
      addressPopupAPI();  // 팝업창 띄우기 함수
   }
   

   /// [6-3] 주소검색 및 주소 게터 함수 /////////////////////////////////////////////////////////////////////////////
   // 1. 저장소(세션스토레이지)에서 검색된 주소 가져오기(Getter) 게터
   // 2. 가져온 주소는 문자열 형태이다. JSON.stringify() 로 변환된 문자열
   //    그래서 다시 객체형태로 변환하여 사용한다. JSON.parse();
   // 3. 가져온 주소를 주소 입력 상자에 각각 바인딩 시켜서 주소를 유지시킨다.(Setter) 세터
   // 4. 그러면 새로고침해도 지워지지 않는다.
   // 5. 가져온 주소는 반드시 리액트 상태관리(스테이트먼트 statement)에 보관 관리한다.(Setter) 세터
   // 6. 입력상자와 상태관리 속성과 연결한다.
   const getAddressSessionStrorage=()=>{

      // 예외처리 가져올 주소가 없으면 리턴 
      if(sessionStorage.getItem('MOONJONGADDRESS')===null){
         setState({
            ...state,
            isAddr: false  // 주소검색버튼 가장긴 버튼만 보인다.
         });
         return;
      }

      try{ // 예외처리 가져올 주소가 없으면 오류발생 : 이유는 JSON.parse(null);
         const result = JSON.parse(sessionStorage.getItem('MOONJONGADDRESS'));

         // 주소1, 주소2 입력 상자 보이기
         // 재검색 버튼 보이기
         // 주소검색버튼 숨기기

         setState({
            ...state, // ...전개연산자 아래 수정할 속성만 수정하고 나머진 속성을 그대로 유지
            주소1: result.주소1, 
            주소2: result.주소2,
            isAddr: true        // 주소검색버튼 가장긴 버튼만 숨긴다. 모든 주소창 보인다. 재검색까지
         });
      }
      catch(e){
         return;
      }
      
   }
   
   // 리액트에는 함수 호출 실행을 훅(Hook)에서 호출 실행한다.
   React.useEffect(()=>{
      getAddressSessionStrorage();
   },[state.주소1]);




   
   // 7. 성별 : 라디오 버튼
   const onChangeGender=(e)=>{
      setState({
         ...state,
         성별: e.target.value
      })
   }


   // 8. 생년월일 : 입력상자(년,월,일)
   // 8-1. 생년 입력상자 onChange() 이벤트
   // 숫자만 입력하도록 정규표현식 입력제한 숫자 아니면 자동 삭제
   const onChangeBirthYear=(e)=>{ 
      const regExp = /[^0-9]/g;
      let imsi = '';
      imsi = e.target.value.replace(regExp, ''); // 필터링
      setState({
         ...state,
         생년: imsi
      })
   }
   // 8-2. 생월 입력상자 onChange() 이벤트
   const onChangeBirthMonth=(e)=>{   
      const regExp = /[^0-9]/g;
      let imsi = '';
      imsi = e.target.value.replace(regExp, ''); // 필터링

      setState({
         ...state,
         생월: imsi
      })
   }
   // 8-3. 생일 입력상자 onChange() 이벤트
   const onChangeBirthDate=(e)=>{      
      const regExp = /[^0-9]/g;
      let imsi = '';
      imsi = e.target.value.replace(regExp, '');  // 필터링

      setState({
         ...state,
         생일: imsi
      })
   }


   // 8-4. 생년, 생월, 생일 입력제한 함수: 생년, 생월, 생일 입력값이 발생하면 즉각 동작(함수호출 실행)

   //      생년,생월,생일 모두 빈칸이면 공백 아니면 아래조건
   //      생년 - 1. 100년 이하만 입력(1923~2023)
   //      생년 - 2. 14미만 입력불가
   //      생년 - 3. 미래년도 입력불가
   //      생월 - 1 ~ 12 
   //      생일 - 1 ~ 31 
   const birthCheckFn=()=>{
      
      if( state.생년==='' && state.생월==='' &&  state.생일==='' ){
         return;
      }
      else {
         if(state.생년===''){
            setState({
               ...state,
               isBirth: true,
               isBirthMsg: '태어난 년도 4자리를 정확하게 입력해주세요.'
            })
         }
         // 1920 < 1923  즉 1923생이상 입력 가능
         else if( Number(state.생년) < (new Date().getFullYear()-100) ){  // 100년 이내 사용
            setState({
               ...state,
               isBirth: true,
               isBirthMsg: '생년월일을 다시 확인해주세요.(100세 이하가능)'
            })
         }
         // 14세 미만 입력 불가 2023-14=2009년  2009 ~ 2023  년도가 클수록 나이는 어리다.
         else if( Number(state.생년) >= (new Date().getFullYear()-14) ){  // 100년 이내 사용
            setState({
               ...state,
               isBirth: true,
               isBirthMsg: '만 14세 미만은 가입이 불가합니다.'
            })
         }
         else { // 생년 끝

            if(state.생월===''){
               setState({
                  ...state,
                  isBirth: true,
                  isBirthMsg: '태어난 월을 정확하게 입력해주세요.'
               })
            }
            else if(Number(state.생월) < 1 || Number(state.생월) > 12 ){
               setState({
                  ...state,
                  isBirth: true,
                  isBirthMsg: '태어난 월을 정확하게 입력해주세요.'
               })
            }
            else {  // 생월 끝
             
               if(state.생일===''){
                  setState({
                     ...state,
                     isBirth: true,
                     isBirthMsg: '태어난 일을 정확하게 입력해주세요.'
                  })
               }
               else if(Number(state.생일) < 1 || Number(state.생일) > 31 ){
                  setState({
                     ...state,
                     isBirth: true,
                     isBirthMsg: '태어난 일을 정확하게 입력해주세요.'
                  })
               }
               else {  // 생일 끝
                  setState({
                     ...state,
                     isBirth: false,
                     isBirthMsg: ''
                  })
               }
            }
         }
      }
   }

   React.useEffect(()=>{
      birthCheckFn();
   },[state.생년, state.생월, state.생일]);


   // 9-1. 추가입력사항 : 라디오 버튼
   const onChangeAddInput=(e)=>{
      let isAddOn=false;
      // 선택된 아이디가 addInput1 이면 첫번째 친구초대 추천인 아이디
      // 선택된 아이디가 addInput2 이면 두번째 참여 이벤트명
      if(e.target.id==='addInput1'){
         isAddOn=false;
      }
      else {
         isAddOn=true;
      }

      setState({
         ...state,
         추가입력사항: e.target.value,
         isAdd: true,        
         isAddOn: isAddOn       
      });
    
   }

   // 9-2. 추천인 아이디 onChange() 이벤트
   const onChangeChooCheonId=(e)=>{
      setState({
         ...state, 
         추천인아이디: e.target.value
      })
   }

   // 9-3. 참여 이벤트명 onChange() 이벤트
   const onChangeChamEvent=(e)=>{
      setState({
         ...state, 
         참여이벤트명: e.target.value
      })
   }

   // 9-4  추천인 아이디 확인
   const onClickChoochuninId=(e)=>{
      e.preventDefault();
      let isModal = false;
      let modalMsg = '';
      
         axios({
            url:'https://moonjong.co.kr/week6/select.php',
            method:'POST'
         })
         .then((res)=>{
            if(res.status===200){
                const result = res.data.map((item)=>item.아이디===state.추천인아이디);

                if( state.추천인아이디==='' ){
                  isModal = true;
                  modalMsg = '아이디를 입력해 주세요';
                }
                else if(result.includes(true)){
                  isModal = true;
                  modalMsg = '존재하는 아이디 입니다. 친구초대 이벤트에 참여 가능해요.';
                }
                else {
                  isModal = true;
                  modalMsg = '존재하지 않는 아이디 입니다.';
                }
                // 상태관리
                setState({
                     ...state,
                     isModal: isModal,
                     modalMsg: modalMsg
                });
            }
         })
         .catch((err)=>{
             console.log('axios 실패!' ,err);  
         });

   }




   // 10-1. 이용약관동의 : 체크박스 =>  모두체크 이벤트
   const onChangeServiceCheckAll=(e)=>{
            
      // 전체 체크하면 
      // 이용약관동의 배열 상태관리변수에 저장

      // 체크박스 7개 모두 체크 한다.
      // 전체 체크해제하면 
      // 체크박스 7개 모두 체크 해제 한다.
      // 7개 이용약관동의 목록이 저장된다.
      // 배열 추가
      if( e.target.checked ){
         setState({
            ...state, 
            이용약관동의: state.이용약관 // 7개 항목 저장
         })
      }  
      else {  
         setState({
            ...state, 
            이용약관동의: []   //빈배열 삭제
         })
      } 
     
   }

   // 10-2. 이용약관동의 : 체크박스  => 개별 체크 이벤트
   const onChangeServiceCheck=(e)=>{
      // 체크하면 체크된 항목 값 배열에 저장
      // 체크해제하면 배열에서 삭제
      if(e.target.checked===true){

         // 1. 무료배송 선택되면 : SNS, 이메일 두개를 모두 저장해서 두개가 체크된다.
         if( e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' ){
            setState({
               ...state,
               이용약관동의: [...state.이용약관동의, e.target.value, 'SNS', '이메일']
            })
         }
         else if(state.이용약관동의.includes('SNS')===true && e.target.value==='이메일'){ // 'SNS' 체크된 상태 그리고 이메일을 선택하년 무료배송... 저장한다. 
            setState({
               ...state,
               이용약관동의: [...state.이용약관동의, e.target.value, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)']
            })
         }
         else if(state.이용약관동의.includes('이메일')===true && e.target.value==='SNS'){ // 'SNS' 체크된 상태 그리고 이메일을 선택하년 무료배송... 저장한다. 
            setState({
               ...state,
               이용약관동의: [...state.이용약관동의, e.target.value, '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)']
            })
         }
         else {
            setState({
               ...state,
               이용약관동의: [...state.이용약관동의,  e.target.value]
            })
         }

      }
      else{
         
         // 1. 무료배송 해제하면 : SNS, 이메일 두개를 모두 삭제한다.
         if( e.target.value==='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)' ){
            let imsi = state.이용약관동의.filter((item)=>item!=='SNS');
                imsi = imsi.filter((item)=>item!=='이메일');
                imsi = imsi.filter((item)=>item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                setState({
                  ...state,
                  이용약관동의: imsi
                })
         }
         else if(e.target.value==='SNS' &&  state.이용약관동의.includes('이메일')===true ){
            let imsi = state.이용약관동의.filter((item)=>item!=='SNS');
                imsi = imsi.filter((item)=>item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                setState({
                  ...state,
                  이용약관동의: imsi
                })
         }
         else if(e.target.value==='이메일' &&  state.이용약관동의.includes('SNS')===true ){
            let imsi = state.이용약관동의.filter((item)=>item!=='이메일');
                imsi = imsi.filter((item)=>item!=='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)');
                setState({
                  ...state,
                  이용약관동의: imsi
                })
         }
         else {
            setState({
               ...state,
                           // 체크해제하면 해제항목을 제외한 모든 배열값을 저장한다.
               이용약관동의: state.이용약관동의.filter((item)=>item!==e.target.value)
            })
         }
      }
   }


   // 11-1. 가입하기 버튼 클릭 이벤트 => 유효성검사
   // 1) 아이디 입력확인
   // 2) 아이디 중복확인 검증 isIdOk = true
   // 3) 비밀번호 입력확인
   // 4) 비밀번호1, 비밀번호2 같다면  isPwOk = true
   // 5) 이름 입력확인
   // 6) 이메일 입력확인
   // 7) 이메일 중복확인 검증 isEmailOk = true
   // 8) 휴대폰 입력확인
   // 9) 휴대폰 인증번호 검증 isHpOk = true
   //10) 주소1, 주소2 검증
   
   //11) 성별 - 선택사항
   //12) 생년월일 - 선택사항
   //13) 추가입력사항 - 선택사항
   
   //14) 이용약관동의 필수사항 3개 체크 확인 

   ///////////////////////////////////////////////////////////////////

   // 11-2. 폼데이터 서버에 전송하기 => inset.php  =>  SQL => 데이터베이스에 저장
   // 1) 가입하기 버튼 클릭 이벤트 => 폼전송(onSubmit={onSubmitGaib})
   // 2) 폼데이터 객체 생성 new FormData()
   // 3) 폼데이터객체에 폼요소 추가하기(append)
   // 4) axios() 전송(회원가입 요청 => Requst)
   // 5) 응답(Response) 가입축하합니다.
   const onSubmitGaib=(e)=>{
      e.preventDefault();
      let isModal = false;
      let modalMsg = '';


      // 이용약관동의 필수 항목 3개
      // 맵함수 이용 배열에 들어있는 데이터 검색 있다면 true
      // includs(true) 3개이면 통과
      let sum=0;
      const result = state.이용약관동의.map((item)=>item.includes('필수') ? 1 : 0 );
            
      // 카운트 합계   
      result.map((item)=>{
         sum+=item;
      });
    
      
         
      if(state.아이디===''){ // 1) 아이디 입력확인
         isModal = true;
         modalMsg = '아이디를 입력 해주세요';
      }
      else if(state.아이디중복확인===false){ // 2) 아이디 중복확인 검증 isIdOk = true
         isModal = true;
         modalMsg = '아이디를 중복확인을 해주세요';
      }
      else if(state.비밀번호===''){ // 3) 비밀번호 입력확인
         isModal = true;
         modalMsg = '비밀번호를 입력 해주세요';
      }      
      else if(state.비밀번호확인===''){ // 4) 비밀번호확인 입력확인
         isModal = true;
         modalMsg = '한번더 비밀번호를 입력 해주세요';
      }
      else if(state.이름===''){ // 5) 이름 입력확인
         isModal = true;
         modalMsg = '이름을 입력 해주세요';
      }
      else if(state.이메일===''){ // 6) 이메일 입력확인
         isModal = true;
         modalMsg = '이메일을 입력 해주세요';
      }
      else if(state.이메일중복확인===false){ // 7) 이메일 중복확인
         isModal = true;
         modalMsg = '이메일 중복확인 해주세요';
      }      
      else if(state.휴대폰===''){  // 8) 휴대폰 입력확인
         isModal = true;
         modalMsg = '휴대폰을 입력 해주세요';
      }
      else if(state.휴대폰인증번호===false){  // 9) 휴대폰인증번호 검증 isHpOk = true
         isModal = true;
         modalMsg = '휴대폰 인증을 진행 해주세요';
      }
      else if(state.주소1===''){  // 10) 주소를 검색해 주세요
         isModal = true;
         modalMsg = '주소를 검색 해주세요';
      }
      else if(state.주소2===''){  // 11) 나머지 주소를 입력해 주세요
         isModal = true;
         modalMsg = '나머지 주소를 입력 해주세요';
      }      
      else if(sum<3){  //14) 이용약관동의 필수사항 3개 체크 확인 
         isModal = true;
         modalMsg = '이용약관동의 필수(3개) 항목을 체크해 주세요.';         
      }
      else {

            // 유효성 검증 통과 된 경우 전송한다.
            // AXIOS 비동기식 전송
            const regExpHp = /^([0-9]{3})([0-9]{3,4})([0-9]{4})$/g;

            let newFormData = new FormData();      
            newFormData.append("user_id",          state.아이디 );
            newFormData.append("user_pw",          state.비밀번호 );
            newFormData.append("user_name",        state.이름 );
            newFormData.append("user_email",       state.이메일 );
            newFormData.append("user_hp",          state.휴대폰.replace(regExpHp, '$1-$2-$3') ); // 010-7942-5305
            newFormData.append("user_address",     `${state.주소1} ${state.주소2}`);
            newFormData.append("user_gender",      state.성별 );
            newFormData.append("user_birth",       `${state.생년}-${state.생월}-${state.생일}`);
            newFormData.append("user_add_input",   `${state.추가입력사항}: ${state.추천인아이디}${state.참여이벤트명}`);
            newFormData.append("user_service",     state.이용약관동의);
            newFormData.append("user_gaib_date",   `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);

            // AXIOS 전송
            axios({
               url:'https://moonjong.co.kr/week6/member_insert.php',
               method:'POST',
               data: newFormData
            })
            .then((res)=>{
               if(res.status===200){               
                  setState({
                     ...state,
                     isModal: true,
                     modalMsg:'마켓컬리 회원가입을 축하드립니다.', 
                  })
               }
            })
            .catch((err)=>{
               console.log('AXIOS 전송 실패!');
            });
      }

      // 유효성 검증 메시지 컨펌 모달창
      setState({
         ...state,
         isModal: isModal,
         modalMsg: modalMsg
      })
      
   }


   // 16. 깃허브 배포(CORS)



   // 17. 로그인 => 회원가입 된정보를  => 회원정보수정


   // 18. 로그아웃


   // 19. - 회원관리 목록 출력 게시판 


   // 20  - 공지사항 게시판 


   

    return(
      <>
         <main id="mainSignup">
            <section id="signUpsection">
               <div className="container">
                  <div className="title">
                     <h2>회원가입</h2>
                     <span><i>*</i>필수입력사항</span>
                  </div>
                  <div className="content">
                     {/* <form name='signup_form' id='signupForm' method='post' action="./sign_up.php"> */}
                     <form>
                        <ul>
                           <li>
                              <div>
                                 <em>아이디<i>*</i></em>
                                 <input 
                                    type="text" 
                                    name='user_id' 
                                    id='userId' 
                                    maxLength={16} 
                                    placeholder='아이디를 입력해주세요'
                                    onChange={onChangeUserId}
                                    value={state.아이디}
                                 />
                                 <button 
                                    className='id-ok-btn'
                                    onClick={onClickIdOkBtn}
                                 >중복확인</button>
                              </div>
                              <p className={`isError${state.isId===false?' on':''}`}>{state.isIdMsg}</p>
                           </li>
                           <li>
                              <div>
                                 <em>비밀번호<i>*</i></em>
                                 <input 
                                    type="password" 
                                    name='user_pw' 
                                    id='userPw' 
                                    maxLength={16} 
                                    placeholder='비밀번호를 입력해주세요'
                                    onChange={onChangeUserPw}
                                    value={state.비밀번호}
                                 />
                                 
                              </div>
                              <p className={`isError${state.isPw===false ? ' on':'' }`}>{state.isPwMsg}</p>
                           </li>
                           <li>
                              <div>
                                 <em>비밀번호확인<i>*</i></em>
                                 <input 
                                    type="password" 
                                    name='user_pw2' 
                                    id='userPw2' 
                                    maxLength={16} 
                                    placeholder='비밀번호를 한번 더 입력해주세요'
                                    onChange={onChangeUserPw2}
                                    value={state.비밀번호확인}
                                 />
                                 
                              </div>
                              <p className={`isError${state.isPw2===false?' on':''}`}>{state.isPw2Msg}</p>
                           </li>
                           <li>
                              <div>
                                 <em>이름<i>*</i></em>
                                 <input 
                                    type="text" 
                                    name='user_name' 
                                    id='userName' 
                                    maxLength={20} 
                                    placeholder='이름을 입력해주세요'
                                    onChange={onChangeUserName}
                                    value={state.이름}
                                 />

                              </div>
                              <p className={`isError${state.isName===false?' on':''}`}>{state.isNameMsg}</p>
                           </li>
                           <li>
                              <div>
                                 <em>이메일<i>*</i></em>
                                 <input 
                                    type="text" 
                                    name='user_email' 
                                    id='userEmail' 
                                    placeholder='이메일을 입력해주세요'
                                    onChange={onChangeUserEmail}
                                    value={state.이메일}
                                 />
                                 <button onClick={onClickEmailOk} className='email-ok-btn'>중복확인</button>
                              </div>
                              <p className={`isError${state.isEmail===false?' on':''}`}>{state.isEmailMsg}</p>
                           </li>
                           <li className='hp hp1'>
                              <div>
                                 <em>휴대폰<i>*</i></em>
                                 <input 
                                    type="text" 
                                    name='user_hp' 
                                    id='userHp' 
                                    placeholder='숫자를 입력해주세요'
                                    onChange={onChangeUserHp}
                                    value={state.휴대폰}
                                 />
                                 {/* disabled=false로 제이쿼리 구현 */}
                                 <button 
                                    className={`hp-num-btn${state.isHpDisabled===false?' on':''}`} 
                                    disabled={state.isHpDisabled}
                                    onClick={onClickHpNumberBtn}
                                 >인증번호 받기</button>
                                 <button onClick={onClickhpNumBtn2} className={`hp-num-btn2${state.isHpNumBtn2===true?' on':''}`}>다른번호 인증</button>
                              </div>
                              <p className={`isError${state.isHp===true?' on':''}`}>{state.isHpMsg}</p>
                           </li>
                           <li className={`hp hp2${state.isHp2===true?' on':''}`}>
                              <div>                        
                                 <input 
                                    type="text" 
                                    name='useHp_num_box' 
                                    id='useHpNumBox' 
                                    placeholder='인증번호를 입력해주세요'
                                    onChange={onChangeHp2}
                                    value={state.인증번호입력값}                                 
                                 />
                                 <span className='hp-count'><i className='count-minutes'>{minutes}</i>:<i className='count-seconds'>{seconds}</i></span>
                                 {/* disabled=false로 제이쿼리 구현  */}
                                 <button onClick={onClickHp2} className={`hp-ok-btn${state.isDisabled2===false?' on':''}`} disabled={state.isDisabled2}>인증번호 확인</button>
                              </div>
                           </li>
                           <li className={`addr addr1${state.isAddr===true?' on':''}`}>
                              <div>
                                 <em>주소<i>*</i></em>
                                 <input 
                                    type="text" 
                                    name='addr1' 
                                    id='addr1' 
                                    placeholder='주소검색 API'
                                    onFocus={onChangeAddr1}
                                    onChange={onChangeAddr1}
                                    value={state.주소1}
                                 />
                                 <button 
                                    className='addr-research-btn'
                                    onClick={onClickReSearchArress}
                                 ><img src="./img/search.svg" alt=""/>재검색</button>
                              </div>
                           </li>
                           <li className={`addr addr2${state.isAddr===true?' on':''}`}>
                              <div>                        
                                 <input 
                                    type="text" 
                                    name='addr2' 
                                    id='addr2' 
                                    placeholder='나머지 주소를 입력해주세요'
                                    onChange={onChangeAddr2}
                                    value={state.주소2}
                                 />                        
                              </div>
                           </li>
                           <li className={`addr addr3${state.isAddr===true?' on':''}`}>
                              <div>
                                 <em>주소<i>*</i></em>
                                 
                                 <button 
                                    className='addr-search-btn' 
                                    onClick={onClickAddrSearch}
                                 ><img src="./img/search.svg" alt=""/>주소검색</button>

                              </div>
                           </li>
                           <li className={`addr addr4${state.isAddr===true?' on':''}`}>
                              <div>
                                 <strong>샛별배송</strong>
                                 <h5>배송지에 따라 상품 정보가 달라질 수 있습니다.</h5>
                              </div>
                           </li>
                           <li className='radio'>
                              <div>
                                 <em>성별</em>
                                 <label htmlFor="male">
                                    <input 
                                       onChange={onChangeGender} 
                                       type="radio" 
                                       name="gender" 
                                       id="male" 
                                       value="남성"
                                       checked={state.성별.includes('남성')}
                                    />
                                    남성
                                 </label>
                                 <label htmlFor="female">
                                    <input 
                                       onChange={onChangeGender}  
                                       type="radio" 
                                       name="gender" 
                                       id="female" 
                                       value="여성"
                                       checked={state.성별.includes('여성')}
                                    />
                                    여성
                                 </label>
                                 <label htmlFor="none">
                                    <input 
                                       onChange={onChangeGender}  
                                       type="radio" 
                                       name="gender" 
                                       id="none" 
                                       value="선택안함" 
                                       checked={state.성별.includes('선택안함')}
                                    />
                                    선택안함
                                 </label>
                              </div>
                           </li>
                           <li className='birth'>
                              <div> 
                                 <em>생년월일</em>
                                 <ul className="birth-box">
                                    <li>
                                       <input 
                                          type="text" 
                                          name='birth_year' 
                                          id='birthYear' 
                                          placeholder='YYYY'
                                          value={state.생년}
                                          onChange={onChangeBirthYear}
                                          maxLength={4}
                                       />
                                    </li>
                                    <li>/</li>
                                    <li>
                                       <input 
                                          type="text" 
                                          name='birth_month' 
                                          id='birthMonth' 
                                          placeholder='MM'
                                          value={state.생월}
                                          onChange={onChangeBirthMonth}
                                          maxLength={2}
                                       />
                                       </li>
                                    <li>/</li>
                                    <li>
                                       <input 
                                          type="text" 
                                          name='birth_date' 
                                          id='birthDate' 
                                          placeholder='DD'
                                          value={state.생일}
                                          onChange={onChangeBirthDate}
                                          maxLength={2}
                                       />
                                    </li>
                                 </ul>
                              </div>
                              <p className={state.isBirth===true?'on':''}>{state.isBirthMsg}</p>
                           </li>
                           <li className='radio'>
                              <div>
                                 <em>추가입력 사항</em>
                                 <label htmlFor="addInput1">
                                    <input 
                                       type="radio" 
                                       name="addInput" 
                                       id="addInput1" 
                                       value="친구초대 추천인 아이디"
                                       onChange={onChangeAddInput}
                                       checked={state.추가입력사항.includes('친구초대 추천인 아이디')}
                                    />
                                    친구초대 추천인 아이디
                                 </label>
                                 <label htmlFor="addInput2">
                                    <input 
                                       type="radio" 
                                       name="addInput" 
                                       id="addInput2" 
                                       value="참여 이벤트명"
                                       onChange={onChangeAddInput}
                                       checked={state.추가입력사항.includes('참여 이벤트명')}

                                    />
                                    참여 이벤트명
                                 </label>
                              </div>                              
                           </li>
                           <li className={`radio add-input${state.isAdd===false?'':(state.isAddOn===false?' on1':' on2')}`}>
                              <div>
                                    <input 
                                       type="text" 
                                       name='add_input_box' 
                                       id='addInputBox1' 
                                       placeholder='추천인 아이디를 입력해 주세요.'
                                       onChange={onChangeChooCheonId}
                                       value={state.추천인아이디}
                                    />
                                    <input 
                                       type="text" 
                                       name='add_input_box' 
                                       id='addInputBox2' 
                                       placeholder='참여 이벤트명을 입력해 주세요.'
                                       onChange={onChangeChamEvent}
                                       value={state.참여이벤트명}
                                    />
                                    
                                    { /* 아이디 확인 버튼은 state.isAddOn===false 이면 보이고 그렇지않으면 숨긴다. */   
                                       state.isAddOn===false? <button onClick={onClickChoochuninId} className='addr-search-btn'><img src="./img/search.svg" alt=""/>아이디 확인</button> : ``
                                    }      
                              </div>
                           </li>
                           <li className={`radio add-input${state.isAdd===false?'':(state.isAddOn===false?' on1':' on2')}`}>
                              <div>
                                 <p className='add-inpput-p1'>
                                    가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.
                                 </p>
                                 <p className='add-inpput-p2'>
                                    추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                    가입 이후는 수정이 불가능 합니다.<br/>
                                    대소문자 및 띄어쓰기에 유의해주세요.
                                 </p>
                              </div>
                           </li>
                           <li className='row-line'>
                              <div>
                                 <hr/>
                              </div>                     
                           </li>                 
                           <li className='survice survice-all'>
                              <div>
                                    <em>이용약관동의</em>
                                    <label htmlFor="chkAll"><input onChange={onChangeServiceCheckAll} type="checkbox" name='chk_all' id='chkAll' value='전체 동의합니다.'  checked={state.이용약관동의.length===7}  />전체 동의합니다.</label>
                                    <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                              </div>
                           </li>
                           <li className='survice'>
                              <div>
                                    <label htmlFor="chk1"><input  onChange={onChangeServiceCheck} type="checkbox" name='chk_1' id='chk1' value='이용약관 동의(필수)'  checked={state.이용약관동의.includes('이용약관 동의(필수)')} />이용약관 동의</label><i>(필수)</i>
                              </div>
                           </li>
                           <li className='survice'>
                              <div>
                                    <label htmlFor="chk2"><input  onChange={onChangeServiceCheck}  type="checkbox" name='chk_2' id='chk2' value='개인정보 수집∙이용 동의(필수)'  checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(필수)')}/>개인정보 수집∙이용 동의</label><i>(필수)</i>
                              </div>
                           </li>
                           <li className='survice'>
                              <div>
                                    <label htmlFor="chk3"><input onChange={onChangeServiceCheck} type="checkbox" name='chk_3' id='chk3' value='개인정보 수집∙이용 동의(선택)' checked={state.이용약관동의.includes('개인정보 수집∙이용 동의(선택)')}/>개인정보 수집∙이용 동의</label><i>(선택)</i>
                              </div>
                           </li>
                           <li className='survice'>
                              <div>
                                    <label htmlFor="chk4"><input onChange={onChangeServiceCheck} type="checkbox" name='chk_4' id='chk4' value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'  checked={state.이용약관동의.includes('무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)')}/>무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><i>(선택)</i>
                              </div>
                           </li>
                           <li className='survice chk56'>
                              <div>
                                    <label htmlFor="chk5"><input onChange={onChangeServiceCheck}  type="checkbox" name='chk_5' id='chk5' value='SNS'  checked={state.이용약관동의.includes('SNS')}/>SNS</label>
                                    <label htmlFor="chk6"><input onChange={onChangeServiceCheck} type="checkbox" name='chk_6' id='chk6' value='이메일'  checked={state.이용약관동의.includes('이메일')}/>이메일</label>
                                    <p>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</p>
                              </div>
                           </li>
                           <li className='survice'>
                              <div>
                                    <label htmlFor="chk7"><input onChange={onChangeServiceCheck}  type="checkbox" name='chk_7' id='chk7' value='본인은 만 14세 이상입니다.(필수)'  checked={state.이용약관동의.includes('본인은 만 14세 이상입니다.(필수)')}/>본인은 만 14세 이상입니다.</label><i>(필수)</i>
                              </div>
                           </li>
                           <li className='row-line bottom-line'>
                              <div>
                                 <hr/>
                              </div>                     
                           </li>  
                           <li className='button-box'>
                              <div>
                                    <button onClick={onSubmitGaib} type='submit' className='submit-btn'>가입하기</button>
                              </div>                     
                           </li>  
                        </ul>

                     </form>
                  </div>
               </div>
            </section>

           

         </main> 
         
         
         {   /* 컨펌 모달 상태변수 등록 isModal true 이면 show  false 이면 hide */

            state.isModal && (
                  <div id="formEventModal">
                     <div className="wrap">
                        <div className="container">
                           <div className="message-box">
                                 <p className='msg'>{state.modalMsg}</p>
                           </div>
                           <div className="button-box">
                                 <button onClick={onClickModalClose}   className='msg-modal-close-btn'>확인</button>
                           </div>
                        </div>
                     </div>
                  </div>
            )
         }
      </>
    )
}   // 회원가입폼 컴포넌트  SignUpComponent


SignUpComponent.defaultProps = {
   회원가입 : {
      아이디:'',              
      아이디중복확인: false,
      isId: false,
      isIdMsg: '',

      비밀번호:'',
      idPw: false,
      isPwMsg: '',

      비밀번호확인: '',
      isPw2: false,
      isPw2Msg: '',

      이름:'',
      isName: false,
      isNameMsg: '',
      
      이메일:'',
      이메일중복확인: false,
      isEmail:false,
      isEmailMsg:'',

      휴대폰:'',
      isHp: false,
      isHp2: false,
      isHpDisabled: true,  
      isDisabled2: true,
      인증번호입력값: '',
      휴대폰인증번호: 0,
      isHpNumBtn2: false,

      주소1:'',
      주소2:'',
      isAddr: false,
      
      성별:'선택안함',

      생년:'',
      생월:'',
      생일:'',

      생년월일:'',
      isBirth: false,
      isBirthMsg: '',


      추가입력사항:'',
      isAdd: false,
      isAddOn: false,
      추천인아이디:'',
      참여이벤트명: '',



      이용약관: [
         '이용약관 동의(필수)',
         '개인정보 수집∙이용 동의(필수)',
         '개인정보 수집∙이용 동의(선택)',
         '무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)',
         'SNS',
         '이메일',
         '본인은 만 14세 이상입니다.(필수)'
      ],
      이용약관동의: [],

      isModal: false,  // 컨펌 모달 
      modalMsg: ''     // 컨펌 모달 메시지
   }
}