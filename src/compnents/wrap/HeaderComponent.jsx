import React from "react";
import {Link, Outlet, useLocation} from 'react-router-dom';
import $ from "jquery";



export default function HeaderComponent(){

    const [state, setState] = React.useState({
        이름: '',
        isLogin: false
    });


    const getCookie=()=>{



        //  key 키 가져오기
        let key = localStorage.getItem('MJPHPSESSIONID202304');

        // 쿠키가져오기 getCookie
        let cookies = document.cookie;
        cookies = cookies.split(';'); // 쎄미콜론단위 잘라서 배열저장
        cookies = cookies.map((item)=>item.trim().split('='));
        cookies.map((item)=>{  
             
            if( item[0] === key){
                setState({
                    ...state,
                    이름: JSON.parse(item[1]).이름,
                    isLogin: true
                });         
            }            
        });
    }

    React.useEffect(()=>{        
        getCookie();
    },[state.이름]);


    const onClickLogOut=(e)=>{
        e.preventDefault();
        // 로그아웃
        setState({
            ...state,
            이름:'',
            isLogin: false
        });

        //  key 키 가져오기
        let key = localStorage.getItem('MJPHPSESSIONID202304');

        // 쿠키삭제
        let newDate = new Date();
        newDate.setDate(newDate.getDate()-4); // -4일
        document.cookie = `${key}=; path=/; expires=${newDate};`;

        // 로컬 키삭제
        localStorage.removeItem('MJPHPSESSIONID202304');

        // 로그아웃끝
    }   



    const userUrl = useLocation();

    React.useEffect(()=>{

        // console.log( window.location );
        // console.log( window.location.pathname );
        // console.log( userUrl );
        // console.log( userUrl.pathname );
        
        if(userUrl.pathname==="/main1"){
            $('.nav-btn').removeClass('on');
            $('.nav-btn').eq(0).addClass('on');
        }        
        else if(userUrl.pathname==="/main2"){
            $('.nav-btn').removeClass('on');
            $('.nav-btn').eq(1).addClass('on');
        }
        else if(userUrl.pathname==="/main3"){
            $('.nav-btn').removeClass('on');
            $('.nav-btn').eq(2).addClass('on');
        }
        else if(userUrl.pathname==="/main4"){
            $('.nav-btn').removeClass('on');
            $('.nav-btn').eq(3).addClass('on');
        }

    },[window.location.pathname]);



    return(
        <>
            <header id="header">
                <div className="row1">
                    <div className="container">
                        <ul>
                            <li><Link to='/signup'>{state.isLogin?<span onClick={onClickLogOut}>로그아웃</span>:'회원가입'}</Link></li>
                            <li><i>|</i></li>
                            <li><Link to='/signin'>{state.isLogin?state.이름:'로그인'}</Link></li>
                            <li><i>|</i></li>
                            <li className="service-box">
                            <Link to="./notice_select" className="service-center-btn">고객센터<img src="./img/ico_down_16x10.png" alt="" /></Link>
                            <div className="top-tooltip">
                                <ul>
                                    <li><Link to="/notice_select">공지사항</Link></li>
                                    <li><Link to="/자주하는질문">자주하는 질문</Link></li>
                                    <li><Link to="/1:1문의">1:1문의</Link></li>
                                    <li><Link to="/대량주문문의">대량주문 문의</Link></li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row2">
                    <div className="container">
                        <div className="left">
                            <ul>
                            <li>
                                <h1>
                                    <Link to="/intro" title="마켓컬리">
                                        <img src="./img/logo_kurly.svg" alt="" />
                                        <span>마켓컬리</span>   
                                    </Link>
                                </h1>
                            </li>
                            <li>
                                <i>|</i>
                            </li>
                            <li>
                                <span>
                                    <Link to="/뷰티컬리" title="뷰티컬리">뷰티컬리 <img src="./img/n_red.svg" alt="" /></Link>
                                </span>
                            </li>
                            </ul>
                        </div>
                        <div className="center">
                            <form name="search_form" id="searchForm" method="post" action="./search.php">
                            <div className="search-box">
                                <input type="text" name="search" id="search" placeholder="검색어를 입력해주세요" />
                                <a href="!#" className="search-btn" title="search"><img src="./img/search.svg" alt="" /></a>
                            </div>
                            </form>
                        </div>
                        <div className="right">
                            <div className="map-tooltip-box">
                            <a href="!#" title="배송지" className="map-tootip-btn"><img src="./img/map.svg" alt="" /></a>
                            <div className="map-tooltip-memnu">
                                <ul>
                                    <li>
                                        <em>배송지를 등록</em>
                                        <span>구매 가능한 상품을 확인하세요!</span>
                                    </li>
                                    <li>
                                        <button className="login-btn">로그인</button>
                                        <button className="address-search-btn"><img src="./img/search_white.png" alt="" /><span>주소검색</span></button>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div>   
                            <a href="!#" title="찜하기"><img src="./img/heart.svg" alt="" /></a>
                            </div>
                            <div>
                            <a href="!#" title="장바구니"><img src="./img/cart.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>               
                <div className="row3">
                    <div className="container">
                        <div className="left">
                            <a href="!#" title="카테고리">
                            <img src="./img/app_bar.svg" alt="" />
                            <strong>카테고리</strong>
                            </a>
                        </div>
                        <div className="center">
                            <ul>
                            <li className="nav-btn on"><Link to="/main1" title="신상품">신상품</Link></li>
                            <li className="nav-btn"><Link to="/main2" title="베스트">베스트</Link></li>
                            <li className="nav-btn"><Link to="/main3" title="알뜰쇼핑">알뜰쇼핑</Link></li>
                            <li className="nav-btn"><Link to="/main4" title="특가혜택">특가혜택</Link></li>
                            </ul>
                        </div>
                        <div className="right">
                            <span>
                            <a href="!#">
                                <em>샛별<i>·</i>낮</em><strong>배송안내</strong>
                            </a>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet/>
        </>
    )
}