-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-04-2020 a las 16:26:26
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pfinal`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllCiudades` ()  NO SQL
SELECT * FROM ciudades$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllContinentes` ()  NO SQL
SELECT * FROM continentes$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllEstancias` ()  NO SQL
SELECT * FROM estancias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllPaises` ()  NO SQL
SELECT * FROM paises$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllReservas` ()  NO SQL
SELECT * FROM reservas$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllReservas_estancias` ()  NO SQL
SELECT * FROM reservas_estancias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllReservas_viajes` ()  NO SQL
SELECT * FROM reservas_viajes$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllTipo_estancias` ()  NO SQL
SELECT * FROM tipo_estancias$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllTipo_usuarios` ()  NO SQL
SELECT * FROM tipo_usuarios$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllUsuarios` ()  NO SQL
SELECT * FROM usuarios$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spAllVuelos` ()  NO SQL
SELECT * FROM vuelos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spEliminarUsuario` (IN `_id` INT)  NO SQL
DELETE FROM `usuarios` WHERE usuarios.id = _id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFiltrarEstancias` (IN `pId` INT)  NO SQL
select * from estancias where estancias.ubicacion = pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindCiudadById` (IN `pId` INT)  NO SQL
select * from ciudades where ciudades.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindContinenteById` (IN `pId` INT)  NO SQL
select * from continentes where continentes.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindPaisById` (IN `pId` INT)  NO SQL
select * from paises where paises.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindTipoById` (IN `pId` INT)  NO SQL
select * from tipo_estancias where tipo_estancias.id=pId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertarUsuario` (IN `_apodo` VARCHAR(255), IN `_nombre` VARCHAR(255), IN `_apellidos` VARCHAR(255), IN `_dni` VARCHAR(255), IN `_correo` VARCHAR(255), IN `_contrasenia` VARCHAR(255), IN `_tipo` INT(11))  NO SQL
INSERT INTO `usuarios`(`apodo`, `nombre`, `apellidos`, `dni`, `correo`, `contrasenia`, `tipo`) VALUES (_apodo, _nombre, _apellidos, _dni, _correo, _contrasenia, _tipo)$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `codigo_pais` int(11) NOT NULL,
  `codigo_continente` int(11) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id`, `nombre`, `codigo_pais`, `codigo_continente`, `imagen`) VALUES
(1, 'venecia', 1, 1, ''),
(2, 'roma', 1, 1, ''),
(3, 'milan', 1, 1, ''),
(4, 'atenas', 2, 1, ''),
(5, 'thira', 2, 1, ''),
(6, 'amsterdam', 3, 1, ''),
(7, 'roterdam', 3, 1, ''),
(8, 'tokyo', 4, 3, ''),
(9, 'osaka', 4, 3, ''),
(10, 'hiroshima', 4, 3, ''),
(11, 'pekin', 5, 3, ''),
(12, 'shanghai', 5, 3, ''),
(13, 'hong kong', 5, 3, ''),
(14, 'seul', 6, 3, ''),
(15, 'daegu', 6, 3, ''),
(16, 'jartum', 7, 4, ''),
(17, 'khartoum', 7, 4, ''),
(18, 'port sudan', 7, 4, ''),
(19, 'rabat', 8, 4, ''),
(20, 'casablanca', 8, 4, ''),
(21, 'tunez', 9, 4, ''),
(22, 'christchurch', 12, 5, ''),
(23, 'wellington', 12, 5, ''),
(24, 'canberra', 11, 5, ''),
(25, 'nelson', 11, 5, ''),
(26, 'suva', 10, 5, ''),
(27, 'ciudad de mexico', 14, 2, ''),
(28, 'durango', 14, 2, ''),
(29, 'ottawa', 13, 2, ''),
(30, 'edmonton', 13, 2, ''),
(31, 'washington dc', 15, 2, ''),
(32, 'san francisco', 15, 2, ''),
(33, 'los angeles', 15, 2, ''),
(34, 'san jose', 16, 2, ''),
(35, 'liberia', 16, 2, ''),
(36, 'managua', 17, 2, ''),
(37, 'panama', 18, 2, ''),
(38, 'guatemala', 19, 2, ''),
(39, 'brasilia', 20, 2, ''),
(40, 'sao paulo', 20, 2, ''),
(41, 'bogota', 22, 2, ''),
(42, 'golfo de morrosquillo', 22, 2, ''),
(43, 'buenos aires', 21, 2, ''),
(44, 'ushuaia', 21, 2, ''),
(45, 'juba', 7, 4, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `continentes`
--

CREATE TABLE `continentes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `continentes`
--

INSERT INTO `continentes` (`id`, `nombre`) VALUES
(1, 'europa'),
(2, 'america'),
(3, 'asia'),
(4, 'africa'),
(5, 'oceania');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estancias`
--

CREATE TABLE `estancias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` int(11) NOT NULL,
  `precio` double NOT NULL,
  `ubicacion` int(11) NOT NULL,
  `puntuacion` double NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `estancias`
--

INSERT INTO `estancias` (`id`, `nombre`, `tipo`, `precio`, `ubicacion`, `puntuacion`, `imagen`) VALUES
(2, 'Residenza La Loggia ', 1, 99, 1, 9.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/39776205.webp?k=53971a826b595d80734bdcc2aa191bba474df102bc9d720259732c5683b0591f&o='),
(3, 'Piccolo Tiepolo', 1, 74, 1, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/117171827.webp?k=22d7db191d896a3e0c6333f5c278d53d3a24f313e6434e226e99c3fb7ff36a2b&o='),
(4, 'Hotel Adriatico', 1, 63, 1, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/32227079.webp?k=d613d50e4c258bd395a556f58bd814b720e4255281d005f0b2b0eba37c15eec7&o='),
(5, 'YOUTH VENICE PALACE', 3, 39, 1, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/37915733.jpg?k=f5ac75afff0fc5f888d974ef3cbad84f48341d5a462c3e8032d6c379fe045242&o='),
(6, 'Combo Venezia', 3, 37, 1, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/203596117.jpg?k=e6273e823de27cd8aa1b0f1a5ff15ee84bd3e27a1b2443eed299816cbf8899ae&o='),
(7, 'Residenza Universitaria Gesuiti', 3, 43, 1, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/51584810.jpg?k=5e18a3daede36565fc66dbfdf1e8e876f1edb60bf311e3ea3a8c9055aafc71ce&o='),
(8, 'B&B Bloom Settimo Cielo ', 2, 139, 1, 9.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/82011244.jpg?k=af0ef43af50475def23ab6506b2fbca6bcbc9a24a22455aa3c47d8bb6a674adc&o='),
(9, 'Hotel Messner', 2, 35, 1, 6.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/134331174.jpg?k=fc5b2a21a635745c3bf6ed5cf63d4ece7ea0ec31410d43e9b3f3f93917e297d7&o='),
(10, 'Antico Panada', 2, 68, 1, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/23869016.jpg?k=839397ffe3df0ec333aa45bcdb0bea8c823e6dd2cf1556e1ed78b55e478804bc&o='),
(11, 'Relais De La Poste', 1, 77, 2, 9.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/232309186.jpg?k=60113e82cafbcdab744e6b49c32926be54c6c942bcac5627eab0b8cb1a22543d&o='),
(12, 'Hotel 55 Fifty-Five - Maison d\'Art Collection', 1, 95, 2, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/225710548.jpg?k=6485048450cfb816dd3fdf4067dcce2dc474135db90df22802dfcb60ef02850d&o='),
(13, 'Argentina Residenza Style Hotel', 1, 198, 2, 9.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/119801006.jpg?k=39b32bf889b5eb90b83f291330b8b2277edf5ca9ef713d9868241cd8d54e22b8&o='),
(14, 'Casa Mia In Trastevere', 2, 48, 2, 8.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/214162763.jpg?k=9d21c8a7ee130a76fe0962d9d3eaba3c17da0373b0aa4a00ae934bbdb7b7a1f8&o='),
(15, 'Hearth Hotel', 2, 47, 2, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/160688949.jpg?k=8c29baa35767c2a48539a7836f20c8001796f20e15a12b45b91abf2d200385f1&o='),
(16, 'Hotel Del Corso', 2, 52, 2, 8.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/81229121.jpg?k=c2f891d997c18b5c15c79b0f6b71a66f24157dda9f05b4b04b9472d3e5476017&o='),
(17, 'Baglioni Hotel Carlton - The Leading Hotels of the World', 1, 292, 3, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/19249652.jpg?k=90aea2ae6a246418ece387e20ced072ff3691fc2f9b461e115d0a8b63d58b7bd&o='),
(18, '43 Station Hotel', 1, 49, 3, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/96983684.jpg?k=48a2d5372fa2bfacbfae3ece527d11ebc8d59fefdebe77ec6bcbb2c8f3f17024&o='),
(19, 'Hotel Mozart', 1, 68, 3, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/16387107.jpg?k=c3791b2e4b955d2e22273adfd7fcf650eeafe67bfb3b6a1f63471d59e695e8f4&o='),
(20, 'Gogol\'Ostello & Caffè Letterario', 3, 23, 3, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/62665246.jpg?k=394126596856c3b89562a2554a8542de50b199d0c743c53e6f97f696357e91df&o='),
(21, 'Mio Hostel', 3, 22, 3, 7.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/73251765.jpg?k=bca8b2f05a56abe5ce6f5ccec46d535d6d859fd6591711d5ef1b9760e34e9fdc&o='),
(22, 'Babila Hostel & Bistrot', 3, 35, 3, 8.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/106655681.jpg?k=3693ea02fb84eae8c7fa95d9cf07d894fd706ef9c7a52fa84533c92e2fe17ac6&o='),
(23, 'Bianca Maria Palace Hotel City Center', 2, 113, 3, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/155607049.jpg?k=d1cae8d36071f07b4554dfdfe9c303c2dff18c25f1477c1c93271ee9acb8db07&o='),
(24, 'Hotel Michelangelo', 2, 111, 3, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/16803714.jpg?k=2c53ee204c87c2882919ca4478659167702565428e24e82417635ef9ee449834&o='),
(25, 'Palmyra Beach Hotel', 1, 52, 4, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/92657383.jpg?k=2b8db0cb3ff677950545965e2891efbd2178736052b62c888f562df30aa7046c&o='),
(26, 'Concierge Athens II', 1, 34, 4, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/193355848.jpg?k=dd13147f71198bc73ec47773b81c719a96cdda3ac0e1e245db080b3f8c7d8ef8&o='),
(27, 'Dorian Inn', 1, 56, 4, 7.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/85393914.jpg?k=fe006fa48782648ff4ef23991c24de55ac63aa4aae351296d0a49f5e3d4e7467&o='),
(28, 'Mosaikon', 3, 16, 4, 9.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/212228787.jpg?k=eab4c897a5ba9c97acc513c650b488c4b6917827a4691ce26b1fdd9d8d156d0c&o='),
(29, 'Small Funny World Athens', 3, 11, 4, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/81889792.jpg?k=027415a4b766ddc46062d7deecd208ad268c744063155e24a1336f79d5d180b5&o='),
(30, 'Athens Hub Hostel', 3, 15, 4, 9.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/233084379.jpg?k=e5b8d3888589dab2d4269abd6e966bfbb1dcfd4b9392138da7290b23e0b3bdac&o='),
(31, 'Athens Hawks', 3, 11, 4, 8.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/204225048.jpg?k=d2660a95d950bf6d1b68a39bb1f17eda02bd48c62a0768c3d4642906096382cc&o='),
(32, 'COCO-MAT Athens Jumelle', 2, 88, 4, 9.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/163744692.jpg?k=fdbf6cc6c40c0d1aa227f10ac3a77355f11f1bcbed9a6a167cad9ff6cf462d0b&o='),
(33, 'Callia Retreat Suites - Adults Only', 1, 69, 5, 9.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/200319432.jpg?k=8edc79068aa3a2e528b14363095c259b18f5c0a3822c282fa7be63be0002d64d&o='),
(34, 'Milos Villas Hotel', 1, 42, 5, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/61802697.jpg?k=89a83eb7a142fa395d47f342c0303f3666576bd7a41849c3ee25ffeb1f93d645&o='),
(35, 'Anatoli Hotel', 2, 101, 5, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/140336310.jpg?k=d3a580dab924421b5b01570934f3055a700497071bd88a63111b11c88517649f&o='),
(36, 'San Giorgio', 1, 50, 5, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/188932597.jpg?k=a7116f93858913b9b092dac533de888960dd7bf9868ee420e9e9a21353de33af&o='),
(37, 'Hotel Solaris', 1, 46, 5, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/13805188.jpg?k=c632224056445ac676161e41e887103d1e72b3549a6e365ce00ff3de45d88bdf&o='),
(38, 'De Sol Hotel & Spa ', 2, 131, 5, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/98450639.jpg?k=6b52e3e4cc688a1dd0b5fb402fc85eb4af2cf6e8653c498a862e3d64299e7029&o='),
(39, 'Santorini Main Square', 2, 69, 5, 9.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/141229508.jpg?k=b510aa890771608deda7fb5e815ca07a3b92a72cd349e358ed41689f873055cc&o='),
(40, 'Budget Hotel Ben ', 1, 60, 6, 7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/29142944.webp?k=98b99c0d684a6971ee0a966a831e7e731680b65bc482ae69e46c42b73283ab4e&o='),
(41, 'Qbic Hotel WTC Amsterdam ', 1, 55, 6, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/26659610.webp?k=271fb5be1a01d830126d0dcd2803899ff163f334db523d5fa0c03c66aca2e766&o='),
(42, 'Hotel Washington ', 1, 535, 6, 7.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/15472478.webp?k=7128a453b33f1f4946b7ba3aed712b5e7e9997ac4c395679ef13af96fff268c5&o='),
(43, 'citizenM Amsterdam South', 2, 136, 6, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/167835753.webp?k=181e7977047cdb60476f3a3cfa203b1f039f30764c76d168be86dd15e91db03d&o='),
(44, 'Avenue Hotel', 2, 122, 6, 7.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/21918566.webp?k=8be6127e484658a3abb7e0712af2f626544df5c36a08bfff96173d5b16602b52&o='),
(45, 'Leonardo Royal Hotel Amsterdam ', 2, 162, 6, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/195571737.webp?k=9d03bc8d56dad1026387d87752821f5e73855c941d3f6760489d387326f0de6c&o='),
(46, 'Generator Amsterdam', 3, 40, 6, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/122885935.webp?k=4fc319f8f73f11815f2a711bf26c9c5fa0bb30cb0fe7f11a434176f232b52bae&o='),
(47, 'a&o Amsterdam Zuidoost', 3, 35, 6, 7.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/247905472.webp?k=1f11f16c3f4e407b39a8fb21fbd282d0b6c3669be49b8f0b42c086b9f01ef43c&o='),
(48, 'Stayokay Amsterdam Vondelpark ', 3, 48, 6, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/144117886.webp?k=21ad93630d0ba86f9a08469c3992f53bab93060cdaad0371ae176a6876a0a01d&o='),
(49, 'The James Rotterdam', 1, 94, 7, 9.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/151407316.webp?k=4ae7b966ea43c8d5067291263db2046456493735a38e458d557d83a847dbeec4&o='),
(50, 'Mainport Design Hotel', 1, 127, 7, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/21596543.webp?k=c2206434d6dd8668e6cb64cf60f7cc661eb3a626efcdca3820eee596ecc82662&o='),
(51, 'citizenM Rotterdam', 1, 110, 7, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/24355570.webp?k=6f48a8cd562ca2eb992f88f754677a4f2e2f1580239467c224ec82ff4bdb1c21&o='),
(52, ' Holiday Inn Express Rotterdam - Central Station ', 2, 94, 7, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/230103396.webp?k=a8ef729a71ce6694be4d1df1530b97711812b06375ebb2cf28cdc0ecfc1455a0&o='),
(53, 'Hotel Breitner ', 2, 97, 7, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/120401514.webp?k=cb36a2b5ac8ebd9150c25601af36e635ab83b8142e8b2de07790e0679e8b9df7&o='),
(54, 'Inntel Hotels Rotterdam Centre ', 2, 111, 7, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/28627926.webp?k=c399e05fbb5369f3c6f38cd53ac74617324eb11c918f4930e3634b06e8139b31&o='),
(55, 'Stayokay Rotterdam ', 3, 22, 7, 8.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/87210617.webp?k=590d01c20be8f653c182ee43168129de481493c8992fefd69dcc4e9c10622f7f&o='),
(56, 'Sparks Hostel ', 3, 20, 7, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/220837272.webp?k=23554025b782a732b8f162c23595bd331e601480375b8c677f07c8ffe457ddaa&o='),
(57, 'Hostel Delft', 3, 29, 7, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/44759416.webp?k=64642e52ebb6e921b0f62c6140ab753edd9b4a7ddd7ec0ca4c4d2bad725e7baa&o='),
(58, 'Asakusa View Hotel ', 1, 71, 8, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/213748573.webp?k=0eff967cb76304f430b74ab67f9106f46f23a25ea4936599b3a3b58e8ae87c9b&o='),
(59, 'Super Hotel Lohas Ikebukuro-Eki Kitaguchi ', 1, 34, 8, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/211186972.webp?k=2192e411d53fe9c9e347f23602174af8f8409b529a525b3629d5e5b6c330a50c&o='),
(60, 'UNDER RAILWAY HOTEL AKIHABARA', 1, 46, 8, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/240874600.webp?k=271c5e985a6dd13586281864d4721239128db797a40423a4a8795f2ebeb4c5ef&o='),
(61, 'the b tokyo asakusa ', 2, 49, 8, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/208378334.webp?k=272fd7ccdb2aa2a47e3f6028fff171a91961c5cec08c26f6afd02c1be68416c8&o='),
(62, 'HOTEL FELICE Akasaka by RELIEF', 2, 63, 8, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/141175811.webp?k=d3d3e459a50cdf608e56e0d2d21e3ed8e82ed7ef6fb430d92b0ee8dedddef3d8&o='),
(63, 'RELIEF PREMIUM Haneda by RELIEF', 2, 52, 8, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/123338742.webp?k=39d47f27b8e0383d28cefe2e9c5eb326d04db5521af682a14996a68b3cc01916&o='),
(64, 'Wise Owl Hostels Shibuya', 3, 23, 8, 8.7, 'https://r-cf.bstatic.com/images/hotel/max1024x768/996/99694362.jpg'),
(65, 'MANGA ART HOTEL, TOKYO', 3, 39, 8, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/179957461.webp?k=2611a2b2499e5e164b705de76e554e1dd9965c5daac51567e67db317f30364ca&o='),
(66, 'Binemu Asabujuban', 3, 17, 8, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/225885183.webp?k=d4aaba4170975c39d166d13ac0827ba3e1b0c552de843911d0ead5f66b8e31de&o='),
(67, 'Shinsaibashi Crystal Hotel', 1, 45, 9, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/237826956.webp?k=9294959c768235b03099fe91a12d1b73351689a86e5502973d9ead7c390b81b5&o='),
(68, 'karaksa hotel grande Shin-Osaka Tower ', 1, 37, 9, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/219614340.webp?k=0a72066e0349e5a5018bd8f8b8f11727ae6fdf77a43b3f882267cf072a27ec5a&o='),
(69, 'SARASA HOTEL Shin-Osaka', 1, 31, 9, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/214295813.webp?k=f0245d245a86b7125da3a9f42f7186c814109c09f4ef50f6c0418f44fb3dd191&o='),
(70, 'S-peria Inn Osaka Hommachi', 2, 40, 9, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/185335971.webp?k=8f48d74b0c21c9847393f68d8d0063ba38998362b16c1938fdb367359a95305a&o='),
(71, 'Hotel WBF Namba Ebisu', 2, 40, 9, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/213595055.webp?k=f6b417c8e93c425d75bdd478daf115f005712d5e82da89e01619885ce74cef00&o='),
(72, 'Daiwa Roynet Hotel Osaka-Shinsaibashi ', 2, 69, 9, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/186125252.webp?k=7791490c18082419f805a6b8b946e48df407a4664e5f6d349427f1761b6fd965&o='),
(73, 'Hostel Q', 3, 13, 9, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/93070260.webp?k=cf298c787c9367b85214a66ad45a33b89da68eca42b10051bef436b5e7c5bb3a&o='),
(74, 'Osaka Nagai Municipal Youth Hostel', 3, 24, 9, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/224648760.webp?k=d8709c715b29f8f539d5b0f6d2b86fd83a4cb5f9eb57eb0ce53f77757ca7809f&o='),
(75, 'Fuku Hostel Nagomi Namba', 3, 17, 9, 9.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/71971319.webp?k=77edac33cce572859ac002e0438b0d1166740125d61661ea91e78aa3808c5bca&o='),
(76, 'Nest Hotel Hiroshima Hatchobori', 1, 33, 10, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/197287706.webp?k=9de22d8ab6fd8ee37354140d9295e62d9c0ce42361ac0ec74f2d30d5449ae232&o='),
(77, 'Mitsui Garden Hotel Hiroshima', 1, 50, 10, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/237215509.webp?k=c1c4ddc7cfa765aba7cbcd1792bfdadc80ca13af36ab64640bc116f6741ba01f&o='),
(78, 'Sotetsu Grand Fresa Hiroshima', 1, 33, 10, 8.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/223489663.webp?k=571bb34b8d91b250f148fcf69df2c27260513a00956f059a860f35fc932bd8f8&o='),
(79, 'Ark Hotel Hiroshimaeki Minami', 2, 42, 10, 7.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/183758505.webp?k=4b2dfd1a6af2148cb83922cd7fae5dd781860460d39ea0fb2cf376624b0d3ff5&o='),
(80, 'Rihga Royal Hotel Hiroshima', 2, 88, 10, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/244285270.webp?k=07cf065b77808b79e7149026e1947858f37b063918114fb4fc777935901685b2&o='),
(81, 'Chisun Hotel Hiroshima', 2, 56, 10, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/68279177.webp?k=9670fcf8582fe5361d174cd160929e1e39895a87dc9c0d138ee362e5860225bf&o='),
(82, 'WeBase Hiroshima', 3, 16, 10, 9.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/221399065.webp?k=665573dbf997f7d339b4c84ab098bccc61e87783bc6e28f0bab5b7640319f9a0&o='),
(83, 'Hiroshima Hana Hostel', 3, 14, 10, 8.1, 'https://q-cf.bstatic.com/images/hotel/max1024x768/980/98011877.jpg'),
(84, 'Kawate-ya Hostel', 3, 15, 10, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/189068069.webp?k=7a887b387678c338695124664c840b4399626f8a79b8334e63b357734abe6b89&o='),
(85, 'Holiday Inn Express Beijing Dongzhimen', 1, 72, 11, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/250424112.webp?k=83fbdc99d0b1193bd03d0092106341111066dee9a5c4d3a3fa04b00ce4dbfc38&o='),
(86, 'Days Hotel Beijing Guomen', 1, 49, 11, 6.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/179596706.webp?k=0c51a997e2a725ac727a2beed1d1cbfb86e501bedab451f44bddaec485b0798c&o='),
(87, 'CitiGO Hotel Beijing Tian\'anmen Square', 1, 51, 11, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/182486069.webp?k=d686fabcb7107239c96d82c14d36f520fbc1c5ace82a5f03fa7fe8f3efa4fcbc&o='),
(88, 'Holiday Inn Temple Of Heaven Beijing', 2, 88, 11, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/246606670.webp?k=1f789d8075f68126d0158a94f00e26d555ce4f5ddcc4e9a77299ea1059b05390&o='),
(89, 'SonGy Hotel Beijing ZiZhong', 2, 229, 11, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/197589408.webp?k=2b89b3157dbef9f3f29e1814f47e8e2748079ffd26158199c5aa7984de948770&o='),
(90, 'Novotel Beijing Peace', 2, 116, 11, 7.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/234928632.webp?k=b309c4055d7d325f8c8c80798c9f4e5da58d98953726ded99368e93ed86f517d&o='),
(91, 'Yue Xuan Courtyard Garden International Youth Hostel', 3, 73, 11, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/47870943.webp?k=cd58cba5c93ac90816bca8e39b6723e30c560e1fca1385542c6bc891f971c534&o='),
(92, 'Beijing Pagoda Light International Youth Hostel', 3, 60, 11, 8.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/105147493.webp?k=e8ee2dc2511b188826576877adb60863f616b89cf856165463db062563fab3e6&o='),
(93, 'Spring Time Hostel', 3, 32, 11, 7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/55405962.webp?k=ec338512708e5375a2365a931ea90c78bd57d41ecce930b6cbdbb0211d173005&o='),
(94, 'Hao Du Hotel Shanghai', 1, 24, 12, 7.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/184828836.webp?k=ecb06de807bb99267513c460bc26ae335b8f3375acc80eb241420bf19ff84f73&o='),
(95, 'Shanghai Deco Hotel', 1, 38, 12, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/107175846.webp?k=1c2157f042176abf14880dd3772b0bbf0fbc7a7d25a373085056ed385aaab632&o='),
(96, 'Jin Jiang Pacific Hotel', 1, 68, 12, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/99195005.webp?k=249cd83237c01f8d807a6db670d9fd54c92e7908a705d6cad28b40fe6007ec62&o='),
(97, 'Paramount Gallery Hotel', 2, 114, 12, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/10363775.webp?k=7c42e10ebe26b1acc07a448dc0ced991ab3dd1ace982a2c612ac653f13cbc88a&o='),
(98, 'The Yangtze Boutique Shanghai', 2, 55, 12, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/13429895.webp?k=7808b038edb4b1f473209849ba15a812b17a655d1e0dd55b8d8f39d718c7969e&o='),
(99, 'Holiday Inn Shanghai Jinxiu', 2, 91, 12, 8.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/230396813.webp?k=b29bf8ddfa3bcfe46a63f930a60e3c45f4ff5c2a80e5595cf27cdd1c8379c91f&o='),
(100, 'Chelan Homestay', 3, 61, 12, 7.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/135035505.webp?k=d7a70ca6a88f6be52bc321cb0fc03d9f48f7680904e51632dc8b77c971e88031&o='),
(101, 'Mingtown Etour Youth Hostel', 3, 19, 12, 7.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/61208184.webp?k=a55431534858163b187323ea78b49f53b9a1b87b6f4abbc16c95616c6465e230&o='),
(102, 'Shanghai Blue Mountain Bund Youth Hostel', 3, 23, 12, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/149715601.webp?k=7b117253884d2c08a391eee33a8d2e36d1d9403aa536ae96e8dc4dd4f3d4da8d&o='),
(103, 'L\'hotel Island South', 1, 65, 13, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/107663053.webp?k=ec7523e7f669a3a5d553567088ecf46efc16740520790fde9eb9f5b82e021486&o='),
(104, 'Atlas Hostel & Backpackers', 1, 62, 13, 7.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/119769339.webp?k=a260afb3f86fef930208ed5a5aca6b8e23256b192ee7b53b65b9e1de7e4370cd&o='),
(105, 'Royal Plaza Hotel', 1, 60, 13, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/138495392.webp?k=5250a0ac4cec83ddde1ecadcb6bdd93b6fa7d927bd56b0498e2e89e0543c7199&o='),
(106, 'iclub Mong Kok Hotel', 2, 39, 13, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/199471515.webp?k=b3c350da46594310c9ffb5d48908a7798f72a37fa889720dafccc4dcda15322a&o='),
(107, 'Panda Hotel', 2, 87, 13, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/27759610.webp?k=deb90ac947d31a3d74fc3dc1b77b5db45d080a52e4546368c1ba4ee2a76e733d&o='),
(108, 'Metropark Hotel Mongkok', 2, 51, 13, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/98362510.webp?k=f90c49322203cf08d468663f4b9d303b8defb17357eaffd51f695e6ff6c8230d&o='),
(109, 'Comfort Hostel', 3, 15, 13, 7.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/61022561.webp?k=001c37f361440feb4bba1cb2ababaa956d9d936a584338aee8dab34f40783e26&o='),
(110, 'Check Inn HK', 3, 21, 13, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/65112758.webp?k=306d24944c9cf4bfda1357750b13577a5a5327ca321fef2b7fd183b47a3e8a78&o='),
(111, 'Fuji Hostel', 3, 24, 13, 7.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/191445593.webp?k=f6bf440e81ff25da6ff12ffe4b8281121ebf70edd0726acc36e1d7d1272a0121&o='),
(112, 'Chisun Hotel Seoul Myeongdong', 1, 31, 14, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/145488418.webp?k=79009a5b1fb5116e060026b4280784d9f116e1828f1b4b949bc84a6c0c4e4553&o='),
(113, 'Hotel Pharos ', 1, 47, 14, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/27109276.webp?k=fbfa57ef957501ba99fb171ef55d56abd57a37ff1e7fb94e8a3f513e60deeee2&o='),
(114, ' Novotel Ambassador Seoul Yongsan  ', 1, 73, 14, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/205046322.webp?k=81bf03a67d3112bd5b30c0eb8b05917c77ca28154a850f237f256574865dd096&o='),
(115, 'H Avenue Hotel Idae Shinchon', 2, 52, 14, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/107581187.webp?k=367af0464f731fe321271cca903fb5308ce3057d8474dc538fbd36d5fb265114&o='),
(116, 'Calistar Hotel', 2, 40, 14, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/177450214.webp?k=a472e46b6e9e6d32092e934cd24a77975dee87f4710bdd5c2425b43c712fbb80&o='),
(117, 'Hotel MIDO Myeongdong', 2, 50, 14, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/32687148.webp?k=ede02e539365977e1e183e201cee0ad7e3349774e7a2e1c8f0c88f3c9e29424a&o='),
(118, 'Hostel Korea - Changdeokgung', 3, 24, 14, 7.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/24851032.webp?k=726c65ecb4c066d51ce5d86afa80d9b04524189ce318e20a0cef3e1f42ae7f34&o='),
(119, 'YaKorea Hostel Itaewon', 3, 8, 14, 7.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/59958205.webp?k=2943ae245d52b35e09f045b38f7e668e8f85f10216a84f200d1dc91c039a7dc7&o='),
(120, 'Myeongdong Rooftop Hostel', 3, 33, 14, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/157816241.webp?k=ba2e1e10cc1fa9f4d333df5b2288293a74a2e8d8457eeabbfd1239ab172b2613&o='),
(121, 'February Hotel Hwanggeum', 1, 71, 15, 7.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/102281522.webp?k=f907e22b9073775e32b315910bf51a567fc4a938206f45606df19133753c40f7&o='),
(122, 'Palgong Emillia Hotel', 1, 78, 15, 7.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/62148192.webp?k=8a9fcf23570cd47a4d9c854e2ec23b73e72f86b5da29352dd9ac0c468e5d9e02&o='),
(123, 'Pierrot Hotel', 1, 50, 15, 7.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/214583789.webp?k=2910cfcd02444c1da3c7fb00f174f9ce24a533e753583bf6048262c98a07121c&o='),
(124, 'Novotel Ambassador Daegu', 2, 164, 15, 8.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/211739816.webp?k=70cef152a710ff00beb0f511d7acd1139bac0922d1076625b547b13f9f9c9153&o='),
(125, 'Toyoko Inn Daegu Dongseongro', 2, 59, 15, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/249450975.webp?k=1674bbc83867aaea08963ca371a9455695f3ccf0d898d6351c1e44b4597c5652&o='),
(126, 'Rivertain Hotel', 2, 95, 15, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/100372067.webp?k=f1eb42772164c65ad9c42d70464161ed641f8cc11f481cab09de83345f1a7b4e&o='),
(127, 'Crown Hotel Juba', 2, 138, 45, 6.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/65433699.webp?k=e05eefe5d3a61d5c62d719c109a78463b3969c1a68ec793b70fa430840e6f638&o='),
(128, 'Acacia Village', 1, 100, 16, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/101161934.webp?k=931d6cf4f8ea9cf14e0829fc8cf1733626c50a966ce6f80c0949011d8d941372&o='),
(129, 'Panorama Sarovar Portico', 2, 97, 16, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/197649738.webp?k=720d14e4bceb6eef7b2555d935dae07576c5c3cd04ebfbc911951e862e4b823b&o='),
(130, 'James Hotel Juba', 1, 87, 45, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/68893612.webp?k=8545136b71601f5e8997d6b02ae194395fd892ae48ce16bc7ee8aacfced42f37&o='),
(131, 'Keren Hotel', 1, 88, 16, 5.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/70677505.webp?k=2e3736bd5f7f3dccf4a3e4eaf87a20cf761bd89d10d18b6599869f249f130c1d&o='),
(132, 'Yam Hotel', 1, 89, 17, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/74581106.webp?k=a91e438da31db98d2bd28a25d039c9c8e5f098b80f1bb3f7e5e631875ff170df&o='),
(133, 'Airport Plaza Hotel', 1, 101, 17, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/70667369.webp?k=14e9f37fdb446f50d060c127fb89d673e870bc63058f0981ee29c99faa7c3503&o='),
(134, 'Riviera Business Hotel', 2, 170, 17, 8.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/68900165.webp?k=6e037157fddad464e081366113ea9d723c61c84710f6db8320f9adf4547a0443&o='),
(135, 'Oscar Hotel', 2, 120, 17, 9.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/155930446.webp?k=07dd6d82ddde4fa130a0475f60691929385ede7a1d598569e532b588545117d8&o='),
(136, 'Concord Hotel', 2, 55, 18, 6.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/242592360.webp?k=62adc9b06220bb9673d8c45999e436e40dd79acc32cb98f4d627a720b5c4a193&o='),
(137, 'Aron International Hotel', 2, 72, 18, 7.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/168738831.webp?k=efd4d47531b875bd841f3d0d66c5bacc83f9035cab0c22f3d96c52f8d4687fd5&o='),
(138, 'Pyramid Continental Hotel', 1, 187, 18, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/215177759.webp?k=e255c3c416909ee87c21a02e80a10604c94fa8d1e8cd0f4add330973006e24b5&o='),
(139, 'Regency Hotel', 1, 88, 18, 6.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/184630481.webp?k=b3ffe3496a5234d88fddd4e5710a2ba8e78d42679bfcc6fbbc4a28e250c934a2&o='),
(140, 'Riad Dar El Ghali', 1, 18, 19, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/196037418.webp?k=c54ae06278ce599c8836dd5e7ffdfdd38acabe6d478722bdfe713bde10c63a04&o='),
(141, 'Riad Meftaha', 1, 59, 19, 9.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/51128849.webp?k=139c17b01bfff5379099009ad0293c291bfb3e39f6b8772e21000aad7164508d&o='),
(142, 'Votre Maison de vacances en bord de mer - Harhoura', 2, 70, 19, 7.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/192234855.webp?k=c7251beb7b48786c28ae63745f3e2403a56ac058b258ae32b8c74c328c7ab55e&o='),
(143, 'Hotel des Oudaias', 2, 55, 19, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/64219007.webp?k=6c870f30f1bb89cc6eace6703c17b9f92ee6893c95470383f5d61250cb7bbbe9&o='),
(144, 'Rabat Surf Camp', 3, 25, 19, 6.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/225570131.jpg?k=c30b1fd2926f6ba03f55fea4c426e2adfa84e7fd8e5935c28eae9584b74b30c6&o='),
(145, 'Auberge de Jeunesse', 3, 12, 19, 6.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/165868947.jpg?k=acfa69f8e28cca3a26e43d640834eaa0d1c3a22253251942adaf8ff5e0874df5&o='),
(146, 'Premiere Classe Casablanca Centre Ville', 1, 31, 20, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/173410164.webp?k=0cd13ca253c47b3e0faa3c7fb98be4d1c51b1a00529e9023de6da90b0d73fd2f&o='),
(147, 'Onomo Hotel Casablanca Sidi Maarouf', 1, 48, 20, 8.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/198717769.webp?k=0755bed8c0cd7648dd73768cacc4f8e28c3ccf4b93822cc8ce9391ce58f9f0e3&o='),
(148, 'Hotel Les Saisons', 2, 46, 20, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/26659738.webp?k=3a87e892d29b208a1e3e23cb9760f5d3b66756de6494dfc45f967f20a208d2d5&o='),
(149, 'Astoria', 2, 30, 20, 6.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/210694904.webp?k=1ff3e2bfd786d565b99e15a4e06c156aed0ca1024015d9acec306efbc249f1a6&o='),
(150, 'Casablanca Traavellers', 3, 12, 20, 4.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/245859672.jpg?k=d5eb166e18db02849a8360d0aba2fbe1fe73f505f5a7957b389037bf0d65244f&o='),
(151, 'Youth Hostel Casablanca International', 3, 23, 20, 6.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/160337957.jpg?k=0436cbe6873ec2f4d9f4f0c6996282fcc7600de61148472a4ae1dd5a06093142&o='),
(152, 'Ibis Tunis', 1, 70, 21, 7.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/236461514.jpg?k=f1990a64aa3c7bc84a78198a785851e887b8e194b82086db930413af8694450e&o='),
(153, 'El Mouradi Hotel Africa Tunis', 1, 69, 21, 6.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/184181995.webp?k=a95ac21ccf6507d98432865facde2171f3e8badccc0c8fb6b7af778e3fdf6da4&o='),
(154, 'Hôtel le calife', 1, 25, 21, 7.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/222930874.webp?k=c530d3da7fa0fa22f6897774e560bfd369e8288d37218d7543a9edecaff087ef&o='),
(155, 'Hotel Carlton', 2, 55, 21, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/55683957.webp?k=44d54baa5c8453101d77787483cf3d92fb9607b6c5d540130bcd999feeabfd3a&o='),
(156, 'Royal Victoria', 2, 81, 21, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/157459908.webp?k=de343b4c66a7f20bc209927923dba8449ec5cf1015fedd094e54e23d4982f50c&o='),
(157, 'Camelot Motor Lodge', 1, 54, 22, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/67973049.jpg?k=497c16900fd9a29ad022477aaeeeec086f8dd37ea240e85cd045842f245c75dd&o='),
(158, 'City Centre Motel', 1, 67, 22, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/197559478.webp?k=72cd9ce1563433023bc8b45b934f3e7230808d66c003f215fdab6a15378e439b&o='),
(159, 'Jailhouse Accommodation', 3, 44, 22, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/113611189.jpg?k=eda3b8d6b6ca5ccbba026a539f8415a5db0647057bdf9f370ca7bad595bd37d4&o='),
(160, 'Foley Towers BBH', 3, 49, 22, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/203449617.webp?k=480fd1121fd300511a8101dd4ebc3cb6b8492c3b16fd4b3bb576bba260ef206e&o='),
(161, 'The Thorndon Hotel Wellington by Rydges', 1, 80, 23, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/142863075.jpg?k=dd39fff23584478089ddf85fc7291e80c32cc7ee5cdc2480febaa0e25a423853&o='),
(162, 'Oaks Wellington Hotel', 1, 94, 23, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/222473020.webp?k=5e37b804cc7f6fc6f0362a63dc7b46f88768e08d51a82b0730ba127634e74dd3&o='),
(163, 'Rydges Wellington', 2, 110, 23, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/54605507.jpg?k=0b73ed6d4e4c74b159eccf0abc11261c9c11167f600194d2f0f834b02a80b039&o='),
(164, 'Mercure Wellington Abel Tasman Hotel', 2, 119, 23, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/234743634.webp?k=420062cb5bc970adb0e7f15fd4ec0f3f99b2848be8338446735df01aae4ebd95&o='),
(165, 'YHA Wellington', 3, 57, 23, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/117970813.jpg?k=fdf10b558ec1c292f8eab6efbca8ac4988f9e66cc58fb748e927f5d80d9b18da&o='),
(166, 'Lodge in the City', 3, 32, 23, 6.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/22276413.webp?k=ca1f7dcd3944d1e7c69c3db2c943591b943b1f0383a981b6617e5f2e23945988&o='),
(167, 'Forrest Hotel & Apartments ', 1, 51, 24, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/41224268.webp?k=d5dc6b8d0f716699ef62fde2d70cebf3919c072d6bb9e4fa4e38eab32855ccd7&o='),
(168, 'Quality Hotel Dickson', 1, 105, 24, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/243137035.webp?k=e77bc88d7a81a3035978dbd5acc9041acefe84c6e033ed425047846908e95809&o='),
(169, 'Canberra Rex Hotel', 2, 80, 24, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/66945053.webp?k=f5f6ab1b6ca3c3ef2e26414c50e9bf91edee9202baf0c71d98e74c68136d9778&o='),
(170, 'Mantra MacArthur Hotel', 2, 88, 24, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/179092188.jpg?k=f8f031bda8d49377f842da2c566ec46b0582e74016646ef2907188856bdc8789&o='),
(171, 'Canberra City YHA', 3, 69, 24, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/135003441.jpg?k=796c219df121ae5f3b769c16c991159f11a2115cef171e3c46370a01ea6c3139&o='),
(172, 'Unilodge @ UC Short Stays', 3, 65, 24, 7.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/24992096.webp?k=de16a58d41dc77f1fd5ea333cb9e24b8769b19a9557a82dbbd957c7185f5b313&o='),
(173, 'Hotel Nelson', 1, 124, 25, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/209350316.webp?k=6af91710229d412f5965923e4a40a701326f8b5b06223c8e6ba6d185f152cb91&o='),
(174, 'Marina Resort', 1, 80, 25, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/222034109.webp?k=4e6b505c0537df1235228cc6ae1c8d3d3fc016d4fb95c0a4a48e9f5b4ede4fe2&o='),
(175, 'Bannisters Port Stephens', 2, 382, 25, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/236097824.jpg?k=4040be2997d32cca05578000477e8bc767d53e49e47e792bfcb8127965577d1e&o='),
(176, 'Tranquil Spa Retreat ', 2, 91, 25, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/243476519.webp?k=0b21467ebdcebc5c505605b6c430aea9e3ca9f1e3b19b8ba6abaa50721d664f5&o='),
(177, 'Budget Peninsula Palms Nelson Bay', 3, 69, 25, 7.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/109681339.jpg?k=3fe7613f46d2eb75b5f7917463a32c4573849c0f8c413de68cfd8e2a2ac4ebc4&o='),
(178, 'Admiral Nelson Motor Inn', 3, 96, 25, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/56941827.webp?k=394c7b0ce3788cc25737dc82894524be13fdc50b36ca26d2ee255360bff27729&o='),
(179, 'Executive Apartment', 1, 61, 26, 9.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/236674347.jpg?k=19fe0adf337654b92c63dec838e453d0b04d8fd25561af510ef4f7059e0bb87b&o='),
(180, 'Tanoa Plaza Hotel', 1, 91, 26, 8.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/40907713.jpg?k=9708cbd4194ee1c619d7878d3cd887aa5a2652ca83c634cfac784bb042f0ae72&o='),
(181, 'Grand Pacific Hotel', 1, 154, 26, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/214356069.jpg?k=f6d3be8ec4558f75bc01122029b2125501f07d071950e7f5321e7a785fcd1701&o='),
(182, 'Holiday Inn Suva', 2, 186, 26, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/245803670.jpg?k=ee11a1c7f67983d0dd03daca1fafa379dbef68a73c1db7e68f44068b4f4ab358&o='),
(183, 'Novotel Suva Lami Bay', 2, 67, 26, 7.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/139983411.jpg?k=0312d2689012ea3e77e822f3b696e39664d22d423784333573c12200fced3a73&o='),
(184, 'Southern Cross Hotel', 2, 71, 26, 6.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/22748138.jpg?k=eb9027869a347d946e0746daa32b84a37e0564759cb1999273568e945bdc7efd&o='),
(185, 'We Hotel Aeropuerto', 1, 74, 27, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/87558514.jpg?k=e323f40350b08ae650987336f5a1eebeef13ac96c0741573400b736a864d0d03&o='),
(186, 'Ibis Mexico Perinote', 2, 37, 27, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/97559772.jpg?k=688b4bf699a65b9ee23c3e137a7ec0378199f5f4c3452fba76c9edf4e7679871&o='),
(187, 'Ibis Mexico Tlalnepantla', 1, 34, 27, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/246310623.jpg?k=07269e443c46af7b6fcc3af47b7e709bf821f756a8ca7615264984278bb3feac&o='),
(188, 'Hostel La Selva', 3, 10, 27, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/157926475.jpg?k=0d7b35ae610836c50c2ba731631c209ff3ff21d07a74307b9ea484c264a8e4ab&o='),
(189, 'Hotel La Selva', 1, 23, 27, 7.8, 'https://q-cf.bstatic.com/images/hotel/max1024x768/199/19921761.jpg'),
(190, 'Hilton Mexico City Airport', 2, 165, 27, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/171694888.jpg?k=e63fedbcc2bd85708fe510eb4e2b2ead599495682da1436d93d795055ddc8a01&o='),
(191, 'Hotel del Principado Durango', 1, 25, 28, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/84472288.jpg?k=1186879650fdd635536d19a1739cafc24e7c92aa7325c56e9e2ae76a92b44ec8&o='),
(192, 'City Express Durango', 1, 35, 28, 8.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/121588703.jpg?k=fe366b71c7a518861303cf59fc4677aac68bd280876875486b506a69ab4f61aa&o='),
(193, 'Hotel Victoria Express', 1, 38, 28, 9.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/209782006.jpg?k=d7169ee95b9037f8cc85b86b152cf397bc95a6b0ec79d196f26970fcd2c6445e&o='),
(194, 'Hotel Rincon Real Suites', 2, 40, 28, 7.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/110074338.jpg?k=ff078e0dd1fac40355f113dbcdf16942e970b10fa0467bdd47004ca55fd8d3c8&o='),
(195, 'Grand Hotel Elizabeth', 2, 42, 28, 9.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/145389506.jpg?k=6a310d37a03866fdf9d0a6d421233d2363adf5a18c962a37debe503ef4b36abc&o='),
(196, 'Mision Express Durango', 2, 45, 28, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/120360880.jpg?k=744e224a2dc188f3781cb2c0c8c8efec09155a78a112b87d4916ff2e663b6801&o='),
(197, 'The Business Inn', 2, 75, 29, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/20267219.jpg?k=be1c5b8c49c094874f28ec5a07970e2e38ae175437a2dec389c2937b57065c4e&o='),
(198, 'ByWard Blue Inn', 2, 76, 29, 8.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/62006027.jpg?k=1060458bac7f1391031274cf8732b158f89d53b7977aa003ca730615e2a9260e&o='),
(199, 'Holiday Inn Express & Suites Ottawa East-Orleans', 2, 78, 29, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/233920938.jpg?k=7236231da08f238e50ff972e6dcdbf87535de4f6fab6f3d4be57000245e61e20&o='),
(200, 'WelcomINNS Ottawa', 1, 81, 29, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/239989802.jpg?k=cea628f06506b86217abc1af581d8cb3fc3043741820207b14dd27df187573b0&o='),
(201, 'Confort Inn Ottawa East', 1, 83, 29, 7.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/170445694.jpg?k=af0bf9c9352b2700bc84003303610d1735d32931e0b1d69841b4af01e5a17614&o='),
(202, 'Days Inn by Wyndham Ottawa Airport', 1, 86, 29, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/135454467.jpg?k=6283fe71b408d5c79dd1f69e554b33bfb9a0796eb42cae9476d456043a304263&o='),
(203, 'Super 8 by Wyndham Edmonton South', 1, 50, 30, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/201546776.jpg?k=8121233cfceb41531dc46883fc281791f81191a9ce5718be9257328a187e5641&o='),
(204, 'Howard Johnson by Wyndham Edmonton', 1, 54, 30, 7.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/181371314.jpg?k=1553366fc6af8aef09a6e0c4077a321fb23ba12cfc68d5f574ebf526ab57209a&o='),
(205, 'Travelodge by Wyndham Edmonton South', 1, 55, 30, 7.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/156641592.jpg?k=692f54cb313e3d0852eaefb212c4d648a9cd5d2c1206886de07cefce8a0285c2&o='),
(206, 'Best Western Cedar Park Inn', 2, 58, 30, 8.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/93456760.jpg?k=a06fd1a89940f94d1ebd061104214c0779737a631bf3beee9652c6164272d7d8&o='),
(207, 'Best Western Plus South Edmonton Inn & Suites', 2, 65, 30, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/163451013.jpg?k=dd9ce62322199c0fbf31befa1f78703b544ec76a379c43d2b7a15a67cd30b1df&o='),
(208, 'Super 8 by Wyndham Edmonton/West', 2, 67, 30, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/135965768.jpg?k=1c2acad510e5b1647a0d6916177f4982a5e2bbf9651b938016ef77212417a97e&o='),
(209, 'Quality Inn & Suites Laurel ', 1, 56, 31, 6.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/169856434.jpg?k=c059cd2fd2426715f18c3690a2173061b746f56bba747c548558aa0e0fb1b6c3&o='),
(210, 'Generator Hotel Washington DC', 1, 60, 31, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/237772996.jpg?k=0257b35971c972da33a78326f60586e1e94067885bb3e27ac688ba7747c7891b&o='),
(211, 'Super 8 by Wyndham Manassas', 1, 60, 31, 6.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/132448093.jpg?k=0f7e7d135f3d4afe16fa803343e807734132c6c03a81813ea2e40a08c4a090d5&o='),
(212, 'Extended Stay America - Washington, D.C. - Chantilly', 2, 61, 31, 6.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/94911530.jpg?k=90567628feffd23711126ffb605c70721cf270762cc8880861b6cd644adde514&o='),
(213, 'Days Inn by Wyndham Manassas Battlefield', 2, 61, 31, 6.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/137564983.jpg?k=286e8ab5ad3407ba0ce8e9eca865dbb878766624dbc71c4246348750bd86f6f4&o='),
(214, 'Days Inn Wyndham Alexandria South', 2, 63, 31, 7.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/157868630.jpg?k=a77be6e9bc1fee87ae3b4eec8502d6b6ef59fd4ed0ed5f6c9c3231011bf79adf&o='),
(215, 'Bay Hotel', 1, 49, 32, 6.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/205933272.jpg?k=6148f547d8f7efb939483a5b5f14ad9143b22b660bfcad0597f87c010ed8a1ce&o='),
(216, 'Marina Inn', 1, 52, 32, 6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/53167038.jpg?k=550ffe94b22ed8a9c8279a85992ffe813d6e4214a936df742f9d1de3aaa872b7&o='),
(217, 'Warfield Hotel', 1, 54, 32, 6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/92360367.jpg?k=71bbb7ed9447d382095aa538f9bb516ac3df79fe1212711063830a74284b7c83&o='),
(218, 'Inn on Folsom', 2, 75, 32, 6.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/27578976.jpg?k=4177ca1a56c547c33ae5cb85ba00f72bc4e9756935c7742e0162b219bfc56502&o='),
(219, 'Hotel Beresford', 2, 92, 32, 7.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/4593738.jpg?k=3b8c9d9ed54db6044d670205b160cbf3bf0d3980112777345ac98c081eb7205a&o='),
(220, 'Dakota Hostel ', 3, 97, 32, 7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/33461445.jpg?k=28922734278d5e5c40e86cd8e6ddf9bd1451814e7f7e193250141c51d2420d99&o='),
(221, 'Super 8 by Wyndham Los Angeles/Alhambra', 2, 73, 33, 7.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/138397003.jpg?k=f6de07e84735652324cf06135b038d74a6a77bb78f102c4b5a512097184a3dcf&o='),
(222, 'Rodeway Inn Los Angeles Convention Center', 2, 81, 33, 7.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/170439149.jpg?k=5b93ddaa0c3550904b23b58d1c1ab8d6b4d0ad133bacdb496366f2b7256b0ebc&o='),
(223, 'Hollywood VIP Hotel', 2, 84, 33, 5.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/141305091.jpg?k=71b5ad1720c3fd7f8a380c2038f3e29cd9822da3c111cd79da3707ebece47577&o='),
(224, 'Days Inn by Wyndham Los Angeles LAX/VeniceBeach/MarinaDelRay', 1, 85, 33, 6.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/135439394.jpg?k=2468ec1852aaf20f4925576731b2777c43437a923c1604f0ed115280bdeeffc2&o='),
(225, 'Ramada by Wyndham Los Angeles/Downtown West', 1, 85, 33, 7.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/135127849.jpg?k=c9e94b02fc849aee851aba75074e5fea65e78b66279a2be9cf942db06602331d&o='),
(226, 'Best Western Plus Dragon Gate Inn', 1, 85, 33, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/155028329.jpg?k=9166f632d54983993e7b1e1b7ddfd04200b2cd89e2816a68c0b36d540baa1a61&o='),
(227, 'Hotel Luisiana', 2, 55, 34, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/124454933.jpg?k=17c4a5e5ed33e83ea8a7a9ffe9b52743212e5da9dd6162492984d2001c66815d&o='),
(228, 'Nuevo Maragato Hotel', 2, 28, 34, 7.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/172850510.jpg?k=d2faff931224455f756f6cdc122a0c382d40fd4dc92110138d03aae6858f3c8c&o='),
(229, 'Nuevo Maragato Hostel', 3, 10, 34, 7.9, 'https://q-cf.bstatic.com/images/hotel/max1024x768/172/172850566.jpg'),
(230, 'DSCVR - The Garden San Jose', 1, 16, 34, 9.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/221502579.jpg?k=fe7c5f6f92ecd81d118dd3f10f97778d8f7aff55cf8ef4f824eb351b78b82c61&o='),
(231, 'Hostel La Corte', 3, 19, 34, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/228533324.jpg?k=451f0156f8abb794c1f40b87d72a01adc63aecf1cb8c10a6a4237eb8887b70e5&o='),
(232, 'Selina San Jose', 1, 19, 34, 8.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/248864512.jpg?k=d97def03042a640965f664947045324e721492dccaf94b44fb1fe27101987cf8&o='),
(233, 'Hilton Garden Inn Liberia Airport', 1, 108, 35, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/98753400.jpg?k=7a82150c49189ab3fedf2c47d4b415afd537d70833b99417ca426dcba87eb90e&o='),
(234, 'Hotel Las Espuelas, Bar & Restaurant', 1, 52, 35, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/19349585.jpg?k=266c95af6e9b2e2641fdfd8fce628c4792b500fb4a016ee21375b0205a2abcb3&o='),
(235, 'Blue River Resort & Hot Springs', 1, 106, 35, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/238964389.jpg?k=182606e1aa20322e9574fd971590d603c71fefa706c62a36901581c40db6940a&o='),
(236, 'Hotel Villa Hermosa', 2, 39, 35, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/115860562.jpg?k=b8aa8ffda69176a3e4944e4fbbde426a71966beb4c51b9a16c6e69374e8f84da&o='),
(237, 'Balbo\'s', 3, 11, 35, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/193780343.jpg?k=f67299ffa0690bea96a7095b8087985d04addbaa27fd06a8bfac39ab2fc0bdcb&o='),
(238, 'Hotel Cabanas La Teca', 2, 78, 35, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/208094381.jpg?k=0dd324dfe37cb9eaa09cd04e92fa25e8ad773fe4a8f639bc0f04df3c22e4a32b&o='),
(239, 'Edificio Twins Apartamentos', 2, 50, 35, 7.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/235391859.jpg?k=a0b440e8642587999aecc658cb579399730df1da7ab94d6c2a119f371e6915da&o='),
(240, 'Manyaku Hostel', 3, 14, 36, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/194099898.jpg?k=0782d03c74420c880b559f7e2ad8da1f4d1c7bc2a72ca3efb6c9a8325f2eee21&o='),
(241, 'Orison Managua', 3, 16, 36, 7.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/231860881.jpg?k=20b922c92001bc5032c53d3ef0a756373e426819d8d864db3a7363deee12b027&o='),
(242, 'Airport X Managua', 1, 44, 36, 8.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/135240895.jpg?k=e17c1addd73be28c0332b0a161059b48a9fb2d9e5ad63150a9ebaf54400b2477&o='),
(243, 'Best Western Las Mercedes Airport', 1, 108, 36, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/155203358.jpg?k=7983d5239adb3b539fcb63bd245bd47f2e199296ddde6fc56b8477e36621255f&o='),
(244, 'Hotel Mozonte', 2, 41, 36, 7.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/158684899.jpg?k=de7b03f6986214be312240348dcc0b47a1514983e264ae887bca38a26f7588cc&o='),
(245, 'Wayak Hotel ', 2, 59, 36, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/94465926.jpg?k=2ef250a3e02f4620e3313d0fff3395a5f2ff872b5530984ec1726fe787705b7d&o='),
(246, 'Eden\'s Garden Hostal', 3, 10, 37, 9.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/248865350.jpg?k=5b35e9b6b57647d75f54872be30f864a164d1be9012c78bb5cda1ee32d7f15ea&o='),
(247, 'Hostal Armonia', 3, 12, 37, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/209571347.jpg?k=330f8df3c953a1978f6679b365c86525b1ba98cfb51a19082b033267cce3b3fa&o='),
(248, 'Hotel San Remo', 1, 36, 37, 6.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/91962979.jpg?k=410279bf319c17d91442a2f6d71cb45e01cf30f43953f96c968299db1b2e3ea8&o='),
(249, 'Oriental Panama City', 1, 61, 37, 8.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/202375113.jpg?k=796bb4ae910b57c262a59087a175d6407e619faf492c114dbdf56e50dfda9d7e&o='),
(250, 'Hotel Sercotel Panama Princess', 2, 67, 37, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/81441590.jpg?k=17f2553bd3b6881c1ed2dba926f2dc8d047ec9889029c8b9bd34b1d31f92eef0&o='),
(251, 'Hotel Caribe Panama', 2, 45, 2, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/152010392.jpg?k=866d5819291e774fc0a4750bccfe6a659fd83af06ec8d9134c9a3093fef373ce&o='),
(252, 'Tequila Sunrise Hostel', 3, 6, 38, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/91599466.jpg?k=9c14dbd37de47f3c6e0fea6ac1122964e7ef13357f06c22fed42cf70c8859910&o='),
(253, 'Capsule Hostel', 3, 6, 38, 8.3, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/182381214.jpg?k=2685a125cb5000548926c251f173ae895a659b8e6db155a9d2ab305389a7c68a&o='),
(254, 'Barcelo Guatemala City', 1, 118, 38, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/103828980.jpg?k=fa3cd7e8cce130ccca549225b743a7ef12a808c1ea69d4b9be3e717c0e143793&o='),
(255, 'AC Hotels by Marriott Guatemala City', 1, 123, 38, 8.7, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/119458566.jpg?k=daf29a0903d9f92407eb96cabff986881c8080bf2ac8aac7523e616dbd8108d8&o='),
(256, 'Hotel y Cafeteria Reforma', 2, 18, 38, 5.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/120910188.jpg?k=7b4c697bbe009adcf598560a2186e066ad2d25d7e13a113ffa537f4e95779cdc&o='),
(257, 'Hotel Colonial Maya', 2, 6, 38, 6.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/139130485.jpg?k=c0f56d1d0e68459578bd96a22ccdbe174cda253d2efd9acfae33c7528e8af664&o='),
(258, 'Hostel A Cozinha de Cora', 3, 12, 39, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/224913342.jpg?k=9b262c83d035d0ff32738da32184d4241b90a4dd4ddcc790a39a7937be2cd9c0&o='),
(259, 'Hostelplan', 3, 12, 39, 9.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/183011293.jpg?k=a425cb50e6436474be344f0687a9db460be37a654560303bd959ccd532551603&o='),
(260, 'Windsor Brasilia Hotel', 1, 62, 39, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/50520305.jpg?k=2a58dda4154133f7a5c9f38f50d44dd1adaffe5fc86cd4b3e72b1786e081ced6&o='),
(261, 'Aristus Hotel', 1, 24, 39, 8.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/120122220.jpg?k=4aea57907f29dd6cc2fe59ab78b320ef4218349f6f3efe8de2eebbe94b333d6c&o='),
(262, 'Fusion Hplus Express plus', 2, 37, 39, 8.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/40709084.jpg?k=70c1937cf13f6ab1bed50a579dc9f000eec8cc76b8865ce1e377d5e7c330f925&o='),
(263, 'Metropolitan Hotel Brasilia', 2, 40, 39, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/97963528.jpg?k=4b1b0cf4c8fc4fc1c4b5ee3c76ed324f53244b6d6adad6e1cd312d93e8ce931b&o='),
(264, 'North Palace Hotel', 1, 15, 40, 7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/53563679.jpg?k=8869ba1ed094190dba4f140b5ee48bb1bef9e6b51a972584a1fbd3c0634a8799&o='),
(265, 'Nobile Downtown São Paulo', 1, 42, 40, 8.2, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/225601566.webp?k=23d3a5c57f43a3029c71a6ea085b974c1af8043d72e8f0f5e00a63394809d10d&o='),
(266, 'Estanplaza Ibirapuera', 2, 49, 40, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/219863269.jpg?k=d867a870fb953a825462e7ed4ce7c3b8953343e83dfb6f243c7416f70c293b48&o='),
(267, 'Astron Saint Charbel Sui­tes & Life', 2, 78, 40, 8.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/8671042.webp?k=7b4838986c2e42f9518603009b4317163dbf30a00cea81dbac8c3ee567509443&o=');
INSERT INTO `estancias` (`id`, `nombre`, `tipo`, `precio`, `ubicacion`, `puntuacion`, `imagen`) VALUES
(268, 'EDi’s House', 3, 22, 40, 9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/181461506.jpg?k=e06c81ce8438d93c72ff871553a911bc549a19ff5a5452242b37d40c15272a3c&o='),
(269, 'Jardins Village Hostel - Unidade Pinheiros', 3, 25, 40, 8.3, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/109878655.webp?k=5729848e6b0f92507d3fa677640f1cd92391eb4dc0bf8734b0a548135b73dec5&o='),
(270, 'Ayenda 1045 Boutique Aeropuerto', 1, 18, 41, 8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/217531573.jpg?k=af6296317631587b10518b53c8d76591927b732b8334e56fb4bbd0a390626071&o='),
(271, 'Hotel Regina', 1, 29, 41, 8.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/179554599.webp?k=d8f08666555915b2b54b5558a3c68c6d93f6af685db01f73cb3e2ed394453c46&o='),
(272, 'Hotel Embajada Real', 2, 18, 41, 7.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/26090140.jpg?k=22af25307f6a94a740f3138e0c9da09494887fa6d1b0c1095d1604266ba73c22&o='),
(273, 'Hotel Habitel Select', 2, 50, 41, 8.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/163314221.webp?k=3760df0f0dbdd743c5ff9903826b11fa197776610bad90fd09a289afb1eb5ae0&o='),
(274, 'Casa De Ari', 3, 9, 41, 6.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/145065718.jpg?k=6261458de0571db488f8b62c9de7acc604959c110510a8d448a62ba41c62f262&o='),
(275, 'Arca House ', 3, 18, 41, 9.7, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/226725038.webp?k=38aa01763c7bf6935bd80bb5133cfcaa7e6f687d4713ed9116a1438e870501ca&o='),
(276, 'Hotel Don Toño Tolú ', 1, 37, 42, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/96827767.jpg?k=0ea80dc251fc25dcca635733e527b8eb5fe26ee36fdcf11b329f954f61371101&o='),
(277, 'Hosteria Villa Real Tolú ', 1, 82, 42, 8.5, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/162199218.webp?k=60fb424b3d16cb2e1daf31530036253a880e9de7ffe5b1ed30866e788a80bb05&o='),
(278, 'Hotel Soleira', 2, 104, 42, 8.6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/70619613.jpg?k=e6b58f89a215548da4ea7755d59d36d490516fc17da2f8af4175225f30afefa2&o='),
(279, 'Loa Hotel', 2, 69, 42, 8.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/229174994.webp?k=96c8b24a1eff202fdda9a5e1d3f21ab17dc80c7ad273c594f13878803898f75b&o='),
(280, 'Hostal LoLy ', 3, 18, 42, 6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/247250981.jpg?k=9b0d76ac5d7b9b7dc9d678a5438d967873f10623843ae652236e81492c14e1bd&o='),
(281, 'THE CHEAPO ', 3, 11, 42, 6, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/216141448.webp?k=baa77344c3f928c8dcf8a04b66cc87ca5be65a49ddfff1696d871ecc7a0d53f7&o='),
(282, 'Le B Club Boutique & Terrasse', 1, 44, 43, 7.9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/157544545.jpg?k=f9f39bc0e8dfd620c2cb1509c9414d6842b3e732c408cd5f8f84f378f79cc0e3&o='),
(283, 'Unique Executive Central', 1, 67, 43, 7.8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/111776107.webp?k=09bc275a764ef4dfd80e786bac26e8b5e96966ff63a854531bc427a5101ce5bb&o='),
(284, 'Infinito Hotel', 2, 116, 43, 8.1, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/36074319.webp?k=b3db8912aed169992799147e320d62b0e3eb9341f54283d5a2f90b4b28be81fe&o='),
(285, 'Hotel Pacifico', 2, 28, 43, 7.5, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/47370341.webp?k=2cefe4fed4aaacc6ea4c05c2f18f8354b30c43756de0c19728541e466c092ddc&o='),
(286, 'Che Juan Hostel BA', 3, 33, 43, 9.6, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/201123762.jpg?k=c8c5fd6473c0e4da5a3d017db4fa6e2ea722385952c554f38900acbff9f86b57&o='),
(287, 'Hostel Congreso', 3, 13, 43, 8.1, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/242569086.webp?k=9b82f8820d9cf818a7c9d9ca78fe9fa61d2a8833e9560bfb5f93f6a9c17ae03e&o='),
(288, 'Hostería Aonikenk', 1, 44, 44, 8.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/206798649.jpg?k=e38362bb603a987ac76e29131a3f49446ba03fe5f304ce60ffd6e5287f9e4d34&o='),
(289, 'Del Bosque Apart Hotel', 1, 42, 44, 8.8, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/1919580.webp?k=c1ba376c237cbf1cd016a33f9069c0c3a36de2ace91a93ce9389dab28e565aef&o='),
(290, 'Hosteria Kupanaka', 2, 51, 44, 8.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/165744886.webp?k=97fd626506529525005a10fcd2205843e5e583d5c9abaf76330800d08222f2f3&o='),
(291, 'Las Hayas Ushuaia Resort', 2, 199, 44, 9, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/227940923.webp?k=c20e08670c404d7b7db6b24ead218227839dfd0e2bc4e485633aaf6c38530891&o='),
(292, 'carretero', 3, 22, 44, 6.4, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/243634937.jpg?k=ca000302d3d7903365688f277d55a4025da7288508960516518329339a2e3a4b&o='),
(293, 'Dulce Hogar II', 3, 24, 44, 8.9, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/241224104.webp?k=2fd88cdab9ebe6b67b15b5b9104069bd338b7fb1a0a75ffecc2b10b58f5d4954&o='),
(294, 'Juba Landmark Hotel', 1, 181, 45, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/235718423.jpg?k=b6aef341da71123049503918c45a23653397377aba3c66c9824f31f385f3b763&o='),
(295, 'Juba Oscar Hotel', 1, 109, 45, 8, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/155930446.webp?k=07dd6d82ddde4fa130a0475f60691929385ede7a1d598569e532b588545117d8&o='),
(296, 'Aron International Hotel', 3, 109, 45, 7.2, 'https://r-cf.bstatic.com/xdata/images/hotel/square200/168738831.webp?k=efd4d47531b875bd841f3d0d66c5bacc83f9035cab0c22f3d96c52f8d4687fd5&o='),
(297, 'Pyramid Continental Hotel', 2, 261, 45, 8.4, 'https://q-cf.bstatic.com/xdata/images/hotel/square200/215177759.webp?k=e255c3c416909ee87c21a02e80a10604c94fa8d1e8cd0f4add330973006e24b5&o=');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `codigo_continente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre`, `codigo_continente`) VALUES
(1, 'italia', 1),
(2, 'grecia', 1),
(3, 'holanda', 1),
(4, 'japon', 3),
(5, 'china', 3),
(6, 'corea del sur', 3),
(7, 'sudan', 4),
(8, 'marruecos', 4),
(9, 'tunez', 4),
(10, 'fiyi', 5),
(11, 'australia', 5),
(12, 'nueva zelanda', 5),
(13, 'canada', 2),
(14, 'mexico', 2),
(15, 'estados unidos', 2),
(16, 'costa rica', 2),
(17, 'nicaragua', 2),
(18, 'panama', 2),
(19, 'guatemala', 2),
(20, 'brasil', 2),
(21, 'argentina', 2),
(22, 'colombia', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `id_usuario`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 1, '2020-03-11', '2020-03-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas_estancias`
--

CREATE TABLE `reservas_estancias` (
  `id_reserva` int(11) NOT NULL,
  `id_estancia` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas_viajes`
--

CREATE TABLE `reservas_viajes` (
  `id_reserva` int(11) NOT NULL,
  `id_viaje` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_estancias`
--

CREATE TABLE `tipo_estancias` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_estancias`
--

INSERT INTO `tipo_estancias` (`id`, `tipo`) VALUES
(1, 'HOTEL'),
(2, 'DESAYUNO INCLUIDO'),
(3, 'ALBERGUE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuarios`
--

CREATE TABLE `tipo_usuarios` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_usuarios`
--

INSERT INTO `tipo_usuarios` (`id`, `tipo`) VALUES
(1, 'normal'),
(2, 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `apodo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `dni` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contrasenia` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `apodo`, `nombre`, `apellidos`, `dni`, `correo`, `contrasenia`, `tipo`) VALUES
(1, 'tukeplayer', 'eukene', 'padilla martin', '34236123D', 'esto@gmail.com', '1234', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vuelos`
--

CREATE TABLE `vuelos` (
  `id` int(11) NOT NULL,
  `precio` double NOT NULL,
  `ubicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `vuelos`
--

INSERT INTO `vuelos` (`id`, `precio`, `ubicacion`) VALUES
(1, 155, 1),
(2, 125, 2),
(3, 90, 3),
(4, 165, 4),
(5, 573, 5),
(6, 107, 6),
(7, 376, 7),
(8, 603, 8),
(9, 627, 9),
(10, 627, 10),
(11, 590, 11),
(12, 590, 12),
(13, 658, 13),
(14, 727, 14),
(15, 1904, 15),
(16, 590, 16),
(17, 590, 17),
(18, 590, 18),
(19, 224, 19),
(20, 99, 20),
(21, 215, 21),
(22, 1700, 22),
(23, 1425, 23),
(24, 1015, 24),
(25, 1289, 25),
(26, 7000, 26),
(27, 326, 27),
(28, 530, 28),
(29, 465, 29),
(30, 1422, 30),
(31, 440, 31),
(32, 597, 32),
(33, 660, 33),
(34, 675, 34),
(35, 630, 35),
(36, 653, 36),
(37, 594, 37),
(38, 488, 38),
(39, 746, 39),
(40, 576, 40),
(41, 716, 41),
(42, 663, 42),
(43, 886, 43),
(44, 1078, 44);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo_continente` (`codigo_continente`),
  ADD KEY `codigo_pais` (`codigo_pais`);

--
-- Indices de la tabla `continentes`
--
ALTER TABLE `continentes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estancias`
--
ALTER TABLE `estancias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`),
  ADD KEY `ubicacion` (`ubicacion`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `codigo_continente` (`codigo_continente`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `reservas_estancias`
--
ALTER TABLE `reservas_estancias`
  ADD KEY `id_reserva` (`id_reserva`),
  ADD KEY `id_estancia` (`id_estancia`);

--
-- Indices de la tabla `reservas_viajes`
--
ALTER TABLE `reservas_viajes`
  ADD KEY `id_viaje` (`id_viaje`),
  ADD KEY `id_reserva` (`id_reserva`);

--
-- Indices de la tabla `tipo_estancias`
--
ALTER TABLE `tipo_estancias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuarios`
--
ALTER TABLE `tipo_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ubicacion` (`ubicacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estancias`
--
ALTER TABLE `estancias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=298;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tipo_usuarios`
--
ALTER TABLE `tipo_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD CONSTRAINT `ciudades_ibfk_1` FOREIGN KEY (`codigo_continente`) REFERENCES `continentes` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `ciudades_ibfk_2` FOREIGN KEY (`codigo_pais`) REFERENCES `paises` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `estancias`
--
ALTER TABLE `estancias`
  ADD CONSTRAINT `estancias_ibfk_1` FOREIGN KEY (`ubicacion`) REFERENCES `ciudades` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `estancias_ibfk_2` FOREIGN KEY (`tipo`) REFERENCES `tipo_estancias` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `paises`
--
ALTER TABLE `paises`
  ADD CONSTRAINT `paises_ibfk_1` FOREIGN KEY (`codigo_continente`) REFERENCES `continentes` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservas_estancias`
--
ALTER TABLE `reservas_estancias`
  ADD CONSTRAINT `reservas_estancias_ibfk_1` FOREIGN KEY (`id_estancia`) REFERENCES `estancias` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_estancias_ibfk_2` FOREIGN KEY (`id_reserva`) REFERENCES `reservas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `reservas_viajes`
--
ALTER TABLE `reservas_viajes`
  ADD CONSTRAINT `reservas_viajes_ibfk_2` FOREIGN KEY (`id_reserva`) REFERENCES `reservas` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `reservas_viajes_ibfk_3` FOREIGN KEY (`id_viaje`) REFERENCES `vuelos` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipo_usuarios` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD CONSTRAINT `vuelos_ibfk_1` FOREIGN KEY (`ubicacion`) REFERENCES `ciudades` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
