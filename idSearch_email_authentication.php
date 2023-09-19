<?
    include_once('./head.php');

    $name = $_POST['user_name'];
    $user_email   = $_POST['user_email'];

    $sql = "SELECT * FROM market_kurly_table_6  WHERE user_name='$name' AND user_mail='$user_email'";
    $result = mysqli_query($conn, $sql);


    // 0보다 크면 검색 완료
    if( mysqli_num_rows($result) > 0 ){
        $row = mysqli_fetch_array($result);
        echo '{"아이디":"'. $row['user_id'] .'", "가입일":"'. $row['gaib_date'] .'"}';
    }
    else {
        echo "";
    }


   

?>