-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Okt 23. 16:49
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
-- Tábla szerkezet ehhez a táblához `osztalyzatok`
--

CREATE TABLE `osztalyzatok` (
  `tanulo id` varchar(255) NOT NULL,
  `tantargy id` varchar(255) NOT NULL,
  `osztalyzat` int(11) NOT NULL,
  `datum` date NOT NULL,
  `oka` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `osztalyzatok`
--

INSERT INTO `osztalyzatok` (`tanulo id`, `tantargy id`, `osztalyzat`, `datum`, `oka`) VALUES
('Lajos', 'Matek', 3, '2023-10-23', 'Témazáró');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `osztalyzatok`
--
ALTER TABLE `osztalyzatok`
  ADD UNIQUE KEY `tanulo id` (`tanulo id`) USING BTREE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
