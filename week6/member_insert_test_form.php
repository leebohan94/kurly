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
    $user_id        = $_POST['user_id'];
    $user_pw        = $_POST['user_pw'];
    $user_name      = $_POST['user_name'];
    
    echo "아이디 : ". $user_id;
    echo "비밀번호 : ". $user_pw;
    echo "이름 : ". $user_name;


?>