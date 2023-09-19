import React from "react";
import Main4ChildComponent from "./main_child/Main4ChildComponent";
import axios from "axios";

export default function Main4Component(){
    

    // 1. 상태관리
    const [state, setState] = React.useState({
            특가혜택: []
    });


    // 2. AXIOS => 데이터 가져와서 상태변경
    React.useEffect(()=>{
        axios({
            url:'./data/product.json',
            method:'GET'
        })
        .then((res)=>{

            setState({
                ...state,
                특가혜택: res.data.특가혜택
            })  

        })
        .catch((err)=>{
            console.log('AXIOS 실패!',err);
        });
    },[state.특가혜택]);


    return(
        <main id="main" className="sub1">
            <section id="section1">
                <div className="container">
                    <div className="title hide">
                        <h2>이주의 신상랭킹</h2>
                    </div>
                    <div className="content">
                        <a href="!#"><img src="./img/main1/glVdP62yrvcvvzpsseGCDLUS3ErqbgPx8i8UGozE.png" alt="" /></a>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="title">
                        <h2>특가혜택</h2>
                    </div>    
                    <div className="content">
                        <div className="left">
                        <div className="left-head">
                            <span>필터</span>
                            <span><svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path><path d="M14.4933 1L14.4933 4.52H10.9733" stroke="#ddd" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="round"></path></svg>초기화</span>
                        </div>
                        <ul>
                            <li>
                                <a href="!#" className='category-btn' title='카테고리'><span>카테고리</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                <div className="sub sub1">
                                    <ul>
                                        <li><label htmlFor="sub1ChkBtn01"><input type="checkbox" id='sub1ChkBtn01' name='sub1_chk_btn_01' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                        <li><label htmlFor="sub1ChkBtn02"><input type="checkbox" id='sub1ChkBtn02' name='sub1_chk_btn_02' value='과일·견과·쌀'/>국·반찬·메인요리</label></li>
                                        <li><label htmlFor="sub1ChkBtn03"><input type="checkbox" id='sub1ChkBtn03' name='sub1_chk_btn_03' value='과일·견과·쌀'/>샐러드·간편식</label></li>
                                        <li><label htmlFor="sub1ChkBtn04"><input type="checkbox" id='sub1ChkBtn04' name='sub1_chk_btn_04' value='과일·견과·쌀'/>간식·과자·떡</label></li>
                                        <li><label htmlFor="sub1ChkBtn05"><input type="checkbox" id='sub1ChkBtn05' name='sub1_chk_btn_05' value='과일·견과·쌀'/>면·양념·오일</label></li>
                                        <li><label htmlFor="sub1ChkBtn06"><input type="checkbox" id='sub1ChkBtn06' name='sub1_chk_btn_06' value='과일·견과·쌀'/>수산·해산·건어물</label></li>
                                        <li><label htmlFor="sub1ChkBtn07"><input type="checkbox" id='sub1ChkBtn07' name='sub1_chk_btn_07' value='과일·견과·쌀'/>생활용품·리빙·캠핑</label></li>
                                        <li><label htmlFor="sub1ChkBtn08"><input type="checkbox" id='sub1ChkBtn08' name='sub1_chk_btn_08' value='과일·견과·쌀'/>생수·음료·우유·커피</label></li>
                                        <li><label htmlFor="sub1ChkBtn09"><input type="checkbox" id='sub1ChkBtn09' name='sub1_chk_btn_09' value='과일·견과·쌀'/>정육·계란</label></li>
                                        <li><label htmlFor="sub1ChkBtn10"><input type="checkbox" id='sub1ChkBtn10' name='sub1_chk_btn_10' value='과일·견과·쌀'/>채소</label></li>                              
                                    </ul> 
                                    
                                    <a href="!#" className='category-more-btn'>카테고리더보기 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                </div>
                                
                            </li>
                            <li>
                                <a href="!#" className='category-btn'><span>브랜드</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                <div className="sub sub2">
                                    <ul>
                                    <li><label htmlFor="sub2ChkBtn01"><input type="checkbox" id='sub2ChkBtn01' name='sub2_chk_btn_01' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn02"><input type="checkbox" id='sub2ChkBtn02' name='sub2_chk_btn_02' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn03"><input type="checkbox" id='sub2ChkBtn03' name='sub2_chk_btn_03' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn04"><input type="checkbox" id='sub2ChkBtn04' name='sub2_chk_btn_04' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn05"><input type="checkbox" id='sub2ChkBtn05' name='sub2_chk_btn_05' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn06"><input type="checkbox" id='sub2ChkBtn06' name='sub2_chk_btn_06' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn07"><input type="checkbox" id='sub2ChkBtn07' name='sub2_chk_btn_07' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn08"><input type="checkbox" id='sub2ChkBtn08' name='sub2_chk_btn_08' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn09"><input type="checkbox" id='sub2ChkBtn09' name='sub2_chk_btn_09' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub2ChkBtn10"><input type="checkbox" id='sub2ChkBtn10' name='sub2_chk_btn_10' value='과일·견과·쌀'/>과일·견과·쌀</label></li>                              
                                    </ul>                           
                                    <a href="!#" className='category-more-btn'>카테고리더보기 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                </div>
                                
                            </li>
                            <li>
                                <a href="!#" className='category-btn'><span>가격</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                <div className="sub sub3">
                                    <ul>
                                    <li><label htmlFor="sub3ChkBtn01"><input type="checkbox" id='sub3ChkBtn01' name='sub3_chk_btn_01' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub3ChkBtn02"><input type="checkbox" id='sub3ChkBtn02' name='sub3_chk_btn_02' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub3ChkBtn03"><input type="checkbox" id='sub3ChkBtn03' name='sub3_chk_btn_03' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub3ChkBtn04"><input type="checkbox" id='sub3ChkBtn04' name='sub3_chk_btn_04' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    </ul>                           
                                </div>

                            </li>
                            <li>
                                <a href="!#" className='category-btn'><span>혜택</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                <div className="sub sub4">
                                    <ul>
                                    <li><label htmlFor="sub4ChkBtn01"><input type="checkbox" id='sub4ChkBtn01' name='sub4_chk_btn_01' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    <li><label htmlFor="sub4ChkBtn02"><input type="checkbox" id='sub4ChkBtn02' name='sub4_chk_btn_02' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    </ul>                           
                                </div>

                            </li>
                            <li>
                                <a href="!#" className='category-btn'><span>유형</span> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#999" xmlns="http://www.w3.org/2000/svg" className="css-innaj4 e1frj59j6"><path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path></svg></a>
                                <div className="sub sub5">
                                    <ul>
                                        <li><label htmlFor="sub5ChkBtn01"><input type="checkbox" id='sub5ChkBtn01' name='sub5_chk_btn_01' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                        <li><label htmlFor="sub5ChkBtn02"><input type="checkbox" id='sub5ChkBtn02' name='sub5_chk_btn_02' value='과일·견과·쌀'/>과일·견과·쌀</label></li>
                                    </ul>                           
                                </div>

                            </li>
                        </ul>
                        </div>
                        <div className="right">
                        <div className="right-head">
                            <span>총 123건</span>
                            <span>
                                <a href="!#" className='order-btn'>추천순</a>
                                <a href="!#" className='order-btn on'>특가혜택순</a>
                                <a href="!#" className='order-btn'>판마량순</a>
                                <a href="!#" className='order-btn'>혜택순</a>
                                <a href="!#" className='order-btn'>낮은가격순</a>
                                <a href="!#" className='order-btn'>높은가격순</a>
                            </span>   
                        </div>
                        

                         <Main4ChildComponent 특가혜택={state.특가혜택} />   


                        </div>
                    </div>    
                </div>
            </section>
        </main>
    )
}