-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.5.0.5220
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 h5db 的数据库结构
CREATE DATABASE IF NOT EXISTS `h5db` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `h5db`;

-- 导出  表 h5db.admin 结构
CREATE TABLE IF NOT EXISTS `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'id,唯一标识',
  `username` char(20) NOT NULL COMMENT '用户名',
  `imgurl` char(200) DEFAULT NULL COMMENT '用户头像',
  `password` char(30) NOT NULL COMMENT '密码',
  `status` int(10) DEFAULT '0' COMMENT '状态码，是否删除',
  `lasttime` datetime DEFAULT NULL COMMENT '最近一次登录时间',
  `loginnums` bigint(20) DEFAULT '0' COMMENT '总共登录次数',
  `deptid` int(10) DEFAULT NULL COMMENT '部门ID',
  `number` char(30) DEFAULT NULL COMMENT '人员编号',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='管理员账户管理\r\n\r\nselect * from admin where username=1234567';

-- 正在导出表  h5db.admin 的数据：9 rows
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `username`, `imgurl`, `password`, `status`, `lasttime`, `loginnums`, `deptid`, `number`) VALUES
	(1, '李俊玲', NULL, '123456', 0, '2019-01-23 00:00:00', 1, NULL, NULL),
	(2, 'sish', NULL, '123456', 0, '2019-01-25 09:36:34', 7, NULL, NULL),
	(3, '123456', NULL, '123456', 0, NULL, 0, NULL, NULL),
	(4, 'huyz', NULL, '123456', 0, NULL, 0, NULL, NULL),
	(5, 'wangjiejie', NULL, '123456&Q_', 0, NULL, 0, NULL, NULL),
	(6, 'sishuihua', 'http://localhost:8888/uploads/1577504592388_635635.jpg', 'sish123*_', 0, NULL, 0, NULL, NULL),
	(7, 'sishui', 'http://localhost:8888/uploads/1577504592388_635635.jpg', 'sish123456_', 0, NULL, 0, NULL, NULL),
	(8, 'sishsish', 'http://localhost:8888/uploads/1577505273161_787111.jpg', 'sish123456_', 0, NULL, 0, NULL, NULL),
	(9, 'sishsis', 'http://localhost:8888/uploads/1577505355706_599242.jpg', 'sish1234_', 0, NULL, 0, NULL, NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 导出  表 h5db.dept 结构
CREATE TABLE IF NOT EXISTS `dept` (
  `dptid` int(11) NOT NULL AUTO_INCREMENT,
  `dname` char(50) NOT NULL,
  PRIMARY KEY (`dptid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='部门信息';

-- 正在导出表  h5db.dept 的数据：6 rows
/*!40000 ALTER TABLE `dept` DISABLE KEYS */;
INSERT INTO `dept` (`dptid`, `dname`) VALUES
	(1, '教学部'),
	(2, '教务部'),
	(3, '就业部'),
	(4, '行政部'),
	(5, '人事部'),
	(6, '网络部');
/*!40000 ALTER TABLE `dept` ENABLE KEYS */;

-- 导出  表 h5db.duty 结构
CREATE TABLE IF NOT EXISTS `duty` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '唯一标识id',
  `name` varchar(255) NOT NULL COMMENT '职务名称',
  `status` int(20) NOT NULL DEFAULT '0' COMMENT '是否删除，0否',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='职务';

-- 正在导出表  h5db.duty 的数据：4 rows
/*!40000 ALTER TABLE `duty` DISABLE KEYS */;
INSERT INTO `duty` (`id`, `name`, `status`) VALUES
	(1, '经理', 0),
	(2, '组长', 0),
	(3, '讲师', 0),
	(4, '助理讲师', 0);
/*!40000 ALTER TABLE `duty` ENABLE KEYS */;

-- 导出  表 h5db.employee 结构
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(50) DEFAULT NULL,
  `salary` int(11) DEFAULT NULL,
  `deptid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- 正在导出表  h5db.employee 的数据：~41 rows (大约)
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`id`, `name`, `salary`, `deptid`) VALUES
	(1, '魏林', 8507, 1),
	(2, '颜瑞', 6868, 2),
	(3, '唐可娜', 5962, 3),
	(4, '章恒铭', 7384, 4),
	(5, '李佳', 6291, 5),
	(6, '邱育玲', 6028, 1),
	(7, '陈丹', 7824, 2),
	(8, '王游', 6018, 3),
	(9, '高望', 8052, 4),
	(10, '陈笑冬', 9612, 5),
	(11, '刘婷', 9326, 1),
	(12, '宋遥', 8508, 2),
	(13, '杨玉静', 8866, 3),
	(14, '秦雪含', 8096, 4),
	(15, '张镱之', 7982, 5),
	(16, '吴金洪', 7766, 1),
	(17, '杨雁茹', 7658, 2),
	(18, '刘婷', 8012, 3),
	(19, '杨梦青', 8652, 4),
	(20, '邱姗美', 6982, 5),
	(21, '韩彩霞', 6699, 1),
	(22, '姚小妮', 8088, 2),
	(23, '姚梦云', 6930, 3),
	(24, '苟小晶', 7896, 4),
	(25, '李倩', 6789, 5),
	(26, '蹇珂', 7890, 1),
	(27, '张传波', 8900, 2),
	(28, '罗杰', 9001, 3),
	(29, '雷鑫', 9124, 4),
	(30, '邹永太', 10023, 5),
	(31, '杨倩', 9990, 1),
	(32, '王丁锋', 7065, 2),
	(33, '杨槟瑞', 8026, 3),
	(34, '彭月', 8822, 4),
	(35, '姜海霞', 9058, 5),
	(36, '冉俊', 7069, 1),
	(37, '王小溥', 8096, 2),
	(38, '董达', 6666, 3),
	(39, '阳雨', 7777, 4),
	(40, '周凯', 8888, 5),
	(43, 'wangling', 6600, 2);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
