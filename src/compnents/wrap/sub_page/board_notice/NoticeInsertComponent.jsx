import React,{useState} from 'react';
import NoticeLeftComponent from './NoticeLeftComponent';
import axios from 'axios';

export default function NoticeInsertComponent ({confirmModalOpen}) {

    const [state, setState] = useState({
        제목: '',
        내용: '',        
        아이디: 'moonjong'
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
            newFormData.append('user_id',state.아이디);
            newFormData.append('subject',state.제목);
            newFormData.append('contents',state.내용);
    
            axios({
                url:'https://moonjong.co.kr/week6/notice_insert.php',
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


    return (
        <div id='borard' className='noticeInsert'>
            <div className="container">
                <NoticeLeftComponent />
                <div className="right">
                    
                    <div className='title'>
                        <h3>공지사항</h3>
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
                            <button type='submit'>등록</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

