-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2023 a las 18:44:27
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `simuladorcreditos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id_adm` int(11) NOT NULL,
  `nom_adm` varchar(50) NOT NULL,
  `ape_adm` varchar(50) NOT NULL,
  `dir_adm` varchar(50) NOT NULL,
  `tel_adm` double NOT NULL,
  `email_adm` varchar(30) NOT NULL,
  `cont_adm` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`id_adm`, `nom_adm`, `ape_adm`, `dir_adm`, `tel_adm`, `email_adm`, `cont_adm`) VALUES
(1801, 'Juan', 'Zapata', 'Huachi', 9874563, 'j@gmail.com', 'juan12345'),
(1802, 'Kevin', 'Saquinga', 'Izamba', 98745, 'k@gmail.com', 'kevin12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_credito`
--

CREATE TABLE `tipo_credito` (
  `id_tip_cred` int(11) NOT NULL,
  `nom_cred` varchar(50) NOT NULL,
  `tasa_int` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipo_credito`
--

INSERT INTO `tipo_credito` (`id_tip_cred`, `nom_cred`, `tasa_int`) VALUES
(1, 'Estudiantil', 12.4),
(2, 'Consumo', 14);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id_adm`);

--
-- Indices de la tabla `tipo_credito`
--
ALTER TABLE `tipo_credito`
  ADD PRIMARY KEY (`id_tip_cred`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
