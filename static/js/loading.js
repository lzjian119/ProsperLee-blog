/*loading.js*/
// 加载HTML图
var imgurl = 'static/images/login/loading.gif';
var LoadingHtml = '<div id="loadingDiv" style="position:fixed;left: 0;top: 0;right: 0;bottom: 0;z-index: 99999;background-color: rgba(0,0,0,.8);">' +
    '<div style="position: fixed;top: 50%;left: 50%;transform: translate(-50%,-50%);">' +
    '<img style="max-width:300px;" src="'+imgurl+'"/>' +
    '<p style="font-size: 20px;font-family:  Arial, Helvetica, sans-serif"> LOADING </p>'+
    '</div>' +
    '</div>';

// 呈现loading效果
document.write(LoadingHtml);

// 监听加载状态改变
document.onreadystatechange = completeLoading;

// 加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        $('#loadingDiv').fadeOut(1000,function () {
            $(this).remove();
        });
    }
}