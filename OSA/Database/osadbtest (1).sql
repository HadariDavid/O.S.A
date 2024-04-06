-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 06. 17:18
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
-- Adatbázis: `osadbtest`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `csengetesirend`
--

CREATE TABLE `csengetesirend` (
  `id` int(11) NOT NULL,
  `becsengo` time(5) NOT NULL,
  `kicsengo` time(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `csengetesirend`
--

INSERT INTO `csengetesirend` (`id`, `becsengo`, `kicsengo`) VALUES
(1, '07:45:00.00000', '08:30:00.00000'),
(2, '08:40:00.00000', '09:25:00.00000'),
(3, '09:40:00.00000', '10:25:00.00000'),
(4, '10:35:00.00000', '11:20:00.00000'),
(5, '11:30:00.00000', '12:15:00.00000'),
(6, '12:25:00.00000', '13:10:00.00000'),
(7, '13:15:00.00000', '14:00:00.00000');

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
  `neme` text NOT NULL,
  `szuletesiHely` text DEFAULT NULL,
  `szuletesiDatum` date DEFAULT current_timestamp(),
  `szuletesiOrszag` text DEFAULT NULL,
  `allampolgarsag` text DEFAULT NULL,
  `anyanyelv` text DEFAULT NULL,
  `telefon` varchar(12) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `AnyjaLeanyVezetekneve` text DEFAULT NULL,
  `AnyjaLeanyKeresztneve` text NOT NULL,
  `GondviseloVezetekneve` text DEFAULT NULL,
  `GondviseloKeresztneve` text NOT NULL,
  `gondviseloTelefon` varchar(12) DEFAULT NULL,
  `gondviseloEmail` varchar(30) DEFAULT NULL,
  `szemelyi` varchar(8) NOT NULL,
  `Orszag` text DEFAULT NULL,
  `Iranyitoszam` int(4) NOT NULL,
  `Kozseg` text NOT NULL,
  `Ut` varchar(30) NOT NULL,
  `Hazszam` varchar(4) NOT NULL,
  `taj` int(9) DEFAULT NULL,
  `adoszam` int(10) DEFAULT NULL,
  `bankszamla` int(24) DEFAULT NULL,
  `oktatasiAzonosito` varchar(11) DEFAULT NULL,
  `iskolaAzonosito` int(11) DEFAULT NULL,
  `oraId` int(9) DEFAULT NULL,
  `Kepzes` text DEFAULT NULL,
  `jogviszonyKezdete` date NOT NULL DEFAULT current_timestamp(),
  `jogviszonyVartVege` date NOT NULL DEFAULT current_timestamp(),
  `jogviszony` text DEFAULT NULL,
  `hatranyosHelyzet` text DEFAULT NULL,
  `kepesitesek` text DEFAULT NULL,
  `egyediMegjegyzes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `diakadatlap`
--

INSERT INTO `diakadatlap` (`id`, `jelszo`, `osztalyId`, `csaladNev`, `keresztNev`, `neme`, `szuletesiHely`, `szuletesiDatum`, `szuletesiOrszag`, `allampolgarsag`, `anyanyelv`, `telefon`, `email`, `AnyjaLeanyVezetekneve`, `AnyjaLeanyKeresztneve`, `GondviseloVezetekneve`, `GondviseloKeresztneve`, `gondviseloTelefon`, `gondviseloEmail`, `szemelyi`, `Orszag`, `Iranyitoszam`, `Kozseg`, `Ut`, `Hazszam`, `taj`, `adoszam`, `bankszamla`, `oktatasiAzonosito`, `iskolaAzonosito`, `oraId`, `Kepzes`, `jogviszonyKezdete`, `jogviszonyVartVege`, `jogviszony`, `hatranyosHelyzet`, `kepesitesek`, `egyediMegjegyzes`) VALUES
('733339267', '$2b$13$DvcoYirlM2AJd8DVDf4zf.AFjviDatK.t93IZM9oZ8BLVAG0N5E7W', '2/14c', 'Teszt', 'Diák', '1', 'sikátor 2. kuka', '2009-12-31', 'Kugliország', 'kugli', 'magyar', '+36302349876', 'kugli123@email.hu', 'Huán', 'Rozália', 'Állam', 'Bácsi', '+36302349877', 'gondviselo123@email.hu', '62626262', 'Magyarország', 3980, 'Újhely city', 'izé utca', '21', 123456788, NULL, NULL, NULL, 2147483647, 123, 'Közgáz', '2024-03-02', '2028-03-02', 'nappali tagozatos', 'Halmozottan Hátrányos helyzetű', '', 'teszt diák felhasználó'),
('738219267', '$2b$13$.st45Rs4bdsbjWhokqsYuO4oncJexQLCfRjXHgcHqRfb5VkJUBqdm', '113c', 'Pahaszt', 'huliána', '1', 'sikátor 2. kuka', '2009-12-31', 'Kugliország', 'kugli', 'magyar', '+36302349876', 'kugli123@email.hu', 'Huán', 'Rozália', 'Állam', 'Bácsi', '+36302349877', 'gondviselo123@email.hu', '62626262', 'Magyarország', 3980, 'Újhely city', 'izé utca', '21', 123456788, NULL, NULL, NULL, 2147483647, 123456789, 'Közgáz', '2024-03-02', '2028-03-02', 'nappali tagozatos', 'Halmozottan Hátrányos helyzetű', '', 'hülye szegény de nagyon');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `dokumentaltorak`
--

CREATE TABLE `dokumentaltorak` (
  `tantargy` varchar(255) NOT NULL,
  `tanar` varchar(255) NOT NULL,
  `oraSzama` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `feketelista`
--

CREATE TABLE `feketelista` (
  `id` int(10) NOT NULL,
  `token` text NOT NULL,
  `exp` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hianyzasok`
--

CREATE TABLE `hianyzasok` (
  `id` int(11) NOT NULL,
  `datuma` date NOT NULL,
  `orakSzama` int(11) NOT NULL,
  `igazoltOrak` int(10) NOT NULL,
  `azonosito` varchar(25) NOT NULL,
  `igazolva` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `hianyzasok`
--

INSERT INTO `hianyzasok` (`id`, `datuma`, `orakSzama`, `igazoltOrak`, `azonosito`, `igazolva`) VALUES
(0, '2024-04-06', 3, 0, '733339267', 'igazolatlan');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ora`
--

CREATE TABLE `ora` (
  `id` int(9) NOT NULL,
  `azonosito` varchar(11) NOT NULL COMMENT 'egy azonosító a tanár vagy osztáy azonositására\r\n',
  `nap` text NOT NULL,
  `ora1` varchar(50) NOT NULL,
  `ora2` varchar(50) NOT NULL,
  `ora3` varchar(50) NOT NULL,
  `ora4` varchar(50) NOT NULL,
  `ora5` varchar(50) NOT NULL,
  `ora6` varchar(50) NOT NULL,
  `ora7` varchar(50) NOT NULL,
  `ora8` varchar(50) NOT NULL,
  `ora9` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `ora`
--

INSERT INTO `ora` (`id`, `azonosito`, `nap`, `ora1`, `ora2`, `ora3`, `ora4`, `ora5`, `ora6`, `ora7`, `ora8`, `ora9`) VALUES
(1, '2/14c', 'Hétfő', 'Asztmobigyak', 'Asztmobigyak', 'Asztmobigyak', 'Szaang', 'Szofegy', 'Frontgy', 'Frontgy', '', ''),
(2, '2/14c', 'Kedd', 'IKTproj2gy', 'IKTproj2gy', 'Asztmobilalk', 'Adbk2gy', 'Backend', 'Frontend', 'Backendgy', '', ''),
(3, '2/14c', 'Szerda', 'Backendgy', 'Backendgy', 'Frontgy', 'Frontgy', 'Hittan', 'Backend', 'Asztmobilalk', '', ''),
(4, '2/14c', 'Csütörtök', 'IKTproj2gy', 'Ofői', 'Asztmobigyak', 'Asztmobigyak', 'Frontend', 'Szaang', 'Muidny', '', ''),
(5, '2/14c', 'Péntek', 'IKTproj2gy', 'IKTproj2gy', 'Muidny', 'IKTp2', 'IKTp2', 'Backendgy', 'Adbk2gy', '-', '-'),
(6, 'Nám', 'Hétfő', 'Proggy', '-', 'Szoftgy', 'Szoftgy', 'Szoftgy', '-', '-', '', ''),
(7, '1/13c', 'Hétfő', 'Szofegy', 'Webprogy', 'Webprogy', 'Webprogy', 'Hittan', 'Ofői', 'Szofteszgy', '-', '-'),
(8, '1/13c', 'kedd', 'Adbkezgy', 'Adatbkez', 'Szoteszt', 'Aalkfejgy', 'Aalkfej', 'Szofegy', 'Szofegy', '-', '-'),
(9, '1/13c', 'Szerda', 'Szaang', 'Webprogy', 'Aalkfejgy', 'Aalkfejgy', 'Aalkfejgy', 'Szofteszgy', 'Szofteszgy', '-', '-'),
(10, '1/13c', 'Csütörtök', 'Webprogy', 'Webprogy', 'Adbkezgy', 'Adbkezgy', 'Szofej', 'Aalkfejgy', 'Aalkfejgy', '-', '-'),
(11, '1/13c', 'Péntek', 'Webpr', 'Webpr', 'Szaang', 'Aalkfejgy', 'Aalkfejgy', 'Szofegy', 'Aalkfej', '-', '-'),
(12, '2/14o', 'Hétfő', 'Zen', 'Égynev', 'Menta', 'Pszi', 'Gyogy', 'Pfk', 'Muidny', '-', '-'),
(13, '2/14o', 'Kedd', 'Pedgy', 'Pedgy', 'Pedgy', 'Pedgy', 'Pedgy', 'Pedgy', 'Pszi', '-', '-'),
(14, '2/14o', 'Szerda', 'Muidny', 'Szsz', 'Égynev', 'IKTped', 'Hittan', 'Koszi', 'Kom', '-', '-'),
(15, '2/14o', 'Csütörtök', 'Zen', 'Pszi', 'Menta', 'Mozgk', 'Gyogy', 'Pszi', 'Pedgy', '-', '-'),
(16, '2/14o', 'Péntek', 'Égynev', 'Menta', 'Ofői', 'Szsz', 'Gyogy', 'Pedszo', 'Pedszo', '-', '-'),
(17, 'NAS', 'Hétfő', 'Asztmobigyak', 'Asztmobigyak', 'Asztmobigyak', 'Webprogy', 'Szofegy', '-', 'Szofteszgy', '-', '-'),
(18, 'NAS', 'Kedd', 'IKTproj2gy', 'IKTproj2gy', 'Webprogy', '-', 'Aalkfejgy', 'Aalkfejgy', 'Backendgy', '-', '-'),
(19, 'NAS', 'Szerda', 'Backendgy', 'Backendgy', 'Aalkfejgy', 'Aalkfejgy', 'Aalkfejgy', 'Szofteszgy', 'Szofteszgy', '-', '-'),
(20, 'NAS', 'Csütörtök', 'IKTproj2gy', 'Ofői', 'Asztmobigyak', 'Asztmobigyak', '-', 'Aalkfejgy', '-', '-', '-'),
(21, 'NAS', 'Péntek', 'IKTproj2gy', 'IKTproj2gy', '-', 'Aalkfejgy', 'Aalkfejgy', 'Backendgy', '-', '-', '-');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osztalyzatok`
--

CREATE TABLE `osztalyzatok` (
  `tanuloId` varchar(255) NOT NULL,
  `tantargyId` varchar(255) NOT NULL,
  `osztalyzat` int(11) NOT NULL,
  `datum` date NOT NULL,
  `oka` varchar(255) NOT NULL,
  `tanar` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tanaradatlap`
--

CREATE TABLE `tanaradatlap` (
  `id` varchar(9) NOT NULL,
  `jelszo` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `osztalyFoId` varchar(5) NOT NULL,
  `osztalyok` varchar(255) NOT NULL,
  `csaladNev` text NOT NULL,
  `keresztNev` text NOT NULL,
  `neme` text NOT NULL,
  `szuletesiHely` text NOT NULL,
  `szuletesiDatum` date NOT NULL,
  `szuletesiOrszag` text NOT NULL,
  `allampolgarsag` text NOT NULL,
  `anyanyelv` text NOT NULL,
  `telefon` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `AnyjaLeanyVezetekneve` text NOT NULL,
  `AnyjaLeanyKeresztneve` text NOT NULL,
  `szemelyi` varchar(8) NOT NULL,
  `Orszag` text NOT NULL,
  `Iranyitoszam` int(4) NOT NULL,
  `Kozseg` text NOT NULL,
  `Ut` varchar(27) NOT NULL,
  `Hazszam` varchar(10) NOT NULL,
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
-- A tábla adatainak kiíratása `tanaradatlap`
--

INSERT INTO `tanaradatlap` (`id`, `jelszo`, `admin`, `osztalyFoId`, `osztalyok`, `csaladNev`, `keresztNev`, `neme`, `szuletesiHely`, `szuletesiDatum`, `szuletesiOrszag`, `allampolgarsag`, `anyanyelv`, `telefon`, `email`, `AnyjaLeanyVezetekneve`, `AnyjaLeanyKeresztneve`, `szemelyi`, `Orszag`, `Iranyitoszam`, `Kozseg`, `Ut`, `Hazszam`, `taj`, `adoszam`, `bankszamla`, `oktatasiAzonosito`, `iskolaAzonosito`, `oraId`, `szerep`, `jogviszonyKezdete`, `jogviszonyVartVege`, `jogviszony`, `szakok`) VALUES
('100023345', '$2b$13$JJRrOWANBUUUF16R9Jz8Y.4RloqxDbKP4pWDTjJnfPoFOg09ZQJvS', 1, '2/14c', '2/14c', 'ratatuile', 'Báasd', '0', 'sátoraljaújhely', '1998-12-31', 'Magyarország', 'magyar', '', '+36325578898', 'email2@email.com', 'Nádori', 'Mama mája', '', 'Magyarország', 3980, 'Újhely city', 'izé utca', '21', 123456789, 0, 0, '100023345', 2147483647, 123456789, 'Tanár', '2025-08-30', '2020-09-01', 'teljes munkaidős tanár', 'informatika'),
('Nám', '$2b$13$gVkFEQyFtaXBdXbtgc5vaOwVXwp6wkZ3HNPqcZAUbjH1aja2Yy7je', 0, '1/13c', '1/13c', 'Nádori', 'mama', '0', 'sátoraljaújhely', '1998-12-31', 'Magyarország', 'magyar', '', '+36325578898', 'email2@email.com', 'Nádori', 'Mama mája', '', 'Magyarország', 3980, 'Újhely city', 'izé utca', '21', 123456789, 0, 0, '1000', 2147483647, 123456789, 'Tanár', '2025-08-30', '2020-09-01', 'teljes munkaidős tanár', 'informatika'),
('TeA', '$2b$13$rMNTKARvsA.q197ZG/i/luOgt4x23vU7jZQiZdCQlq2nmAxaC3A1W', 1, '2/14c', '2/14c,1/13c', 'Teszt', 'Admin', '0', 'sátoraljaújhely', '1998-12-31', 'Magyarország', 'magyar', '', '+36325578898', 'admin@email.com', 'Nádori', 'Mama mája', '', 'Magyarország', 3980, 'Újhely city', 'izé utca', '21', 123456789, 0, 0, '1001', 2147483647, 123456789, 'Tanár', '2025-08-30', '2020-09-01', 'teljes munkaidős tanár', 'informatika');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `termek`
--

CREATE TABLE `termek` (
  `id` varchar(255) NOT NULL COMMENT 'terem azonosítója',
  `teremnev` varchar(255) NOT NULL COMMENT 'Terem neve',
  `teremtipus` varchar(255) NOT NULL COMMENT 'terem típusa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `csengetesirend`
--
ALTER TABLE `csengetesirend`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `diakadatlap`
--
ALTER TABLE `diakadatlap`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `oraId` (`oraId`);

--
-- A tábla indexei `feketelista`
--
ALTER TABLE `feketelista`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `ora`
--
ALTER TABLE `ora`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `tanaradatlap`
--
ALTER TABLE `tanaradatlap`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `termek`
--
ALTER TABLE `termek`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `csengetesirend`
--
ALTER TABLE `csengetesirend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT a táblához `ora`
--
ALTER TABLE `ora`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
