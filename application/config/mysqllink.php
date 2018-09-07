<?php

// 设置编码
header("content-type:text/html;charset=utf-8");

// 解决跨域
header("Access-Control-Allow-Origin:*");

// 链接数据库信息
//$servername = "localhost";
//$username = "root";
//$password = "";

const SERVERNAME = "localhost";
const USERNAME = "root";
const PASSWORD = "";

// 创建连接
$link = new mysqli(SERVERNAME, USERNAME, PASSWORD);

// 防止中文乱码
//$link->query("SET NAMES utf8");
mysqli_query($link, "SET NAMES utf8");

// 检测连接
if ($link->connect_error) {
    return "连接失败";
} else {
    return "连接成功";
}

// 查询数据库是否已经存在
if (mysqli_select_db($link, 'users')) {
    return "数据库已存在";
    $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");
} else {
    // 创建数据库
    $sql = "CREATE DATABASE `users` CHARACTER SET 'utf8' COLLATE 'utf8_general_ci';";
    if ($link->query($sql) === true) {
        return "数据库创建成功";
        $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");
    } else {
        return "数据库创建失败";
    }
}

// 查询数据表是否存在
if (mysqli_num_rows($link->query("SHOW TABLES LIKE 'pl_userslist'"))) {
    return '该表存在';
} else {
    // 创建表
    $sql = "CREATE TABLE `users`.`pl_userslist`  (
                `iProsperId` int(11) NOT NULL AUTO_INCREMENT,
                `name` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
                `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
                `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
                `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱',
                PRIMARY KEY (`iProsperId`)
            );";
    if ($link->query($sql) === true) {
        return "新表插入成功";
    } else {
        return "新表插入失败";
    }
}

// 输出json
function json($code, $message, $data)
{
    $result = array(
        "code" => $code,
        "message" => $message,
        "data" => $data
    );
    return json_encode($result);
}
