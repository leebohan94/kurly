import React from 'react';
import axios from 'axios';

export default function IdSearchComponent({confirmModalOpen}) {

    const [state, setState] = React.useState({
        isTab1: true,
        isTab2: false,
        isIdsearchEmailBtn: false, // 이메일 버튼
        isIdsearchEmailP: false, // 이메일 오류메시지
        isIdsearchHpBtn: false,
        isIdsearchHpP: false,
        isIdsearchNameBtn: false,
        isIdsearchNameP: false,
        이름: '',
        휴대폰: '',
        이메일: '',
        isIdSearchBtn: false,  // 이름, 휴대폰 입력되면 true
        isEmailSearchBtn: false,  // 이름, 휴대폰 입력되면 true
        아이디:''
    });

    // 탭버튼 클릭 이벤트
    const onClickTab1Btn=(e)=>{
        setState({
            ...state,
            isTab1: true,
            isTab2: false,
            isIdsearchEmailBtn: false, // 이메일 버튼
            isIdsearchEmailP: false, // 이메일 오류메시지
            isIdsearchHpBtn: false,
            isIdsearchHpP: false,
            isIdsearchNameBtn: false,
            isIdsearchNameP: false,
            이름: '',
            휴대폰: '',
            이메일: ''
        })
    }
    const onClickTab2Btn=(e)=>{
        setState({
            ...state,
            isTab1: false,
            isTab2: true,
            isIdsearchEmailBtn: false, // 이메일 버튼
            isIdsearchEmailP: false, // 이메일 오류메시지
            isIdsearchHpBtn: false,
            isIdsearchHpP: false,
            isIdsearchNameBtn: false,
            isIdsearchNameP: false,
            이름: '',
            휴대폰: '',
            이메일: '',
            아이디:''
        })
    }


    // 입력상자 이름 onChange();
    const onChangeIdSearchName=(e)=>{
        let isIdsearchNameP = false;
        let isIdsearchNameBtn = false;
        let isIdSearchBtn = false;
        let isEmailSearchBtn = false;

        if(e.target.value.length >= 1){
            isIdsearchNameP = false;
            isIdsearchNameBtn = true;
        }
        else {
            isIdsearchNameP = true;
            isIdsearchNameBtn = false;
        }

        if( e.target.value.length >= 1  &&  state.휴대폰.length >=10 ){
            isIdSearchBtn = true;
        }
        else{
            isIdSearchBtn = false;
        }
        
        if( e.target.value.length >= 1  &&  state.이메일.length >=1 ){
            isEmailSearchBtn = true;
        }
        else{
            isEmailSearchBtn = false;
        }
        

        setState({
            ...state,
            이름: e.target.value,
            isIdsearchNameP: isIdsearchNameP,
            isIdsearchNameBtn: isIdsearchNameBtn,
            isIdSearchBtn: isIdSearchBtn,
            isEmailSearchBtn: isEmailSearchBtn
        });
    }


    // 입력상자 휴대폰 onChange();
    const onChangeIdSearchHp=(e)=>{
        let isIdsearchHpP = false;
        let isIdsearchHpBtn = false;
        let isIdSearchBtn = false;

        if(e.target.value.length>=1){
            isIdsearchHpP = false;
            isIdsearchHpBtn = true;
        }
        else{
            isIdsearchHpP = true;
            isIdsearchHpBtn = false;
        }

        if( e.target.value.length >= 10  &&  state.이름.length >=1 ){
            isIdSearchBtn = true;
        }
        else{
            isIdSearchBtn = false;
        }

      

        setState({
            ...state,
            isIdsearchHpP: isIdsearchHpP,
            isIdsearchHpBtn: isIdsearchHpBtn,
            휴대폰: e.target.value,
            isIdSearchBtn: isIdSearchBtn
        })

    }


    // 이메일 입력상자 onChange();
    const onChangeEmail=(e)=>{
        let isIdsearchEmailP = false;
        let isIdsearchEmailBtn = false;
        let isEmailSearchBtn = false;

        if(e.target.value.length>=1){
            isIdsearchEmailP = false;
            isIdsearchEmailBtn = true;
        }
        else{
            isIdsearchEmailP = true;
            isIdsearchEmailBtn = false;
        }

        if( e.target.value.length >= 1  &&  state.이름.length >=1 ){
            isEmailSearchBtn = true;
        }
        else{
            isEmailSearchBtn = false;
        }

        setState({
            ...state,
            이메일: e.target.value,
            isIdsearchEmailP: isIdsearchEmailP,
            isIdsearchEmailBtn: isIdsearchEmailBtn,
            isEmailSearchBtn: isEmailSearchBtn
        })
   
    }


    // 이름삭제 버튼 클릭 이벤트
    const onClickNameDelete=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            이름: '',
            isIdsearchNameBtn: false,
            isIdsearchNameP: true
        });
    }

    // 휴대폰삭제 버튼 클릭 이벤트
    const onClickHpDelete=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            휴대폰: '',
            isIdsearchHpBtn: false,
            isIdsearchHpP: true
        });
    }

    // 이메일삭제 버튼 클릭 이벤트
    const onClickEmailDelete=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            이메일: '',
            isIdsearchEmailBtn: false,
            isIdsearchEmailP: true
        });
    }


    // 휴대폰  인증번호 받기 클릭 이벤트
    const onClickHpAuthentication=(e)=>{
        e.preventDefault();

        let formData = new FormData();
        formData.append('user_name', state.이름);
        formData.append('user_hp', state.휴대폰); // 010-7942-5305
        
        axios({
            url: 'https://moonjong.co.kr/week6/idSearch_hp_authentication.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            
            console.log( res.data );
            if( res.data !== '' ){                
               
                let key ="MJSEARCH";
                const idSearch = {
                    아이디: res.data.아이디,
                    가입일: res.data.가입일
                }
                sessionStorage.setItem(key, JSON.stringify(idSearch));
                window.location.pathname = '/idsearch_result';
            }
            else{                
                confirmModalOpen("가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해 주세요.");
            }
            
        })
        .catch((err)=>{
            console.log( `AXIOS 실패! :  ${err}` );
        });



        // DB 연결
        // 조회 이름, 휴대폰 전송 조회

        // 컨펌모달 열기 함수 호출
        
        // 데이터베이스에 이름, 전화번호 보내서
        // 둘다 틀리면 메시지 : "가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해 주세요."
        // 둘다 맞으면 메시지 : 
        //                     "인증번호가 발송되었습니다. 3분 안에 인증번호를 입력해 주세요.""
        //                     "카카오톡이 설치된 경우 카카오 알림톡으로 발송됩니다.""
        // 새로운 페이지에
        // 고객님의 컬리 계정을 찾았습니다.
        // 아이디 확인 후 로그인해 주세요.
        // moonjong
        // 가입일  2019.06.12.
        // 버튼 비밀번호 찾기
        // 버튼 로그인

        
    }


    // 이메일 인증번호 받기 클릭 이벤트
    const onClickEmailAuthentication=(e)=>{
        e.preventDefault();
        
        let formData = new FormData();
        formData.append('user_name', state.이름);
        formData.append('user_email', state.이메일);
        
        axios({
            url: 'https://moonjong.co.kr/week6/idSearch_email_authentication.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            
            console.log( res.data );
            if( res.data !== '' ){ 
                               
                let key ="MJSEARCH";
                const idSearch = {
                    아이디: res.data.아이디,
                    가입일: res.data.가입일
                }
                sessionStorage.setItem(key, JSON.stringify(idSearch));
                window.location.pathname = '/idsearch_result';

            }
            else{                
                confirmModalOpen("가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해 주세요.");
            }
            
        })
        .catch((err)=>{
            console.log( `AXIOS 실패! :  ${err}` );
        });


    }


    return (
        <main id='id-search'>
            <section id="idSearchSection">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>아이디 찾기</h2>
                        </div>
                        <div className="content">

                            <div className='tab-button'>
                                <button onClick={onClickTab1Btn} className={state.isTab1?'on':''}>휴대폰 인증</button>
                                <button onClick={onClickTab2Btn} className={state.isTab2?'on':''}>이메일 인증</button>
                            </div>
                            {
                                state.isTab1 && (
                                    <ul>
                                        <li>
                                            <div>
                                                <label htmlFor="userName">이름</label>
                                                <input 
                                                    type="text" 
                                                    name='user_name' 
                                                    id='userName' 
                                                    placeholder='이름을 입력해 주세요'
                                                    onChange={onChangeIdSearchName}
                                                    value={state.이름}
                                                />                                     
                                                <p className={state.isIdsearchNameP?'on':''}>가입 시 등록한 이름을 입력해 주세요.</p>
                                                <button onClick={onClickNameDelete} className={state.isIdsearchNameBtn?'on':''} type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <label htmlFor="userHp">휴대폰 번호</label>
                                                <input 
                                                    maxLength={13} 
                                                    type="text" 
                                                    name='user_hp' 
                                                    id='userHp' 
                                                    placeholder='휴대폰 번호를 입력해 주세요'
                                                    onChange={onChangeIdSearchHp}
                                                    value={state.휴대폰}
                                                />

                                                
                                                <p className={state.isIdsearchHpP?'on':''}>가입 시 등록한 휴대폰 번호를 입력해 주세요.</p>
                                                <button onClick={onClickHpDelete} className={state.isIdsearchHpBtn?'on':''} type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>

                                        <li>
                                            <button  onClick={onClickHpAuthentication}  type='submit' className={state.isIdSearchBtn?'on':''}>인증번호 받기</button>                                        </li>                              
                                    </ul>
                                )

                             }

                             {
                                state.isTab2 && (    
                                    <ul>
                                        <li>
                                            <div>
                                                <label htmlFor="userName">이름</label>
                                                <input 
                                                    type="text" 
                                                    name='user_name' 
                                                    id='userName' 
                                                    placeholder='이름을 입력해 주세요'
                                                    onChange={onChangeIdSearchName}
                                                    value={state.이름}
                                                />
                                                <p className={state.isIdsearchNameP?'on':''}>가입 시 등록한 이름을 입력해 주세요.</p>
                                                <button  onClick={onClickNameDelete}  className={state.isIdsearchNameBtn?'on':''} type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <label htmlFor="userEmail">이메일</label>
                                                <input 
                                                    type="text" 
                                                    name='user_email' 
                                                    id='userEmail' 
                                                    placeholder='이메일을 입력해 주세요'
                                                    onChange={onChangeEmail}
                                                    value={state.이메일}
                                                />

                                                <p className={state.isIdsearchEmailP===true?'on':''}>가입 시 등록한 휴대폰 번호를 입력해 주세요.</p>
                                                <button  onClick={onClickEmailDelete} className={state.isIdsearchEmailBtn===true?'on':''} type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <button  onClick={onClickEmailAuthentication}   type='submit' className={state.isEmailSearchBtn?'on':''}>확인</button>
                                        </li>                              
                                    </ul>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};