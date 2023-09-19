import React from 'react';

export default function Main4ChildComponent({특가혜택}) {


    // 프롭스 배열 반복문 출력
    const result = 특가혜택.map((item, idx)=>{
        return (
            <li className="product-list main4-product-list"  key={item.제품코드}>
                <div className="gap">
                    <div className="img-box">
                        <a href="!#">
                            <img src={`./img/main4/${item.제품이미지}`} alt="" />                           
                        </a>
                    </div>                   
                </div>
            </li>
        )
    })

    return (
        <ul className="new-product-gallery">

            {result}

        </ul>
    );
};
