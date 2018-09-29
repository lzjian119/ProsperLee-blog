$(function () {
    // 控制台
    console.log("%cProsper%cLee", "border-radius:3px 0 0 3px;color:#fff;padding:2px 6px;background-color:#000", "border-radius:0 3px 3px 0;font-weight:800;color:#000;padding:2px 6px;background-color:orange", "欢迎来到本站！");
    // 禁用F12
    document.onkeydown = function () {
        if (window.event && window.event.keyCode == 123) {
            event.keyCode = 0;
            event.returnValue = false;
            return false;
        }
    }
    // 禁用选择
    document.onselectstart = function () {
        return false
    }
    // 禁用图片拖动
    document.ondragstart = function () {
        return false
    }
    // 禁用粘贴
    document.onpaste = function () {
        return false
    }
    // 禁用右键
    document.oncontextmenu = function () {
        return false
    }
    // 禁用复制
    document.oncopy = function () {
        return false
    }
    // 禁用剪切
    document.oncut = function () {
        return false
    }
    // 切换背景图
    // <ul class="bgi">
    //     <li><img src="images/bg1.png" alt=""></li>
    //     <li><img src="images/bg2.jpg" alt=""></li>
    //     <li><img src="images/bg3.png" alt=""></li>
    //     <li><img src="images/bg4.jpg" alt=""></li>
    // </ul>
    // var count = 0;
    // setInterval(function () {
    //     count = count >= $('.bgi li').length ? 0 : count;
    //     $('.bgi li').eq(count).fadeIn(3000);
    //     $('.bgi li').eq(count).siblings().fadeOut(3000);
    //     count++;
    // }, 6000);
    // 鼠标点击特效
    (function () {
        window.onclick = function (event) {
            var heart = document.createElement("b");
            heart.onselectstart = new Function('event.returnValue=false');
            document.body.appendChild(heart).innerHTML = "❤";
            heart.style.cssText = "position: fixed;left:-100%;";
            var f = 16, // 字体大小
                x = event.clientX - f / 2, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 1.2; // 放大缩小
            var timer = setInterval(function () {
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");";
                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 12)
        }
        // 随机颜色
        function randomColor() {
            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
        }
    }())
    // 登陆验证
    $("#signinForm").validate({
        submitHandler: function () {
            $.ajax({
                url: "../application/config/common.php",
                type: "POST",
                dataType: "json",
                data: {
                    action: "1",
                    username: $('#username').val(),
                    userpwd: $('#userpwd').val()
                },
                success: function (data) {
                    console.log(data);
                }
            })
        },
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 12,
                rangelength: [2, 12]
            },
            userpwd: {
                required: true,
                minlength: 6,
                maxlength: 16,
                rangelength: [6, 16]
            }
        },
        messages: {
            username: {
                required: "必需输入用户名",
                minlength: "用户名长度最小为2",
                maxlength: "用户名长度最大为12",
                rangelength: "用户名长度必需介于2和12之间"
            },
            userpwd: {
                required: "必需输入密码",
                minlength: "密码长度不能小于6",
                maxlength: "密码长度最大为16",
                rangelength: "密码长度必需介于6和16之间"
            }
        }
    });
    // 注册验证
    $("#registerForm").validate({
        submitHandler: function () {
            $.ajax({
                url: "../application/config/common.php",
                type: "POST",
                dataType: "json",
                data: {
                    action: "2",
                    username: $('#username').val(),
                    userpwd: $('#userpwd').val(),
                    userphone: $('#userphone').val(),
                    useremail: $('#useremail').val()
                },
                success: function (data) {
                    console.log(data);
                }
            })
        },
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength: 12,
                rangelength: [2, 12]
            },
            userpwd: {
                required: true,
                minlength: 6,
                maxlength: 16,
                rangelength: [6, 16]
            },
            reuserpwd: {
                required: true,
                minlength: 6,
                maxlength: 16,
                rangelength: [6, 16],
                equalTo: "#userpwd"
            },
            userphone: {
                required: true,
                minlength: 11,
                maxlength: 11,
                isMobile: true
            },
            useremail: {
                required: true,
                email: true
            }
        },
        messages: {
            username: {
                required: "必需输入用户名",
                minlength: "用户名长度最小为2",
                maxlength: "用户名长度最大为10",
                rangelength: "用户名长度必需介于2和10之间"
            },
            userpwd: {
                required: "必需输入密码",
                minlength: "密码长度不能小于6",
                maxlength: "密码长度最大为16",
                rangelength: "密码长度必需介于6和16之间"
            },
            reuserpwd: {
                required: "必需输入密码",
                minlength: "密码长度不能小于6",
                maxlength: "密码长度最大为16",
                rangelength: "密码长度必需介于6和16之间",
                equalTo: "输入的两次密码不同"
            },
            userphone: {
                required: "必需输入手机号码",
                minlength: "不能小于11个字符",
                maxlength: "不能大于11个字符",
                isMobile: "请填写正确手机号码"
            },
            useremail: {
                required: "必需输入电子邮件",
                email: "请输入正确格式的电子邮件"
            }
        }
    });
    // 手机号码验证
    jQuery.validator.addMethod("isMobile", function (value, element) {
        var length = value.length;
        var mobile = /^[1][3,4,5,7,8][0-9]{9}$/;
        return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请填写正确手机号码");
})