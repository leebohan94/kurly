// 2. React에서 Tag를 담아두는 박스-Component-태그(JSX)
function WrapComponent(){ //첫글자 대문자 컴포넌트
    return(
        <div id='wrap'>
            <TopModalComponent />
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
            <IntroModalComponent />
            <QuickMenuComponent />
            <GoTopComponent />
        </div>
    )
}

    // 탑모달 컴포넌트
    function TopModalComponent(){
        return(
            <div id="topModal">
                <div className="container">
                    <h2><a href="!#" title="지금 가입하고 인기상품 100원에 받아가세요!">지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!</a></h2>
                    <a href="!#" title="오늘 하루 안보기" className="top-modal-close"><img src="./img/ico_close_fff_84x84.png" alt="" /></a>
                </div>
            </div>
        )
    }
    // 헤더 컴포넌트
    function HeaderComponent(){
        return(
            <header id="header">
                <div className="row1">
                    <div className="container">
                        <ul>
                            <li><a href="./member/sign_up">회원가입</a></li>
                            <li><i>|</i></li>
                            <li><a href="./member/sign_in">로그인</a></li>
                            <li><i>|</i></li>
                            <li className="service-box">
                            <a href="./member/board/board1" className="service-center-btn">고객센터<img src="./img/ico_down_16x10.png" alt="" /></a>
                            <div className="top-tooltip">
                                <ul>
                                    <li><a href="./member/board/board1">공지사항</a></li>
                                    <li><a href="./member/board/board2">자주하는 질문</a></li>
                                    <li><a href="./member/board/board3">1:1문의</a></li>
                                    <li><a href="./member/board/board4">대량주문 문의</a></li>
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
                                    <a href="./" title="마켓컬리">
                                        <img src="./img/logo_kurly.svg" alt="" />
                                        <span>마켓컬리</span>   
                                    </a>
                                </h1>
                            </li>
                            <li>
                                <i>|</i>
                            </li>
                            <li>
                                <span>
                                    <a href="!#" title="뷰티컬리">뷰티컬리 <img src="./img/n_red.svg" alt="" /></a>
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
                            <li><a href="./sub1/" className="main-btn on" title="신상품">신상품</a></li>
                            <li><a href="./sub2/" className="main-btn" title="베스트">베스트</a></li>
                            <li><a href="./sub3/" className="main-btn" title="알뜰쇼핑">알뜰쇼핑</a></li>
                            <li><a href="./sub4/" className="main-btn" title="특가혜택">특가혜택</a></li>
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
        )
    }
    // 메인 컴포넌트
    function MainComponent(){
        return(
            <main id="main">
                <section id="section1">
                    <div className="slide-container">

                        <div className="slide-view">
                            <ul className="slide-wrap">                                    
                            
                            <li className="slide slide20"><a href="!#"><img src="./img/main_slide20.jpg" alt=""/></a></li>
                            <li className="slide slide01"><a href="!#"><img src="./img/main_slide01.jpg" alt=""/></a></li>
                            <li className="slide slide02"><a href="!#"><img src="./img/main_slide02.jpg" alt=""/></a></li>
                            <li className="slide slide03"><a href="!#"><img src="./img/main_slide03.jpg" alt=""/></a></li>
                            <li className="slide slide04"><a href="!#"><img src="./img/main_slide04.jpg" alt=""/></a></li>
                            <li className="slide slide05"><a href="!#"><img src="./img/main_slide05.jpg" alt=""/></a></li>
                            <li className="slide slide06"><a href="!#"><img src="./img/main_slide06.jpg" alt=""/></a></li>
                            <li className="slide slide07"><a href="!#"><img src="./img/main_slide07.jpg" alt=""/></a></li>
                            <li className="slide slide08"><a href="!#"><img src="./img/main_slide08.jpg" alt=""/></a></li>
                            <li className="slide slide09"><a href="!#"><img src="./img/main_slide09.jpg" alt=""/></a></li>
                            <li className="slide slide10"><a href="!#"><img src="./img/main_slide10.jpg" alt=""/></a></li>
                            <li className="slide slide11"><a href="!#"><img src="./img/main_slide11.jpg" alt=""/></a></li>
                            <li className="slide slide12"><a href="!#"><img src="./img/main_slide12.jpg" alt=""/></a></li>
                            <li className="slide slide13"><a href="!#"><img src="./img/main_slide13.jpg" alt=""/></a></li>
                            <li className="slide slide14"><a href="!#"><img src="./img/main_slide14.jpg" alt=""/></a></li>
                            <li className="slide slide15"><a href="!#"><img src="./img/main_slide15.jpg" alt=""/></a></li>
                            <li className="slide slide16"><a href="!#"><img src="./img/main_slide16.jpg" alt=""/></a></li>
                            <li className="slide slide17"><a href="!#"><img src="./img/main_slide17.jpg" alt=""/></a></li>
                            <li className="slide slide18"><a href="!#"><img src="./img/main_slide18.jpg" alt=""/></a></li>
                            <li className="slide slide19"><a href="!#"><img src="./img/main_slide19.jpg" alt=""/></a></li>
                            <li className="slide slide20"><a href="!#"><img src="./img/main_slide20.jpg" alt=""/></a></li>
                            <li className="slide slide01"><a href="!#"><img src="./img/main_slide01.jpg" alt=""/></a></li>
                            </ul>
                        </div>

                        <span className="arrow arrow-left-box"><a href="!#" className="arrow-left-btn" title="slide preview"><i></i></a></span>
                        <span className="arrow arrow-right-box"><a href="!#" className="arrow-right-btn" title="slide next"><i></i></a></span>

                        <span className="page-box">
                            <em className="current-page">1</em> <i>/</i> <em className="total-page">20</em> 
                        </span>

                    </div>
                </section>
                <section id="section2" className="section-slide-public">
                    <div className="title"><h2>이 상품 어때요?</h2></div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><em>48,000원</em></h3>                           
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>

                        <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                        <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                    </div>
                </section>
                <section id="section3">
                    <div className="container">
                        <a href="!#">
                            <img src="./img/897aaf8b-4217-4ed1-868e-2920372e6e95.jpg" alt=""/>
                        </a>
                    </div>
                </section>
                <section id="section4" className="section-slide-public">
                    <div className="title"><h2>이 상품 어때요?</h2></div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><em>48,000원</em></h3>                           
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>

                        <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                        <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                    </div>
                </section>      
                <section id="section5">
                    <div className="container">
                        <a href="!#">
                            <img src="./img/16d8e884-ffe7-4089-ae7d-8d2e9197af63.jpg" alt=""/>
                        </a>
                    </div>
                </section>
                <section id="section6" className="section-slide-public">
                    <div className="title"><h2>이 상품 어때요?</h2></div>
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><em>48,000원</em></h3>                           
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide1">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/152895850366l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide2">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657616036799l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide3">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1658112947680l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            <li className="slide slide4">
                                <div className="gap">
                                    <div className="img-box">
                                        <a href="!#">
                                        <img src="./img/1657692098340l0.jpg" alt=""/>
                                        <span><img src="./img/cart_fill.svg" alt=""/></span>
                                        </a>
                                    </div>
                                    <div className="caption-box">
                                        <h2>[1등급 한우] 채끝 스테이크 300g (냉장)</h2>
                                        <h3><strong>25%</strong><em>36,000원</em></h3>
                                        <h4><s>48,000</s></h4>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>

                        <a href="!#" className="arrow-btn  arrow-right"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                        <a href="!#" className="arrow-btn  arrow-left"><img src="./img/arrow_fill_white_btn.svg" alt=""/></a>
                    </div>
                </section>      
            </main>
        )
    }
    // 푸터 컴포넌트
    function FooterComponent(){
        return(
            <footer id="footer">
                <div className="row row1">
                    <div className="container">
                        <div className="row1-1">
                            <div className="left">
                            <ul>
                                <li><h1>고객행복센터</h1></li>
                                <li><h2><a href="tel:1644-1107">1644-1107</a><span>월~토요일 오전 7시 - 오후 6시</span></h2></li>
                                <li>
                                    <ul>
                                        <li>
                                        <a href="!#" title="카카오톡 문의">카카오톡 문의</a>
                                        <div>
                                            <p>월~토요일 | 오전 7시 오후 6시</p>
                                            <p>요/굥휴일 | 오전 7시 오후 6시</p>
                                        </div>
                                        </li>
                                        <li>
                                        <a href="!#" title="1:1 문의">1:1 문의</a>
                                        <div>
                                            <p>365일</p>
                                            <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                                        </div>
                                        </li>
                                        <li>
                                        <a href="!#" title="대량주문 문의">대량주문 문의</a>
                                        <div>
                                            <p>월~금요일</p>
                                            <p>오전 9시 - 오후 6시</p>
                                        </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    비회원문의: <a href="mailto:help@kurlycorp.com">help@kurlycorp.com</a><br/>
                                    비회원 대량주문 문의: <a href="mailto:kurlygift@kurlycorp.com">kurlygift@kurlycorp.com</a>
                                </li>
                            </ul>
                            </div>
                            <div className="right">
                            <ul>
                                <li>
                                    <a href="!#">컬리소개</a>
                                    <a href="!#">컬리소개영상</a>
                                    <a href="!#">인재채용</a>
                                    <a href="!#">이용약관</a>
                                    <a href="!#">개인정보처리방침</a>
                                    <a href="!#">이용안내</a>
                                </li>
                                <li>
                                    <address>
                                        법인명 (상호) : 주식회사 컬리 <i>|</i> 사업자등록번호 : 261-81-23567 <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no=">사업자정보 확인</a><br/>
                                        통신판매업 : 제 2018-서울강남-01646 호 <i>|</i> 개인정보보호책임자 : 이원준<br/>
                                        주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) <i>|</i> 대표이사 : 김슬아<br/>
                                        입점문의 : <a href="mailto:moonseonjong@naver.com">입점문의하기</a> <i>|</i> 제휴문의 : <a href="mailto:business@kurlycorp.com">business@kurlycorp.com</a><br/>
                                        채용문의 : <a href="recruit@kurlycorp.com">recruit@kurlycorp.com</a><br/>
                                        팩스: 070 - 7500 - 6098
                                    </address>
                                </li>
                                <li>
                                    <a href="!#" title="instagram."><img src="./img/ico_instagram.png" alt=""/></a>
                                    <a href="!#" title="facebook"><img src="./img/ico_fb.png" alt=""/></a>
                                    <a href="!#" title="naverpost"><img src="./img/ico_naverpost.png" alt=""/></a>
                                    <a href="!#" title="blog"><img src="./img/ico_blog.png" alt=""/></a>
                                    <a href="!#" title="youtube"><img src="./img/ico_youtube.png" alt=""/></a>                       
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="row1-2">
                            <a href="!#" title="isms">
                            <img src="./img/logo_isms.svg" alt=""/>
                            <span>
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                                (심사받지 않은 물리적 인프라 제외)<br/>
                                [유효기간] 2022.01.19 ~ 2025.01.18
                            </span>
                            </a>
                            <a href="!#"  title="privacy">
                            <img src="./img/logo_privacy.svg" alt=""/>
                            <span>
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                                (심사받지 않은 물리적 인프라 제외)<br/>
                                [유효기간] 2022.01.19 ~ 2025.01.18
                            </span>
                            </a>
                            <a href="!#" title="tosspayments">
                            <img src="./img/logo_tosspayments.svg" alt=""/>
                            <span>
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                                (심사받지 않은 물리적 인프라 제외)<br/>
                                [유효기간] 2022.01.19 ~ 2025.01.18
                            </span>
                            </a>
                            <a href="!#" title="wooriBank">
                            <img src="./img/logo_wooriBank.svg" alt=""/>
                            <span>
                                [인증범위] 컬리 쇼핑몰 서비스 개발·운영<br/>
                                (심사받지 않은 물리적 인프라 제외)<br/>
                                [유효기간] 2022.01.19 ~ 2025.01.18
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row row2">
                    <div className="container">
                            <div>
                            컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
                            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
                            </div>
                            <p>
                            © KURLY CORP. ALL RIGHTS RESERVED
                            </p>
                    </div>
                </div>
            </footer>
        )
    }

    // 인트로 모달 컴포넌트
    function IntroModalComponent(){
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

    // 퀵메뉴 컴포넌트
    function QuickMenuComponent(){
        return(
            <div id="quickMenu">
                <ul>
                    <li><a href="#"><img src="./img/deliveryInfo.webp" alt=""/></a></li>
                    <li><a href="#">등급별혜택</a></li>
                    <li><a href="#">레시피</a></li>
                </ul>
            </div>
        )
    }

    // GoTop 컴포넌트
    function GoTopComponent(){
        return(
            <div id="goTop">
                <a href="!#" className='gotop-btn'><img src="./img/gotop.png" alt=""/></a>
            </div>
        )
    }


// 1. 리액트컴포넌트 + 리액트프로그램과 리액트돔 그리고 돔컨테이너 연동
ReactDOM.render(
    <WrapComponent />,  //가상태그 :  컴포넌트
    document.getElementById('root')
);