$('.submit-btn').click(function(){
    var title = $('.title-input').val();
    var content = editor.txt.html();
    $.ajax({
        url:'/admin/backstage/common.php',
        dataType:"json",
        type:"POST",
        data:{
            action:'1',
            title:title,
            content:content
        },
        success:function(res){
        }
    })
})