import React from 'react';
import {Link} from 'react-router-dom';

export default function NoticeLeftComponent() {
    return (
        <div className="left">
            <h1>고객센터</h1>
            <ul>
                <li><Link to="/notice_select" className='on'>공지사항</Link></li>
                <li><a href="!#">주주하는질문</a></li>
                <li><a href="!#">1:1문의</a></li>
                <li><a href="!#">대량주문문의</a></li>
            </ul>
            <div>
                <a href="!#">
                    <strong>도움의 필요하신가요?</strong>
                    <em>1:1문의하기</em>
                </a>
            </div>
        </div>
    );
};