import React,{useState} from 'react';
import NoticeLeftComponent from './NoticeLeftComponent';
import axios from 'axios';
import {useSearchParams} from 'react-router-dom';

export default function NoticeUpdtateComponent ({confirmModalOpen}) {

    const [param, setParam] = useSearchParams();
    const listNum = param.get('listNum');

    console.log('수정페이지 listNum '+ listNum );

    const [state, setState] = useState({
        글번호: '',
        제목: '',
        내용: ''
    });

    const onChangeSubject=(e)=>{
        setState({
            ...state,
            제목: e.target.value
        })
    }    
    const onChangeContents=(e)=>{
        setState({
            ...state,
            내용: e.target.value
        })
    }    


    // 글쓰기 등록 전송
    const onSubmitInsertEvent=(e)=>{
        e.preventDefault();        
        
        if( state.제목==='' || state.내용===''){

            if(state.제목===''){           
                confirmModalOpen('제목을 입력하세요');
            }
            else if(state.내용===''){           
                confirmModalOpen('내용을 입력하세요');
            }

        }
        else{

            let newFormData = new FormData();
            newFormData.append('idx',state.글번호);
            newFormData.append('user_id',state.아이디);
            newFormData.append('subject',state.제목);
            newFormData.append('contents',state.내용);
    
            axios({
                url:'https://moonjong.co.kr/week6/notice_update.php',
                method: 'POST',
                data: newFormData
            })
            .then((res)=>{
                if(res.status===200){
                  if(res.data === 1){
                    window.location.pathname = '/notice_select';
                  }
                  else if(res.data === -1){
                    alert('확인하고 다시 시도하세요');
                  }
                }
            })
            .catch((err)=>{
                console.log( 'AXIOS 실패!' );
                console.log( err );
            });
    
        }


    }

    // 글가져오기
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
                    글번호: res.data[0].글번호,
                    제목: res.data[0].제목,
                    내용: res.data[0].내용
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 실패!",err);
        });

    }, [listNum, state.공지사항]);




    return (
        <div id='borard' className='noticeInsert'>
            <div className="container">
                <NoticeLeftComponent />
                <div className="right">
                    
                    <div className='title'>
                        <h3>공지사항 수정</h3>
                    </div> 
                    
                    <form onSubmit={onSubmitInsertEvent}  name='insert_form' id='insertForm' method='post' action="./notice_insert.php">
                        <ul>
                            <li>
                                <div className="left">
                                    <label htmlFor='subject'>제목<i>*</i></label>
                                </div>
                                <div className="right">
                                   <input 
                                        type="text" 
                                        name='subject' 
                                        id='subject' 
                                        placeholder='제목을 입력해주세요'
                                        onChange={onChangeSubject}
                                        value={state.제목}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <label htmlFor='contents'>내용<i>*</i></label>
                                </div>
                                <div className="right">
                                    <textarea 
                                        name='contents' 
                                        id='contents' 
                                        placeholder='글내용을 입력해주세요'
                                        onChange={onChangeContents}
                                        value={state.내용}
                                    ></textarea>
                                </div>
                            </li>
                        </ul>
                        <div className="button-box">
                            <button type='submit'>수정</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

