var E = window.wangEditor;
var editor = new E('#toolbar', '#editortext')  // 两个参数也可以传入 elem 对象，class 选择器

editor.customConfig.uploadImgShowBase64 = true
editor.customConfig.showLinkImg = false

editor.create()


$('.editortext').css('top',$('.toolbar').height() + 'px')

$(window).resize(function(){
    $('.editortext').css('top',$('.toolbar').height() + 'px')
})