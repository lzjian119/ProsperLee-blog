window.onload = function () {
    var oH2 = document.getElementsByTagName("h2")[0];
    var oUl = document.getElementsByTagName("ul")[0];
    oH2.onclick = function () {
        var style = oUl.style;
        style.display = style.display == "block" ? "none" : "block";
        oH2.className = style.display == "block" ? "open" : ""
    }
}
$(".menu li").hover(function () {
    $(this).find('ul:first').css({
        visibility: "visible",
        display: "none"
    }).slideDown("normal");
}, function () {
    $(this).find('ul:first').css({
        visibility: "hidden"
    })
})