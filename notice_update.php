<?
  
    include_once('./head.php');

    // notice_update.php
    // 보내온 폼데이터 받기
    $idx         = $_POST['idx'];
    $user_id     = $_POST['user_id'];
    $subject     = $_POST['subject'];    
    $contents    = $_POST['contents'];
  
    $sql = "UPDATE notice_table  SET user_id='$user_id', subject='$subject', contents='$contents'   WHERE idx ='$idx'";
    $result = mysqli_query($conn, $sql);

    if($result==true){
        echo  1;
    }
    else{
        echo -1;
    }
   


?>