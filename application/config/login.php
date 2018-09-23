<?php

require "mysqllink.php";

// 1登陆 2注册 3查询用户

//做个路由 action为url中的参数
@$action = $_POST['action'];

switch ($action) {
    case '1':
        login();
        break;
    case '2':
        register();
        break;
    case '3':
        selectusers();
        break;
}

// 登陆
function login()
{
    $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");

    // username usrpwd 字段
    @$nickname = $_POST['username'];
    @$password = $_POST['userpwd'];
    // echo $nickname . $password;

    $sql = "SELECT nickname,password FROM pl_userslist WHERE nickname = '" . $nickname . "' AND password = '" . $password . "'";

    if (mysqli_num_rows($link->query($sql))) {
        $code = "000200";
        $message = "查询成功,存在该用户";
        $data = "";
        echo json($code, $message, $data);
    } else {
        $code = "000301";
        $message = "请检查用户名和密码是否填写正确";
        $data = "";
        echo json($code, $message, $data);
    }

    // 关闭连接
    $link->close();
}

// 注册
function register()
{
    $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");

    mysqli_query($link, "SET NAMES utf8");

    @$nickname = $_POST['username'];
    @$password = $_POST['userpwd'];
    @$email = $_POST['useremail'];
    @$phone = $_POST['userphone'];

    $sql = "SELECT nickname FROM pl_userslist WHERE nickname = '" . $nickname . "'";
    if (mysqli_num_rows($link->query($sql))) {
        $code = "000301";
        $message = "用户名已存在";
        $data = "";
        echo json($code, $message, $data);
    } else {
        // 创建用户Id
        $iProsperId = substr(str_shuffle("1234567890"),0,8);
        // 创建时间
        $createtime = date('Y-m-d h:i:s',time());
        // 插入语句
        $sql = "INSERT INTO pl_userslist (iProsperId, nickname, password, email, phone, createtime) VALUES ('" . $iProsperId . "','" . $nickname . "', '" . $password . "', '" . $email . "','" . $phone . "','" . $createtime . "')";
        // var_dump($link->query($sql));
        if ($link->query($sql) === true) {
            $code = "000200";
            $message = "创建用户成功";
            $data = "";
            echo json($code, $message, $data);
        } else {
            $code = "000500";
            $message = "创建用户失败";
            $data = "";
            echo json($code, $message, $data);
        }
    }

    // 关闭连接
    $link->close();
}

// 查询用户
function selectusers()
{
    $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");
    mysqli_query($link, "SET NAMES utf8");
    $sql = "SELECT * FROM pl_userslist";
    $result = $link->query($sql);
    $userslist = [];
    foreach ($result as $value){
        array_push($userslist,$value);   
    }
    $code = "000200";
    $message = "查询用户成功";
    $data = $userslist;
    echo json($code, $message, $data);
}