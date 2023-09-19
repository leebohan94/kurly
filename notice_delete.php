<?

    include_once('./head.php');

    $idx        = $_POST['idx']; 


    // $sql = "DELETE FROM notice_table WHERE available=0 AND idx ='$idx'";
    $sql = "UPDATE notice_table  SET available=1  WHERE idx ='$idx'";
    $result = mysqli_query($conn, $sql);

    if($result==true){
        echo  1;
    }
    else{
        echo -1;
    }
   

?>