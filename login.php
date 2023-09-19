<?
    include_once('./head.php');

    $user_id = $_POST['user_id'];
    $user_pw = $_POST['user_pw'];

    $sql = "SELECT * FROM market_kurly_table_6  WHERE user_id='$user_id' AND user_pw='$user_pw'";
    $result = mysqli_query($conn, $sql);


    // 아이디 비밀번호 맞다면
    // 로그인 가능
    // 세션생성한다 => 세션토큰 인증키
    session_start(); // 세션시작(로그인시작)
    $session_id = session_id(); //인증키(암호화된 토큰키발급)

    // setcookie('PHPSESSIONID', $session_id,time()+(60*60*24*7),"/");



    // 0보다 크면 검색 완료
    if( mysqli_num_rows($result) > 0 ){
        $row = mysqli_fetch_array($result);
        echo '{"아이디":"'. $row['user_id'] .'", "세션아이디":"'. $session_id .'","이름":"'. $row['user_name'] .'"}';
    }
    else {
        echo "";
    }




?>