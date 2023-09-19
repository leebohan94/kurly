import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default function SignInComponent({confirmModalOpen}) {    
    const [state,setState] = React.useState({
        아이디:'',
        비밀번호:'',
        이름:'',
        세션아이디:''
    });

    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        });
    }
    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        });
    }

    const onSubmitSignInEvent=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('user_id', state.아이디);
        formData.append('user_pw', state.비밀번호);
        
        axios({
            url: 'https://moonjong.co.kr/week6/login.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            
            if( res.data !== '' ){                
               
                
                // 쿠키설정하기 : 3일
                let newDate = new Date();
                newDate.setDate(newDate.getDate()+3); //현재날짜+3일
                let value = {
                    아이디: res.data.아이디,
                    이름: res.data.이름
                }
                document.cookie = `${res.data.세션아이디}=${JSON.stringify(value)}; path=/; expires=${newDate.toUTCString()};`;
                
                // 세션아이디 보관장소 : 키는 우리가 정한 암호화된키를 사용
                const key = 'MJPHPSESSIONID202304'; 
                localStorage.setItem(key, res.data.세션아이디);
                // 로그인화면 초기화
                setState({
                    아이디:'',
                    비밀번호:'',
                    이름:'',
                    세션아이디:''
                })
                // 인트로페이지로 이동하기
                window.location.href = '/intro';
                //window.location.pathname = '/intro';

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
        <main id='signIn'>
            <section id="signInSection">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>로그인</h2>
                        </div>
                        <div className="content">
                            <form onSubmit={onSubmitSignInEvent} name='singin_form' id='singinForm' method='post'>
                                <ul>
                                    <li>
                                        <div>                                        
                                            <input 
                                                type="text" 
                                                name='user_id' 
                                                id='userId' 
                                                placeholder='아이디를 입력해 주세요'
                                                onChange={onChangeId}
                                                value={state.아이디}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <input 
                                                type="password" 
                                                name='user_pw' 
                                                id='userPw' 
                                                placeholder='비밀번호를 입력해 주세요'
                                                onChange={onChangePw}
                                                value={state.비밀번호}
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <span>
                                            <Link to='/idsearch'>아이디 찾기</Link>
                                            <i>|</i>
                                            <Link to='/pwsearch'>비밀번호 찾기</Link>
                                        </span>
                                    </li>
                                    <li>
                                        <button type='submit'>로그인</button>
                                    </li>
                                    <li>
                                        <Link to='/signup'>회원가입</Link>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};