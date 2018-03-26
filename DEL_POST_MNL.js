//BUOC 1: AUTO SCROLL
var SCROLL_DELAY = 500;
var SCROLL_CHECK = 5000;

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
    } else {
        previousScroll = document.documentElement.scrollTop;
    }
}, SCROLL_CHECK);

//BUOC 2: CLICK DELETE 
document.getElementsByClassName('DIEN_CLASS_VAO_DAY').click();

//BUOC 3: 
document.getElementsByClassName('layerConfirm').click();

//BUOC 4: 
Reload trang.
