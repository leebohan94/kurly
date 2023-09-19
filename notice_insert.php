<?
  
    include_once('./head.php');

    // 보내온 폼데이터 받기
    $user_id     = $_POST['user_id'];
    $subject     = $_POST['subject'];    
    $contents    = $_POST['contents'];
  
    $sql = "INSERT INTO notice_table(user_id, subject, contents) 
     VALUES ('$user_id','$subject','$contents')";
    $result = mysqli_query($conn, $sql);

    if($result){
        echo  1;
    }
    else{
        echo -1;
    }


?>