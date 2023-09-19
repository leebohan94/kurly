<?
    include_once('./head.php');

    // moonjong.dothome.co.kr/week6/create_table.php

    // 테이블 만들기
    // $sql = "CREATE TABEL 테이블이름(
    //     속성이름(필드이름)   자료형  빈값허용여부,
    //     속성이름(필드이름)   자료형  빈값허용여부,
    //     속성이름(필드이름)   자료형  빈값허용여부,
    //     속성이름(필드이름)   자료형  빈값허용여부
    // )";

    // 테이블 만들기
    // $sql = "CREATE TABLE table_2 (
    //     idx int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     user_id varchar(16) NOT NULL,
    //     user_pw varchar(16)  NOT NULL,
    //     user_name varchar(100)  NOT NULL,
    //     user_mail varchar(250)  NOT NULL,
    //     user_hp varchar(13) NOT NULL,
    //     user_addr varchar(250) NOT NULL,
    //     user_gender varchar(4) NULL,
    //     user_birth varchar(10) NULL,
    //     user_add_input varchar(100) NULL,
    //     user_service varchar(250) NOT NULL,
    //     gaib_date varchar(10) NOT NULL
    // )";

    $sql = "CREATE TABLE market_kurly_table_6 (
        idx int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        user_id varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
        user_pw varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
        user_name varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
        user_mail varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
        user_hp varchar(13) COLLATE utf8mb4_general_ci NOT NULL COMMENT '휴대폰',
        user_addr varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소',
        user_gender varchar(4) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '성별',
        user_birth varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생년월일',
        user_add_input varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추가입력사항',
        user_service varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이용약관동의',
        gaib_date varchar(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT '가입일자'
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='2023 마켓컬리 회원가입 테이블'";
   
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo('테이블생성 실패!');
    }
    else{
        echo('테이블생성 성공!');
    }


?>