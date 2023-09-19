import React from 'react';
import axios from 'axios';

export default function SignInPwSearchComponent({confirmModalOpen}) {

    const [state, setState] = React.useState({
        isTab1: true,
        isTab2: false,
        isIdsearchIdBtn: false,
        isIdsearchIdP: false,
        isIdsearchHpBtn: false,
        isIdsearchHpP: false,
        isIdsearchEmailP: false,
        isIdsearchEmailBtn: false,
        휴대폰:'',
        아이디:'',
        이메일:'',
        비밀번호:'',
        isAuthentiHp: false,
        isAuthentiEmail: false
    });

    const onClickTab1Btn=(e)=>{
        setState({
            ...state,
            isTab1: true,
            isTab2: false,
            isIdsearchIdBtn: false,
            isIdsearchIdP: false,
            isIdsearchHpBtn: false,
            isIdsearchHpP: false,
            isIdsearchEmailP: false,
            isIdsearchEmailBtn: false,
            휴대폰:'',
            아이디:'',
            이메일:'',
            비밀번호:'',
        })
    }
    const onClickTab2Btn=(e)=>{
        setState({
            ...state,
            isTab1: false,
            isTab2: true,
            isIdsearchIdBtn: false,
            isIdsearchIdP: false,
            isIdsearchHpBtn: false,
            isIdsearchHpP: false,
            isIdsearchEmailP: false,
            isIdsearchEmailBtn: false,
            휴대폰:'',
            아이디:'',
            이메일:'',
            비밀번호:'',
        })
    }

    const onChangeId=(e)=>{
        let isIdsearchIdP=false;
        let isIdsearchIdBtn=false;
        let isAuthentiHp=false;

        if(e.target.value.length>=1 && state.휴대폰.length>=10){
            isIdsearchIdP=false;
            isIdsearchIdBtn=true;
            isAuthentiHp=true;
        }
        else{
            isIdsearchIdP=true;
            isIdsearchIdBtn=false;
            isAuthentiHp=false;
        }

        setState({
            ...state,
            isIdsearchIdP: isIdsearchIdP,
            isIdsearchIdBtn: isIdsearchIdBtn,
            아이디 : e.target.value,
            isAuthentiHp: isAuthentiHp
        });
    }

    const onChangeHp=(e)=>{
        let isIdsearchHpP=false;
        let isIdsearchHpBtn=false;
        let isAuthentiHp=false;

        if(e.target.value.length>=10 && state.휴대폰.length>=1){
            isIdsearchHpP=false;
            isIdsearchHpBtn=true;
            isAuthentiHp=true;
        }
        else{
            isIdsearchHpP=true;
            isIdsearchHpBtn=false;
            isAuthentiHp=false;
        }

        setState({
            ...state,
            isIdsearchHpP: isIdsearchHpP,
            isIdsearchHpBtn: isIdsearchHpBtn,
            휴대폰 : e.target.value,
            isAuthentiHp: isAuthentiHp
        });
    }


    const onChangeEmail=(e)=>{
        let isIdsearchEmailP=false;
        let isIdsearchEmailBtn=false;
        let isAuthentiEmail=false;

        if(e.target.value.length>=1 && state.아이디.length >=1 ){
            isIdsearchEmailP=false;
            isIdsearchEmailBtn=true;
            isAuthentiEmail=true;
        }
        else{
            isIdsearchEmailP=true;
            isIdsearchEmailBtn=false;
            isAuthentiEmail=false;
        }

        setState({
            ...state,
            isIdsearchEmailP: isIdsearchEmailP,
            isIdsearchEmailBtn: isIdsearchEmailBtn,
            이메일 : e.target.value,
            isAuthentiEmail: isAuthentiEmail
        });
    }


    
    // 아이디삭제 버튼 클릭 이벤트
    const onClickIdDelete=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            아이디: '',
            isIdsearchIdBtn: false,
            isIdsearchIdP: true
        });
    }

    
    
    // 휴대삭제 버튼 클릭 이벤트
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

    

    const onClickAuthentiBtnHp=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('user_id', state.아이디);
        formData.append('user_hp', state.휴대폰);
        
        axios({
            url: 'https://moonjong.co.kr/week6/pwSearch_hp_authentication.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            

            if( res.data !== '' ){                
                let key ="MJSEARCH";
                const pwSearch = {
                    아이디: res.data.아이디,
                    휴대폰: res.data.휴대폰
                }
                sessionStorage.setItem(key, JSON.stringify(pwSearch));
               window.location.pathname = '/pwsearch_result';

            }
            else{                
                confirmModalOpen("가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해 주세요.");
            }
            
        })
        .catch((err)=>{
            console.log( `AXIOS 실패! :  ${err}` );
        });

 
    }

    const onClickAuthentiBtnEmail=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('user_id', state.아이디);
        formData.append('user_email', state.이메일);
        
        axios({
            url: 'https://moonjong.co.kr/week6/pwSearch_email_authentication.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            
              
            if( res.data !== '' ){                
                
                                
                let key ="MJSEARCH";
                const pwSearch = {
                    아이디: res.data.아이디,
                    휴대폰: res.data.휴대폰
                }
                sessionStorage.setItem(key, JSON.stringify(pwSearch));
                window.location.pathname = '/pwsearch_result';

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
        <main id='pw-search'>
           <section id="idSearchSection">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>비밀번호 찾기</h2>
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
                                                <label htmlFor="userId">아이디</label>
                                                <input 
                                                    type="text" 
                                                    name='user_id' 
                                                    id='userId' 
                                                    placeholder='아이디를 입력해 주세요'
                                                    onChange={onChangeId}
                                                    value={state.아이디}
                                                />
                                                <p className={state.isIdsearchIdP?'on':''} >가입 시 등록한 아이디를 입력해 주세요.</p>
                                                <button onClick={onClickIdDelete}  className={state.isIdsearchIdBtn?'on':''}  type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <label htmlFor="userHp">휴대폰 번호</label>
                                                <input 
                                                    type="text" 
                                                    name='user_hp' 
                                                    id='userHp' 
                                                    placeholder='휴대폰 번호를 입력해 주세요'
                                                    onChange={onChangeHp}
                                                    value={state.휴대폰}
                                                />
                                                <p  className={state.isIdsearchHpP?'on':''}>가입 시 등록한 휴대폰 번호를 입력해 주세요.</p>
                                                <button onClick={onClickHpDelete}  className={state.isIdsearchHpBtn?'on':''} type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                                
                                            </div>
                                        </li>
                                    
                                        <li>
                                            <button  onClick={onClickAuthentiBtnHp} type='submit' className={state.isAuthentiHp?'on':''} disabled={!state.isAuthentiHp}>인증번호 받기</button>
                                        </li>                              
                                    </ul>
                                )

                            }

                            {
                                state.isTab2 && (
                                    <ul>                                
                                        <li>
                                            <div>
                                                <label htmlFor="userId">아이디</label>
                                                <input 
                                                    type="text" 
                                                    name='user_id' 
                                                    id='userId' 
                                                    placeholder='아이디를 입력해 주세요'
                                                    onChange={onChangeId}
                                                    value={state.아이디}
                                                />
                                                <p className={state.isIdsearchIdP?'on':''} >가입 시 등록한 아이디를 입력해 주세요.</p>
                                                <button onClick={onClickIdDelete}  className={state.isIdsearchIdBtn?'on':''}  type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <label htmlFor="userEmail">이메일</label>
                                                <input 
                                                    type="email" 
                                                    name='user_email' 
                                                    id='userEmail' 
                                                    placeholder='이메일을 입력해 주세요'
                                                    onChange={onChangeEmail}
                                                    value={state.이메일}
                                                />
                                                <p className={state.isIdsearchEmailP?'on':''} >가입 시 등록한 이메일을 입력해 주세요.</p>
                                                <button onClick={onClickEmailDelete}  className={state.isIdsearchEmailBtn?'on':''}  type='button'><img src="./public/img/sign_in/cross.svg" alt="" /></button>
                                            </div>
                                        </li>
                                    
                                        <li>
                                            <button onClick={onClickAuthentiBtnEmail}  type='submit'  className={state.isAuthentiEmail?'on':''}  disabled={!state.isAuthentiEmail}>확인</button>
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