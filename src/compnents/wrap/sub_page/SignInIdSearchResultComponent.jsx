import React from 'react';

export default function SignInIdSearchResultComponent() {
    
    const [state, setState] = React.useState({
        아이디:'',
        가입일:''
    });

    const getIdsearchResult=()=>{
        let key ="MJSEARCH";
        if( sessionStorage.getItem(key)===null ){
            return;
        }
        let result = JSON.parse(sessionStorage.getItem(key));
        setState({
            아이디: result.아이디,
            가입일: result.가입일
        })
    }

    React.useEffect(()=>{
        getIdsearchResult();
    },[state.아이디, state.가입일]);


    const onClickPwSearchUrl=(e)=>{
        e.preventDefault();
        window.location.pathname = '/pwsearch';
    }


    const onClickLoginSearchUrl=(e)=>{
        e.preventDefault();
        window.location.pathname = '/signin';
    }



    return (
        <div id='idSearchResult'>
            <section id="idSearchSection">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>고객님의 컬리 계정을 찾았습니다.</h2>
                            <p>아이디 확인 후 로그인해 주세요.</p>
                        </div>
                        <div className="content">
                            <ul>
                                <li>
                                    <span>
                                        <img src="./img/sign_in/icon_result.svg" alt="" />
                                    </span>
                                    <span>
                                        <strong>{state.아이디}</strong>
                                        <em>가입일:{state.가입일}</em>
                                    </span>
                                </li>
                                <li>
                                    <button onClick={onClickPwSearchUrl} className='pw-search'>비밀번호 찾기</button>
                                </li>
                                <li>
                                    <button onClick={onClickLoginSearchUrl} className='login'>로그인</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};