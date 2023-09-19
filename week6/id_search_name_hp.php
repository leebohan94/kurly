<?
    // moonjong.dothome.co.kr/week6/id_search_name_hp.php
    include_once('./head.php');
    
    // AXIOS 데이터 받기
    $name = "이소라";
    $hp = "010-7942-7802";
    
    $sql = "SELECT * FROM market_kurly_table_6 WHERE user_name='$name'  AND  user_hp='$hp'";
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