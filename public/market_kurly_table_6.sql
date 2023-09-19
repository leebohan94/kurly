-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 23-03-26 14:44
-- 서버 버전: 8.0.32
-- PHP 버전: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `moonjong`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `market_kurly_table_6`
--

CREATE TABLE `market_kurly_table_6` (
  `idx` int NOT NULL,
  `user_id` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
  `user_pw` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
  `user_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
  `user_mail` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
  `user_hp` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '휴대폰',
  `user_addr` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소',
  `user_gender` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '성별',
  `user_birth` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생년월일',
  `user_add_input` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추가입력사항',
  `user_service` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '이용약관동의',
  `gaib_date` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '가입일자'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='2023 마켓컬리 회원가입 테이블';

--
-- 테이블의 덤프 데이터 `market_kurly_table_6`
--

INSERT INTO `market_kurly_table_6` (`idx`, `user_id`, `user_pw`, `user_name`, `user_mail`, `user_hp`, `user_addr`, `user_gender`, `user_birth`, `user_add_input`, `user_service`, `gaib_date`) VALUES
(1, 'moonjong1', 'moonjong123', '김유신', 'moonseonjong1@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(2, 'moonjong2', 'moonjong123', '이순신', 'moonseonjong2@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(3, 'moonjong3', 'moonjong123', '김봉기', 'moonseonjong3@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(4, 'moonjong4', 'moonjong123', '이혁제', 'moonseonjong4@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(5, 'moonjong5', 'moonjong123', '안중근', 'moonseonjong5@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(6, 'moonjong6', 'moonjong123', '이소라', 'moonseonjong6@naver.com', '010-7942-5305', '서울시 강남구 역삼동 강남빌딩 1303호', '남성', '1970-09-10', '추가입력사항, 마켓컬리 세일이벤트', '이용약관 동의(필수),개인정보 수집∙이용 동의(필수),본인은 만 14세 이상입니다.(필수)', '2023-03-19'),
(30, '', '', '', '', '', '', '', '', '', '', ''),
(29, '', '', '', '', '', '', '', '', '', '', ''),
(28, '', '', '', '', '', '', '', '', '', '', ''),
(27, '', '', '', '', '', '', '', '', '', '', ''),
(26, '', '', '', '', '', '', '', '', '', '', ''),
(25, '', '', '', '', '', '', '', '', '', '', ''),
(24, '', '', '', '', '', '', '', '', '', '', ''),
(23, '', '', '', '', '', '', '', '', '', '', ''),
(22, '', '', '', '', '', '', '', '', '', '', ''),
(21, '', '', '', '', '', '', '', '', '', '', ''),
(20, '', '', '', '', '', '', '', '', '', '', '');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `market_kurly_table_6`
--
ALTER TABLE `market_kurly_table_6`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `market_kurly_table_6`
--
ALTER TABLE `market_kurly_table_6`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
