import React from "react";


export default function MainComponent(){


    // 스크립트 생성 함수
    const scriptCreateElement=(src)=>{
        // 1. 스크립트 태그 만들기(생성)
        const scriptElement = document.createElement('script');
        // 2. 스크립트 태그에 속성(Attribute 어트리뷰트) 설정하기 type속성 text/babel 값을 설정
        // scriptElement.setAttribute('type', 'text/babel');
        scriptElement.setAttribute('id', 'script');
        scriptElement.setAttribute('src', src);
        // 3. 생성된 스크립트 태그요소를 본문 body 에 붙인다.
        document.body.appendChild(scriptElement);
    }

    // 리액트 훅 : 요소생성하고 동적으로 동작   
    React.useEffect(()=>{

        scriptCreateElement('./js/intro_main.js');  // 인트로 메인생성
      
    },[]);

    // 생성된 요소를 제거한다.
    React.useEffect(()=>{
        // 부모요소에서 반드시 삭제한다.
        let parentElement = document.getElementById('script').parentElement;
        // 삭제할 자식을 선택한다.
        let childElemnet = document.getElementById('script');

        // 부모가 자식요소를 선택하여 삭제한다.
        parentElement.removeChild( childElemnet );
    },[]);




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