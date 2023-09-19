<?
  
    include_once('./head.php');

    // 보내온 폼데이터 받기
    $user_id        = $_POST['user_id'];     
    $user_pw        = $_POST['user_pw'];
    $user_name      = $_POST['user_name'];
    $user_email     = $_POST['user_email'];
    $user_hp        = $_POST['user_hp'];
    $user_address   = $_POST['user_address'];
    $user_gender    = $_POST['user_gender'];
    $user_birth     = $_POST['user_birth'];
    $user_add_input = $_POST['user_add_input'];
    $user_service   = $_POST['user_service'];
    $user_gaib_date = $_POST['user_gaib_date'];


    $sql = "INSERT INTO market_kurly_table_6(user_id, user_pw, user_name, user_mail, user_hp, user_addr, user_gender, user_birth, user_add_input, user_service, gaib_date) 
     VALUES 
     ('$user_id','$user_pw','$user_name','$user_email','$user_hp','$user_address','$user_gender','$user_birth','$user_add_input', '$user_service','$user_gaib_date')";
    $result = mysqli_query($conn, $sql);

    if($result){
        echo "데이터 삽입 성공!";
    }
    else{
        echo "데이터 삽입 실패!";
    }


?>