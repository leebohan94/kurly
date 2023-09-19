import React from 'react';

function ConfirmModal({confirmMessage, confirmModalClose}) {

    const onClickModalClose=(e)=>{
        e.preventDefault();
        // 모달닫기함수 호출 닫기
        confirmModalClose();
    }
    return (
        <div id="formEventModal">
            <div className="wrap">
                <div className="container">
                    <div className="message-box">
                            <p className='msg'>{confirmMessage}</p>
                    </div>
                    <div className="button-box">
                            <button onClick={onClickModalClose}   className='msg-modal-close-btn'>확인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;