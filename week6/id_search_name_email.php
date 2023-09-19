<?
    // moonjong.dothome.co.kr/week6/id_search_name_hp.php
    // moonjong.dothome.co.kr/week6/id_search_name_email.php
    include_once('./head.php');
    
    // AXIOS 데이터 받기
    $name = "문종";
    $email = "moonjong123@naver.com";

    // $name = $_POST['이름'];
    // $email = $_POST['이메일'];
    
    $sql = "SELECT * FROM market_kurly_table_6 WHERE user_name='$name'  AND  user_mail='$email'";
    $result = mysqli_query($conn, $sql);


    $arr = array();
    while( $row = mysqli_fetch_array($result) ){
        array_push($arr,  array(
            '아이디' => $row['user_id']           
        ));
    };

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;

?>