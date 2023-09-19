import React from 'react';

export default function Main3ChildComponent({알뜰쇼핑}) {


    const commaDecimal=(value)=>{
        
        let strValue = value.toString(); 
        const regExp = /(^\d+)(\d{3})/g;  

        while( regExp.test(strValue) ){ 
            strValue = strValue.replace(regExp, '$1,$2');            
        }
        return strValue;
    }


    // 프롭스 배열 반복문 출력
    const result = 알뜰쇼핑.map((item, idx)=>{
        return (
            <li className="product-list"  key={item.제품코드}>
                <div className="gap">
                    <div className="img-box">
                        <a href="!#">
                            <img src={`./img/main3/${item.제품이미지}`} alt="" />
                            <span><img src="./img/main1/cart_fill.svg" alt="" /></span>
                        </a>
                    </div>
                    <div className="caption-box">
                        <h2>{item.제품명}</h2>
                        <h3>
                            { item.할인율 > 0 ? <strong>${Math.round(item.할인율*100)}%</strong> : `` }
                            <em>{commaDecimal(Math.round(item.정가*(1-item.할인율)))}원</em>
                        </h3>`;
                        { item.할인율 > 0 ?  <h4><s>{commaDecimal(item.정가)}원</s></h4> : `` }
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
