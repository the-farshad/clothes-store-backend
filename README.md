# clothes-store-backend

Build the docker image form the Docker file with the below command:

## 1
* run that command in project directory:
``` 
sudo docker build . -t thefarshad/nodejs
```

## 2

* And then Docker Compose run
```
sudo docker-compose up --build
```

> All of things ready

Check api on port 8080

Check phpMyAdmin on port 3306

## 3
* run that on phpMyAdmin

```
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+03:00";

-- Database: `mySQL_db`
-- Table structure for table `ITEM_TABLES`

CREATE TABLE `ITEM_TABLES` (
  `ITEM_NAME` varchar(50) NOT NULL,
  `ITEM_DESC` varchar(100) NOT NULL,
  `ITEM_ONHAND` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table `ITEM_TABLES`

INSERT INTO `ITEM_TABLES` (`ITEM_NAME`, `ITEM_DESC`, `ITEM_ONHAND`) VALUES
('TEST-ITEM-1', 'TEST-ITEM-DESC-1', 10),
('TEST-ITEM-2', 'TEST-ITEM-DESC-2', 20);
COMMIT;
```