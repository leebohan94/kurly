import React,{useState,useEffect} from 'react';
import NoticeLeftComponent from './NoticeLeftComponent';
import NoticeRightComponent from './NoticeRightComponent';
import axios from 'axios';

export default function NoticeSelectComponent () {

    const [state, setState] = useState({        
        isWrite : true,
        공지사항: []
    });

    // 로딩시 공지사항 목록 가져오기
    useEffect(()=>{
        axios({
            url:'https://moonjong.co.kr/week6/notice_select.php',
            meth:'POST'
        })
        .then((res)=>{
            if(res.status===200){
                
                setState({
                    ...state,
                    공지사항: res.data
                })
               
              }
        })
        .catch((err)=>{
            console.log( 'AXIOS 실패!' );
            console.log( err );
        });
    },[]);


    // 로그인 상태이면 하단에 글쓰기 버튼 보인다.
    // 로그인 상태가 아니면 하단에 글쓰기 버튼 숨긴다.
    const onClickNoticeWrite=(e)=>{
        e.preventDefault();
        window.location.pathname ='/notice_insert';
    }


    return (
        <div id='borard' className='noticeSelect'>
            <div className="container">
                <NoticeLeftComponent />
                <NoticeRightComponent 공지사항={state.공지사항} />

                {
                    state.isWrite && (<div className="notice-write-btn-box">
                        <button onClick={onClickNoticeWrite} type='button'>글쓰기</button>
                    </div>)
                }
            </div>            
        </div>
    );
};
