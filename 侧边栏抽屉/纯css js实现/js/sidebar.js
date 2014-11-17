/**
 * 用于处理sidebar点击事件
 * @param curdiv
 */
function displayMenu(curdiv) {
    var parent = curdiv.parentNode;
    var son = parent.childNodes.item(3);
    var divs = document.getElementsByClassName("menuContent");
    var titles = document.getElementsByClassName("menuTitle");
    var titles2 = document.getElementsByClassName("menuTitleClick");
    for (var j = 0; j < titles.length; j++) {
        if (curdiv == titles[j]) {
            titles[j].className = "menuTitleClick";
        } else {
            titles[j].className = "menuTitle";
        }
    }
    for (var j = 0; j < titles2.length; j++) {
        if (curdiv == titles2[j]) {
            titles2[j].className = "menuTitleClick";
        } else {
            titles2[j].className = "menuTitle";
        }
    }
    for (var i = 0; i < divs.length; i++) {
        var ele = divs[i];
        if (ele == son) {
            if (ele.style.display == "block") {
                ele.style.display = "none";
                curdiv.className = "menuTitle";
            } else {
                ele.style.display = "block";
                curdiv.className = "menuTitleClick";
            }
        } else {
            ele.style.display = "none";
        }
    }
}/**
 * Created by be2n2me on 2014/11/15.
 */
