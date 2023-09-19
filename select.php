<?




    // moonjong.dothome.co.kr/week6/select.php

    include_once('./head.php');
    
    // 중복검사 하기 위해서 데이터 가져오기(조회하기)
    // 조회하기(가져오기) : 아이디, 이메일 데이터
    // $sql = "SELECT 필드1, 필드2 FROM 테이블이름";
    $sql = "SELECT user_id, user_mail FROM market_kurly_table_6";
    $result = mysqli_query($conn, $sql);


    // if($result){
    //     print('조회 성공!<br>');
    // }
    // else{
    //     print('조회 실패!<br>');
    // }


    // 조회 데이터는 데이터베이스에서 사용 가능한 현태으로 데이터 이다.
    // 데이터베이스 데이터는 자바스크립트에서 사용할려면 자바스크립트 객체형태의
    // 데이터로 변환사용한다. JSON 데이터 형식 => 속성: 값
    // 반복문으로 배열 객체에 저장한다.
    $arr = array();
    // 한 줄의  데이터를 변수에 저장하고 그리고 객체 속성을 만들어서 한줄 데이터를 저장한다.(push)
    while( $row = mysqli_fetch_array($result) ){
        array_push($arr,  array(
            '아이디' => $row['user_id'],
            '이메일' => $row['user_mail'],
        ));
    };


    // 응답 => 자바스크립트 
    // echo json_encode($arr); // 객체 형식 데이터 => json 인코딩 => json_encode() 이스케이프문자  유니코드
    echo json_encode($arr, JSON_UNESCAPED_UNICODE); // 객체 형식 데이터 => json 인코딩 => json_encode() 언이스케이프문자  유니코드 사용안함

?>