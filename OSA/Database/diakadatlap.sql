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
-- Tábla szerkezet ehhez a táblához `diakadatlap`
--

CREATE TABLE `diakadatlap` (
  `id` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci NOT NULL,
  `jelszo` varchar(100) NOT NULL,
  `osztalyId` varchar(5) DEFAULT NULL,
  `csaladNev` text DEFAULT NULL,
  `keresztNev` text DEFAULT NULL,
  `szuletesiHely` text DEFAULT NULL,
  `szuletesiDatum` date DEFAULT current_timestamp(),
  `szuletesiOrszag` text DEFAULT NULL,
  `allampolgarsag` text DEFAULT NULL,
  `anyanyelv` text DEFAULT NULL,
  `telefon` varchar(12) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `anyjaleanyneve` text DEFAULT NULL,
  `gondviseloNeve` text DEFAULT NULL,
  `gondviseloTelefon` varchar(12) DEFAULT NULL,
  `gondviseloEmail` varchar(30) DEFAULT NULL,
  `lakcim` varchar(30) DEFAULT NULL,
  `taj` int(9) DEFAULT NULL,
  `adoszam` int(10) DEFAULT NULL,
  `bankszamla` int(24) DEFAULT NULL,
  `oktatasiAzonosito` varchar(11) DEFAULT NULL,
  `iskolaAzonosito` int(11) DEFAULT NULL,
  `oraId` int(9) DEFAULT NULL,
  `szerep` text DEFAULT NULL,
  `jogviszonyKezdete` date NOT NULL DEFAULT current_timestamp(),
  `jogviszonyVartVege` date NOT NULL DEFAULT current_timestamp(),
  `jogviszony` text DEFAULT NULL,
  `hatranyosHelyzet` text DEFAULT NULL,
  `kepesitesek` text DEFAULT NULL,
  `egyediMegjegyzes` text DEFAULT NULL,
  `igaztolatlanHianyzas` float DEFAULT NULL,
  `igazoltHianyzas` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `diakadatlap`
--

INSERT INTO `diakadatlap` (`id`, `jelszo`, `osztalyId`, `csaladNev`, `keresztNev`, `szuletesiHely`, `szuletesiDatum`, `szuletesiOrszag`, `allampolgarsag`, `anyanyelv`, `telefon`, `email`, `anyjaleanyneve`, `gondviseloNeve`, `gondviseloTelefon`, `gondviseloEmail`, `lakcim`, `taj`, `adoszam`, `bankszamla`, `oktatasiAzonosito`, `iskolaAzonosito`, `oraId`, `szerep`, `jogviszonyKezdete`, `jogviszonyVartVege`, `jogviszony`, `hatranyosHelyzet`, `kepesitesek`, `egyediMegjegyzes`, `igaztolatlanHianyzas`, `igazoltHianyzas`) VALUES
('123789654', '', '2/14c', 'Hadari ', 'Dávid', 'Sátoraljaújhely', '2023-09-28', 'Magyarország', 'magyar', 'magyar', '+36304831258', 'hadaridavid55@gmail.com', 'Hadari Éva', 'Hadari József', '+36301238798', 'hadarieva@gmail.com', '3980,Sátoraljaújhely, köztársa', 120649585, 1234565461, 1110001112, '123321636', 252525252, 214, 'diák', '2023-09-28', '2023-09-28', 'nappali osztagos', 'nincs', 'nincs', 'lusta', 0, 1);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `diakadatlap`
--
ALTER TABLE `diakadatlap`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oraId` (`oraId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
