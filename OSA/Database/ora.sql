-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Már 27. 09:28
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
-- Adatbázis: `osaadatbazis2.0`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ora`
--

CREATE TABLE `ora` (
  `osztaly` varchar(11) NOT NULL,
  `nap` text NOT NULL,
  `1ora` varchar(50) NOT NULL,
  `2ora` varchar(50) NOT NULL,
  `3ora` varchar(50) NOT NULL,
  `4ora` varchar(50) NOT NULL,
  `5ora` varchar(50) NOT NULL,
  `6ora` varchar(50) NOT NULL,
  `7ora` varchar(50) NOT NULL,
  `8ora` varchar(50) NOT NULL,
  `9ora` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `ora`
--

INSERT INTO `ora` (`osztaly`, `nap`, `1ora`, `2ora`, `3ora`, `4ora`, `5ora`, `6ora`, `7ora`, `8ora`, `9ora`) VALUES
('2/14c', 'Hétfő', 'Asztmobigyak', 'Asztmobigyak', 'Asztmobigyak', 'Szaang', 'Szofegy', 'Frontgy', 'Frontgy', '', ''),
('2/14c', 'Kedd', 'IKTproj2gy', 'IKTproj2gy', 'Asztmobilalk', 'Adbk2gy', 'Backend', 'Frontend', 'Backendgy', '', ''),
('2/14c', 'Szerda', 'Backendgy', 'Backendgy', 'Frontgy', 'Frontgy', 'Hittan', 'Backend', 'Asztmobilalk', '', ''),
('2/14c', 'Csütörtök', 'IKTproj2gy', 'Ofői', 'Asztmobigyak', 'Asztmobigyak', 'Frontend', 'Szaang', 'Muidny', '', ''),
('2/14c', 'Péntek', 'IKTproj2gy', 'IKTproj2gy', 'Muidny', 'IKTp2', 'IKTp2', 'Backendgy', 'Adbk2gy', '-', '-');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
