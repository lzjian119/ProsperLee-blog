var E = window.wangEditor
var editor = new E('#toolbar','#text')
editor.create();



$("input[type=submit]").click(function(){
    $.ajax({
        url: "../application/config/login.php",
        type: "POST",
        dataType: "json",
        data: {
            action: "5",
            title: $('#title').val(),
            tag: $('input[name=tag]:checked').val(),
            abstract: $('#abstract').val(),
            content: editor.txt.html(),
        },
        success: function (data) {
            console.log(data);
        }
    })
})