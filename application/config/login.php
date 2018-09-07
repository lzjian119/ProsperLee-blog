<?php

require "mysqllink.php";

//做个路由 action为url中的参数
@$action = $_POST['action'];

switch ($action) {
    case '1':
        login();
        break;
    case '2':
        register();
        break;
}

// 登陆
function login()
{
    $link = new mysqli(SERVERNAME, USERNAME, PASSWORD, "users");

    // username usrpwd 字段
    @$nickname = $_POST['username'];
    @$password = $_POST['userpwd'];
    //echo $nickname . $password;

    $sql = "SELECT name,password FROM pl_userslist WHERE name = '" . $nickname . "' AND password = '" . $password . "'";

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

    $sql = "SELECT name FROM pl_userslist WHERE name = '" . $nickname . "'";
    if (mysqli_num_rows($link->query($sql))) {
        $code = "000301";
        $message = "用户名已存在";
        $data = "";
        echo json($code, $message, $data);
    } else {
        // 插入语句
        $sql = "INSERT INTO pl_userslist (name, password, email, phone) VALUES ('" . $nickname . "', '" . $password . "', '" . $email . "','" . $phone . "')";
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


