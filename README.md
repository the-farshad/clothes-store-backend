# clothes-store-backend

Build the docker image form the Docker file with the below command:

## 1

- run that command in project directory:

```
sudo docker build . -t thefarshad/nodejs
```

## 2

- And then Docker Compose run

```
sudo docker-compose up --build
```

> All of things ready

Check api on port 8080

Check phpMyAdmin on port 3306
**Username: mySQL-username**
**Password: mySQL-password**

## 3

- Run that on phpMyAdmin

```
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+03:00";

-- Database: `shopping_store`

CREATE DATABASE shopping_store;

-- Table structure for table `stores`


CREATE TABLE `shopping_store`.`stores`(
    `id` BIGINT NOT NULL,
    `storeName` VARCHAR(30) NOT NULL,
    `imageUrl` VARCHAR(2083),
    `metaTitle` VARCHAR(100) NULL,
    `slug` VARCHAR(100) NOT NULL,
    `mobile` VARCHAR(15),
    `street` INT(255),
    `city` INT(50),
    `state` INT(50),
    `zipCode` INT(10),
    `phone` INT(15) NOT NULL,
    `email` INT(50),
    `status` BOOLEAN NOT NULL DEFAULT TRUE,
    `joinedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `createdBy` VARCHAR(50) NOT NULL,
    `description` VARCHAR(2083),
    UNIQUE INDEX `uq_phone` (`phone` ASC),
    UNIQUE INDEX `uq_store_name` (`storeName` ASC),
    UNIQUE INDEX `uq_slug` (`slug` ASC),
    PRIMARY KEY(`id`)
) ENGINE = InnoDB CHARSET = utf8;


-- Table structure for table `product`

CREATE TABLE `shopping_store`.`product` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `storeId` BIGINT NOT NULL,
  `title` VARCHAR(75) NOT NULL,
  `metaTitle` VARCHAR(100) NULL,
  `slug` VARCHAR(100) NOT NULL,
  `summary` TINYTEXT NULL,
  `type` SMALLINT(6) NOT NULL DEFAULT 0,
  `sku` VARCHAR(100) NOT NULL,
  `price` FLOAT NOT NULL DEFAULT 0,
  `discount` FLOAT NOT NULL DEFAULT 0,
  `quantity` SMALLINT(6) NOT NULL DEFAULT 0,
  `shop` TINYINT(1) NOT NULL DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NULL DEFAULT NULL,
  `publishedAt` DATETIME NULL DEFAULT NULL,
  `startsAt` DATETIME NULL DEFAULT NULL,
  `endsAt` DATETIME NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `uq_slug` (`slug` ASC),
  INDEX `idx_product_shop` (`storeId` ASC),
  CONSTRAINT `fk_product_user`
    FOREIGN KEY (`storeId`)
    REFERENCES `shopping_store`.`stores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)ENGINE = InnoDB CHARSET = utf8;


-- Table structure for table `category`

CREATE TABLE `shopping_store`.`category`(
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `parentId` BIGINT NULL DEFAULT NULL,
    `title` VARCHAR(75) NOT NULL,
    `metaTitle` VARCHAR(100) NULL DEFAULT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NULL DEFAULT NULL,
    PRIMARY KEY(`id`)
) ENGINE = InnoDB CHARSET = utf8; ALTER TABLE
    `shopping_store`.`category` ADD INDEX `idx_category_parent`(`parentId` ASC);
ALTER TABLE
    `shopping_store`.`category` ADD CONSTRAINT `fk_category_parent` FOREIGN KEY(`parentId`) REFERENCES `shopping_store`.`category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Table structure for table `product_category`

CREATE TABLE `shopping_store`.`product_category`(
    `productId` BIGINT NOT NULL,
    `categoryId` BIGINT NOT NULL,
    PRIMARY KEY(`productId`, `categoryId`),
    INDEX `idx_pc_category`(`categoryId` ASC),
    INDEX `idx_pc_product`(`productId` ASC),
    CONSTRAINT `fk_pc_product` FOREIGN KEY(`productId`) REFERENCES `shopping_store`.`product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT `fk_pc_category` FOREIGN KEY(`categoryId`) REFERENCES `shopping_store`.`category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB CHARSET = utf8;


-- Dumping data for table `stores`
```
