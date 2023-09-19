<?
  
    include_once('./head.php');


    // moonjong.dothome.co.kr/week6/insert.php
    // moonjong.dothome.co.kr/week_kurly_cra6/insert.php
    // moonjong.dothome.co.kr/myadmin/

    // 더미데이터 데이터베이스 테이블(kurly_table_6)에 삽입하기 : 5명 
    // SLQ 명령문 삽입 INSERT INTO 테이블이름(필드1, 필드2,...) VALUES(필드값1, 필드값2,...);
    $sql = "INSERT INTO market_kurly_table_6(user_id, user_pw, user_name, user_mail, user_hp, user_addr, user_gender, user_birth, user_add_input, user_service, gaib_date) 
     VALUES
     ('moonjong1','moonjong123','김유신','moonseonjong1@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19'),
     ('moonjong2','moonjong123','이순신','moonseonjong2@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19'),
     ('moonjong3','moonjong123','김봉기','moonseonjong3@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19'),
     ('moonjong4','moonjong123','이혁제','moonseonjong4@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19'),
     ('moonjong5','moonjong123','안중근','moonseonjong5@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19'),
     ('moonjong6','moonjong123','이소라','moonseonjong6@naver.com','010-7942-5305','서울시 강남구 역삼동 강남빌딩 1303호','남성','1970-09-10','추가입력사항, 마켓컬리 세일이벤트','이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)','2023-03-19')";
    $result = mysqli_query($conn, $sql);

    if($result){
        echo "데이터 삽입 성공!";
    }
    else{
        echo "데이터 삽입 실패!";
    }


?>