<?
    include_once('./head.php');

    $user_id = $_POST['user_id'];
    $user_email   = $_POST['user_email'];

    $sql = "SELECT * FROM market_kurly_table_6  WHERE user_id='$user_id' AND user_mail='$user_email'";
    $result = mysqli_query($conn, $sql);


 

    // 0보다 크면 검색 완료
    if( mysqli_num_rows($result) > 0 ){
        $row = mysqli_fetch_array($result);
        echo '{"아이디":"'. $row['user_id'] .'", "휴대폰":"'. $row['user_hp'] .'"}';
    }
    else {
        echo "";
    }



?>