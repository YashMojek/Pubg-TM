let btnInfo = document.getElementById("info");
let infoText = document.getElementById("info-text");
let rot = 0;

function info() {
    if (rot == 0) {
        btnInfo.style.rotate = "180deg";
        rot = 1;
        infoText.style.marginTop = "0px";
        infoText.style.opacity = "100%";
    } else if (rot == 1) {
        btnInfo.style.rotate = "0deg";
        rot = 0;
        infoText.style.marginTop = "-30px";
        infoText.style.opacity = "0%";
    }
}