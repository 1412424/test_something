var DEL_BTN = 'DIEN_CLASS_VAO_DAY';
var SCROLL_DELAY = 500;
var SCROLL_CHECK = 5000;
var WAIT_TO_DELETE = 500;

var previousScroll = document.documentElement.scrollTop;
var scroll = setInterval(function () {
    window.scrollTo(0,document.body.scrollHeight);
    console.log("Current position: " + document.documentElement.scrollTop);
}, SCROLL_DELAY);

var clearScroll = setInterval(function () {
    if (document.documentElement.scrollTop == previousScroll) {
        console.log("Stop Scrolling");
        clearInterval(scroll);
        clearInterval(clearScroll);
        delPost();
    } else {
        previousScroll = document.documentElement.scrollTop;
    }
}, SCROLL_CHECK);

function delPost() {
    var delBtns = document.getElementsByClassName(DEL_BTN);
    for (let index = 0; index < delBtns.length; index++) {
        delBtns[index].click();
        var delBtnInterval = setInterval(function(){ 
            var confirmBtns = document.getElementsByClassName('layerConfirm');
            for (let ind = 0; ind < confirmBtns.length; ind++) {
                confirmBtns[ind].click();
                console.log("Delete Success: " + ind);
            }
            clearInterval(delBtnInterval);
        }, index*WAIT_TO_DELETE);
    }
}
