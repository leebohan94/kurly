<?
    // moonjong.dothome.co.kr/week6/notice_select.php
    include_once('./head.php');

    $sql = "SELECT * FROM notice_table WHERE available=0 ORDER BY wdate DESC";
    $result = mysqli_query($conn, $sql);

    $arr = array();
    while( $row = mysqli_fetch_array($result) ){
        array_push($arr,  array(
            '글번호' => $row['idx'],
            '아이디' => $row['user_id'],
            '제목' => $row['subject'],
            '내용' => $row['contents'],
            '작성자' => $row['writer'],
            '작성일' => $row['wdate']
        ));
    };

    echo json_encode($arr, JSON_UNESCAPED_UNICODE);

?>