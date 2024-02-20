-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Feb 19. 15:49
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
-- Adatbázis: `osaadatbazis`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tanaradatlap`
--

CREATE TABLE `tanaradatlap` (
  `id` varchar(9) NOT NULL,
  `jelszo` varchar(100) NOT NULL,
  `osztalyId` varchar(5) NOT NULL,
  `csaladNev` text NOT NULL,
  `keresztNev` text NOT NULL,
  `szuletesiHely` text NOT NULL,
  `szuletesiDatum` date NOT NULL,
  `szuletesiOrszag` text NOT NULL,
  `allampolgarsag` text NOT NULL,
  `anyanyelv` text NOT NULL,
  `telefon` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `anyjaleanyneve` text NOT NULL,
  `lakcim` varchar(30) NOT NULL,
  `taj` int(9) NOT NULL,
  `adoszam` int(10) NOT NULL,
  `bankszamla` int(24) NOT NULL,
  `oktatasiAzonosito` varchar(11) NOT NULL,
  `iskolaAzonosito` int(11) NOT NULL,
  `oraId` int(9) NOT NULL,
  `szerep` text NOT NULL,
  `jogviszonyKezdete` date NOT NULL,
  `jogviszonyVartVege` date NOT NULL,
  `jogviszony` text NOT NULL,
  `szakok` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `tanaradatlap`
--
ALTER TABLE `tanaradatlap`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;