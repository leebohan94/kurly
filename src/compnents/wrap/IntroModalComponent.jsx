import React from "react";

export default function IntroModalComponent(){
    return(
        <div id="introModal">
            <div className="container">
                <div className="wrap">
                    <div className="img-box">
                        <img src="./img/intro_modal_image.jpg" alt=""/>
                    </div>
                    <div className="btn-box">
                        <button className="close-open-none-btn">다시 안 보기</button>
                        <button className="close-btn">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}