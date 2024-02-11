-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2024 at 12:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lba_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `lba_category`
--

CREATE TABLE `lba_category` (
  `category_id` varchar(36) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `image_id` varchar(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lba_image`
--

CREATE TABLE `lba_image` (
  `image_id` varchar(36) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  `carousel_flag` varchar(1) NOT NULL,
  `original_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lba_order`
--

CREATE TABLE `lba_order` (
  `order_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lba_product`
--

CREATE TABLE `lba_product` (
  `product_id` varchar(36) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(150) NOT NULL,
  `category_id` varchar(36) DEFAULT NULL,
  `product_cost` int(11) NOT NULL,
  `product_deleted_flag` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lba_product_images`
--

CREATE TABLE `lba_product_images` (
  `product_image_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `image_id` varchar(36) NOT NULL,
  `primary_image_flag` enum('Y') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lba_user`
--

CREATE TABLE `lba_user` (
  `user_id` varchar(36) NOT NULL,
  `user_display_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_phone` varchar(10) NOT NULL,
  `user_deleted_flag` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lba_category`
--
ALTER TABLE `lba_category`
  ADD PRIMARY KEY (`category_id`),
  ADD KEY `image_id` (`image_id`);

--
-- Indexes for table `lba_image`
--
ALTER TABLE `lba_image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `lba_order`
--
ALTER TABLE `lba_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `lba_product`
--
ALTER TABLE `lba_product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `lba_product_images`
--
ALTER TABLE `lba_product_images`
  ADD PRIMARY KEY (`product_image_id`),
  ADD UNIQUE KEY `unique_combi_keys` (`product_id`,`image_id`) USING BTREE,
  ADD KEY `image_id` (`image_id`);

--
-- Indexes for table `lba_user`
--
ALTER TABLE `lba_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lba_category`
--
ALTER TABLE `lba_category`
  ADD CONSTRAINT `lba_category_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `lba_image` (`image_id`) ON DELETE SET NULL;

--
-- Constraints for table `lba_order`
--
ALTER TABLE `lba_order`
  ADD CONSTRAINT `lba_order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `lba_user` (`user_id`),
  ADD CONSTRAINT `lba_order_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `lba_product` (`product_id`);

--
-- Constraints for table `lba_product`
--
ALTER TABLE `lba_product`
  ADD CONSTRAINT `lba_product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `lba_category` (`category_id`) ON DELETE SET NULL;

--
-- Constraints for table `lba_product_images`
--
ALTER TABLE `lba_product_images`
  ADD CONSTRAINT `lba_product_images_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `lba_image` (`image_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lba_product_images_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `lba_product` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
