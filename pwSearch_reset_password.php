<?
    include_once('./head.php');

    $user_pw = $_POST['user_pw'];
    $user_id = $_POST['user_id'];
    $user_hp = $_POST['user_hp'];

    $sql = "UPDATE market_kurly_table_6 SET user_pw='$user_pw' WHERE user_id='$user_id' AND user_hp='$user_hp'";
    mysqli_query($conn, $sql);

    $sql = "SELECT * FROM market_kurly_table_6                 WHERE user_id='$user_id' AND user_hp='$user_hp'";
    $result = mysqli_query($conn, $sql);




    // 0보다 크면 검색 완료
    if( mysqli_num_rows($result) > 0 ){
        $row = mysqli_fetch_array($result);
        echo '{"아이디":"'. $row['user_id'] .'", "이름":"'. $row['user_name'] .'", "비밀번호":"'. $row['user_pw'] .'"}';
    }
    else {
        echo "";
    }




?>