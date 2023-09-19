-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 23-03-18 17:30
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
-- 테이블 구조 `kurly_table_6`
--

CREATE TABLE `kurly_table_6` (
  `idx` int NOT NULL COMMENT '자동증가번호',
  `user_id` varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '아이디',
  `user_pw` varchar(16) COLLATE utf8mb4_general_ci NOT NULL COMMENT '비밀번호',
  `user_name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
  `user_mail` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
  `user_hp` varchar(13) COLLATE utf8mb4_general_ci NOT NULL COMMENT '휴대폰',
  `user_addr` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '주소',
  `user_gender` varchar(4) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '성별',
  `user_birth` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '생년월일',
  `user_add_input` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '추가입력사항',
  `user_service` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이용약관동의',
  `gaib_date` varchar(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT '가입일자'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='2023 마켓컬리 회원가입 테이블';

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `kurly_table_6`
--
ALTER TABLE `kurly_table_6`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `kurly_table_6`
--
ALTER TABLE `kurly_table_6`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT COMMENT '자동증가번호';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
