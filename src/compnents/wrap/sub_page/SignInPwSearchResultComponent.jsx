import React from 'react';
import axios from 'axios';


export default function SignInPwSearchResultComponent() {
    
    const [state, setState] = React.useState({
        비밀번호1:'',
        비밀번호2:'',
        아이디:'',
        휴대폰:''
    });
    
    const getPwsearchResult=()=>{
        let key ="MJSEARCH";
        if( sessionStorage.getItem(key)===null ){
            return;
        }
        let result = JSON.parse(sessionStorage.getItem(key));
        setState({
            아이디: result.아이디,
            휴대폰: result.휴대폰
        })
    }

    React.useEffect(()=>{
        getPwsearchResult();
    },[state.아이디, state.휴대폰]);


    const onSubmitPasswordReset=(e)=>{
        e.preventDefault();
            
        let formData = new FormData();
        formData.append('user_pw', state.비밀번호1);
        formData.append('user_id', state.아이디);
        formData.append('user_hp', state.휴대폰);
        
        axios({
            url: 'https://moonjong.co.kr/week6/pwSearch_reset_password.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{            
            console.log( res.data );
            if( res.data !== '' ){                                                
                // 비밀번호 재설정 끝나면 로그인창으로 이동
                window.location.pathname = '/signin';

            }
            else{                
                alert("비밀번호 재설정 실패!");
            }
            
        })
        .catch((err)=>{
            console.log( `AXIOS 실패! :  ${err}` );
        });
    }

    const onChangePw1=(e)=>{
        setState({
            ...state,
            비밀번호1: e.target.value
        });
    }

    const onChangePw2=(e)=>{
        setState({
            ...state,
            비밀번호2: e.target.value
        });
    }


    return (
        <div id='pwSearchResult'>
            <section id="idSearchSection">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>비밀번호 재설정</h2>                            
                        </div>
                        <div className="content">
                            <form onSubmit={onSubmitPasswordReset}>
                                <ul>
                                    <li>
                                        <label htmlFor="pw1">새 비밀번호등록</label>
                                        <input 
                                            onChange={onChangePw1} 
                                            type="password" 
                                            name='pw1' 
                                            id='pw1' 
                                            placeholder='새 비밀번호를 입력해 주세요'
                                            value={state.비밀번호1}
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="pw2">새 비밀번호확인</label>
                                        <input 
                                            onChange={onChangePw2} 
                                            type="password" 
                                            name='pw2' 
                                            id='pw2' 
                                            placeholder='새 비밀번호를 한 번 더 입력해 주세요'
                                            value={state.비밀번호2}
                                        />
                                    </li>
                                    <li>
                                        <button type='submit' className='pw-reset'>확인</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};