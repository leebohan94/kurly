<?
  
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');


    // 데이터베이스 접속권한
    $db_server    = 'localhost';
    $db_user_name = 'moonjong';
    $db_user_pw   = 'anstjswhd0105#';
    $db_name      = 'moonjong';
    // 데이터베이스 접속(Connect)
    $conn = mysqli_connect($db_server, $db_user_name, $db_user_pw, $db_name);
    mysqli_set_charset($conn, 'utf8');
    
    // http://moonjong.dothome.co.kr/week6/member_insert_test.php
    // http://moonjong.dothome.co.kr/week6/member_insert.php

    // 보내온 폼데이터 받기
    $user_id        = "moonjong";
    $user_pw        = "moonjong123";
    $user_name      = "문종";
    $user_email     = "moonjong123@naver.com";
    $user_hp        = "010-7942-5305";
    $user_address   = "서울시 강남구 논현동 논현빌딩 1303호";
    $user_gender    = "남성";
    $user_birth     = "1990-10-10";
    $user_add_input = "추천인 아이디 moonjong";
    $user_service   = "이용약관 동의(필수), 개인정보 수집∙이용 동의(필수)";
    $user_gaib_date = "2023-03-26";
                                            //  user_id, user_pw, user_name, user_mail, user_hp, user_addr, user_gender, user_birth, user_add_input, user_service, gaib_date
    $sql = "INSERT INTO market_kurly_table_6(user_id, user_pw, user_name, user_mail, user_hp, user_addr, user_gender, user_birth, user_add_input, user_service, gaib_date)
            VALUES('$user_id','$user_pw','$user_name','$user_email','$user_hp','$user_address','$user_gender','$user_birth','$user_add_input', '$user_service','$user_gaib_date')";
    $result = mysqli_query($conn, $sql);

    if($result){
        echo "데이터 삽입 성공!";
    }
    else{
        echo "데이터 삽입 실패!";
    }


?>