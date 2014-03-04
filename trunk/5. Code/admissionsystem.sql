/*
Navicat MySQL Data Transfer

Source Server         : AdmissionSystem
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : admissionsystem

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2014-03-04 10:12:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `dictionary`
-- ----------------------------
DROP TABLE IF EXISTS `dictionary`;
CREATE TABLE `dictionary` (
  `DicID` int(10) NOT NULL,
  `QuanLyID` int(10) NOT NULL,
  PRIMARY KEY (`DicID`),
  KEY `QuanlyID` (`QuanLyID`),
  CONSTRAINT `QuanlyID` FOREIGN KEY (`QuanLyID`) REFERENCES `manageanswer` (`QuanlyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dictionary
-- ----------------------------

-- ----------------------------
-- Table structure for `manageanswer`
-- ----------------------------
DROP TABLE IF EXISTS `manageanswer`;
CREATE TABLE `manageanswer` (
  `QuanlyID` int(10) NOT NULL,
  `NguoiTraLoi` int(10) NOT NULL,
  `CauHoi` text NOT NULL,
  `NguoiHoi` text NOT NULL,
  `CauTraLoi` text,
  `ThoiGian` datetime NOT NULL,
  `TrangThai` int(11) NOT NULL,
  PRIMARY KEY (`QuanlyID`),
  KEY `NguoiTraLoi` (`NguoiTraLoi`),
  CONSTRAINT `NguoiTraLoi` FOREIGN KEY (`NguoiTraLoi`) REFERENCES `user` (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manageanswer
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `UserID` int(10) NOT NULL,
  `HoVaTen` text NOT NULL,
  `TenDangNhap` varchar(50) NOT NULL,
  `MatKhau` varchar(50) NOT NULL,
  `Quyen` int(11) DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
