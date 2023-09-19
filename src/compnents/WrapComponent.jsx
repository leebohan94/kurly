import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroModalComponent from './wrap/IntroModalComponent';
import QuickMenuComponent from './wrap/QuickMenuComponent';
import GoTopComponent from './wrap/GoTopComponent';
import Main1Component from './wrap/sub_page/Main1Component';
import Main2Component from './wrap/sub_page/Main2Component';
import Main3Component from './wrap/sub_page/Main3Component';
import Main4Component from './wrap/sub_page/Main4Component';
import SignUpComponent from './wrap/sub_page/SignUpComponent';
import SignInComponent from './wrap/sub_page/SignInComponent';
import SignInIdSearchComponent from './wrap/sub_page/SignInIdSearchComponent';
import SignInPwSearchComponent from './wrap/sub_page/SignInPwSearchComponent';
import SignInIdSearchResultComponent from './wrap/sub_page/SignInIdSearchResultComponent';
import SignInPwSearchResultComponent from './wrap/sub_page/SignInPwSearchResultComponent';
import ConfirmModal from './wrap/ConfirmModal';
import NoticeInsertComponent from './wrap/sub_page/board_notice/NoticeInsertComponent';
import NoticeSelectComponent from './wrap/sub_page/board_notice/NoticeSelectComponent';
import NoticeViewComponent from './wrap/sub_page/board_notice/NoticeViewComponent';
import NoticeUpdtateComponent from './wrap/sub_page/board_notice/NoticeUpdtateComponent';
import NoticeDelteComponent from './wrap/sub_page/board_notice/NoticeDelteComponent';

export default function WrapComponent(){

  
    // 컨펌모달
    const [modal, setModal] = React.useState({
        confirmMessage:'컨펌모달 메시지',
        isConfirmModal: false
    });

    // 모달 열기 함수
    const confirmModalOpen=(msg)=>{
        setModal({
            ...modal,
            confirmMessage: msg,
            isConfirmModal: true
        })
    }

    // 모달 닫기 함수
    const confirmModalClose=()=>{
        setModal({
            ...modal,
            isConfirmModal: false
        })
    }

    const [state,setState] = React.useState({
        setId: 0,
        seconds: 59,
        minutes: 2,
        countPlay: false
    });



    // 카운트 플레이 세터함수 호출하면 변경 => 하위컴포넌트에서 호출실행한다.
    const setCountPlay=()=>{
        setState({
            ...state,
            countPlay: true
        })
    }

    // 카운트 중지함수

    


    // 카운트 다운 함수
    const hpCountDown=()=>{
        let setId = 0;
        let seconds = 59;
        let minutes = 2;

        setId = setInterval(function(){
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    
                    alert(`유효 시간이 만료되었습니다. 다시 시도해 주세요.`);    
                    clearInterval( setId );  // 타이머 중지                
                    seconds=0;
                    minutes=0;
                }
            }

            // 초, 분
            setState({
                setId: setId,
                seconds: seconds,
                minutes: minutes
            })
        },1000);
    }
    // 리액트 훅 사용(유즈이펙트)
    React.useEffect(()=>{
        state.countPlay && hpCountDown();  // state.countPlay true 이면 실행
    },[state.countPlay]); // [] 로딩시 1회만 실행 그러나 [state.countPlay] 상태값이 바뀌면 다시 실행 한다.

    return (
        <div id="wrap">
            <TopModalComponent />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HeaderComponent/>}> 
                        <Route index element={<MainComponent/>}/>
                        <Route path='/intro' element={<MainComponent/>}/>
                        <Route path='/main1' element={<Main1Component/>}/>
                        <Route path='/main2' element={<Main2Component/>}/>
                        <Route path='/main3' element={<Main3Component/>}/>
                        <Route path='/main4' element={<Main4Component/>}/>
                        <Route path='/signup' element={<SignUpComponent setCountPlay={setCountPlay}  setId={state.setId}  seconds={state.seconds}  minutes={state.minutes} />}/>
                        <Route path='/signin' element={<SignInComponent confirmModalOpen={confirmModalOpen} />}/>
                        <Route path='/idsearch' element={<SignInIdSearchComponent confirmModalOpen={confirmModalOpen} />}/>
                        <Route path='/pwsearch' element={<SignInPwSearchComponent confirmModalOpen={confirmModalOpen} />}/>
                        <Route path='/idsearch_result' element={<SignInIdSearchResultComponent />}/>
                        <Route path='/pwsearch_result' element={<SignInPwSearchResultComponent />}/>
                        <Route path='/notice_insert' element={<NoticeInsertComponent confirmModalOpen={confirmModalOpen} />}/>
                        <Route path='/notice_select' element={<NoticeSelectComponent />}/>
                        <Route path='/notice_view' element={<NoticeViewComponent confirmModalOpen={confirmModalOpen} />}/>
                        <Route path='/notice_update' element={<NoticeUpdtateComponent />}/>
                        <Route path='/notice_delete' element={<NoticeDelteComponent />}/>
                    </Route>
                </Routes>
            </BrowserRouter>

            <FooterComponent />
            <IntroModalComponent />
            <QuickMenuComponent />
            <GoTopComponent />           
            {
                modal.isConfirmModal && (
                    <ConfirmModal confirmMessage={modal.confirmMessage}  confirmModalClose={confirmModalClose}/>
                )
            }
        </div>
    )
}
