import React from 'react';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import axios from 'axios';


export default function NoticeViewComponent ({confirmModalOpen}) {

    const queryData =  useLocation();  // queryData.search => ?listNum=26
    

    const [param, setParam] = useSearchParams();  
    const listNum = param.get('listNum');


    const [state, setState] = React.useState({
        공지사항: {}
    });



    const onClickList=(e)=>{
        e.preventDefault();
        window.location.pathname = '/notice_select';
    }

    React.useEffect(()=>{

        let formData = new FormData();
        formData.append('idx', listNum);


        axios({
            url:'https://moonjong.co.kr/week6/notice_select_view.php',
            method:'POST',
            data: formData
        })
        .then((res)=>{

            if(res.status===200){
                setState({
                    ...state,
                    공지사항: res.data[0]
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 실패!",err);
        });

    }, [listNum, state.공지사항]);



    // 삭제
    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx', listNum);


        axios({
            url:'https://moonjong.co.kr/week6/notice_delete.php',
            method:'POST',
            data: formData
        })
        .then((res)=>{

            if(res.status===200){
               if(res.data===1){
                    confirmModalOpen('글이 삭제 되었습니다.');
                    window.location.pathname ='/notice_select';
               }
               else if(res.data===-1){
                    confirmModalOpen('글이 삭제 되지 않았습니다.');
               }
            }
        })
        .catch((err)=>{
            console.log("AXIOS 실패!",err);
        });
        
    }

    return (
        <div id='borard' className='noticeView'>
            <div className="container">
                <div className="title">
                    <h2>공지사항</h2>
                    <h5>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</h5>
                </div>
                <div className="centent">
                    <ul>
                        <li>
                            <div className="left">
                                <ul>
                                    <li>제목</li>
                                    <li>작성자</li>
                                    <li>작성일</li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>{state.공지사항.제목}</li>
                                    <li>{state.공지사항.작성자}</li>
                                    <li>{state.공지사항.작성일}</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='notice-conent'>
                                {state.공지사항.내용}
                            </div>                            
                        </li>
                        <li>
                            <div className="button-box">
                                <Link to={"/notice_update?listNum=" + listNum}>수정</Link>                                
                                <button type='button' onClick={onClickDelete}>삭제</button>
                                <button type='button' onClick={onClickList}>목록</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
