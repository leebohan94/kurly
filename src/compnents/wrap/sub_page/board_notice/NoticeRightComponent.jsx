import React from 'react';
import {Link} from 'react-router-dom';

export default function NoticeRightComponent ({공지사항}) {
    
    const [state, setState] = React.useState({        
        list: 7,        // 한화면의 목록개수(한페이 줄수)
        pageNumber: 1   // 시작페이지 첫번째 = 전체레코드수 / 한페이 줄수
    });
    
    const onClickPageNum=(e, value)=>{
        e.preventDefault();
        setState({
            ...state,
            pageNumber: value
        });
    }

    return (
        <div className="right">
            <div className='title'>
                    <h3>공지사항 <span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></h3>
            </div>
            <dl>
                <dt>
                    <span>번호</span>
                    <span>제목</span>
                    <span>작성자</span>
                    <span>작성일</span>
                </dt>

                {    

                   공지사항.map((item,idx)=>{ // 0 1 2 3 4  /  5 6 7 8 9  / 10 11 12 13 14  / 15 16 17 18 19   / 20 21 22 23 24
                        
                        if( Math.ceil((idx+1)/state.list) === state.pageNumber) {                          
                            return (
                                <dd key={item.글번호}>
                                    <span>{item.글번호}</span>
                                    <span><Link to={"/notice_view?listNum=" + item.글번호} >{item.제목}</Link></span>
                                    <span>{item.작성자}</span>
                                    <span>{`${new Date(item.작성일).getFullYear()}-${new Date(item.작성일).getMonth()+1}-${new Date(item.작성일).getDate()}`}</span>
                                </dd>
                            )
                        }
                   })

                }

            </dl>

            <div className="page-btn-box">
                {
                    공지사항.map((item,idx)=>{
                        if(idx < Math.ceil(공지사항.length/state.list)){
                            return(
                                <span key={idx}><a href="!#"  onClick={(e)=>onClickPageNum(e, idx+1)}>{idx+1}</a></span>
                            )                    
                        }
                    })
                }  
            </div>

        </div>
    );
};
