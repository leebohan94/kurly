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
    
?>