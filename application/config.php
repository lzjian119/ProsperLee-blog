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
// $link->query("SET NAMES utf8");
mysqli_query($link, "SET NAMES utf8");

// 检测连接
if ($link->connect_error) {
    return "连接失败";
} else {
    return "连接成功";
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
