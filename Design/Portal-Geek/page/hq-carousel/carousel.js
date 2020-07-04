var hqCount = 0;
var hqQtd = document.getElementById("hq-carousel").getElementsByClassName("container").length;

function hqPreview(){

    document.getElementById("slid" + hqCount).classList.add("hidden");
    document.getElementById("slid" + hqCount).classList.remove("unhidden");
    hqCount = hqCount <= 0 ? hqQtd -1 : hqCount -1 ;
    document.getElementById("slid" + hqCount).classList.remove("hidden");
    document.getElementById("slid" + hqCount).classList.add("unhidden");
}
function hqNext(){
    document.getElementById("slid" + hqCount).classList.add("hidden");
    document.getElementById("slid" + hqCount).classList.remove("unhidden");
    hqCount++;
    hqCount = hqCount >= hqQtd ? 0 : hqCount;
    document.getElementById("slid" + hqCount).classList.remove("hidden");
    document.getElementById("slid" + hqCount).classList.add("unhidden");
}