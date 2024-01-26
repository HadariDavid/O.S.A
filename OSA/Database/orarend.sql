-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 15. 22:05
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `orarend`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `2/14c`
--

CREATE TABLE `2/14c` (
  `Nap` varchar(255) NOT NULL,
  `Csongetesirend` varchar(255) NOT NULL,
  `Ora` varchar(255) NOT NULL,
  `Tanar` text NOT NULL,
  `Terem` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `2/14c`
--

INSERT INTO `2/14c` (`Nap`, `Csongetesirend`, `Ora`, `Tanar`, `Terem`) VALUES
('Hétfő', '7:00 - 7:40 ; 7:45 - 8:30 ; 8:40 - 9:25 ; 9:40 - 10:25 ; 10:35 - 11:20 ; 11:30 - 12:15 ; 12:25 - 13:10 ; 13:15 - 14:00 ; 14:15 - 14:55 ; 15:00 - 15:40', ' ! ; Asztmobigyak ; Asztmobigyak ; Asztmobigyak ; Szaang ; Szofegy ; Frontgy ; Frontgy ; ! ; !', ' ! ; NAS ; NAS ; NAS ; PEL ; NAS ; BBK ; BBK ; ! ; !', ' ! ; SE1 ; SE1 ; SE1; F12 ; SE1 ; SE1 ; SE1 ; ! ; !');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
