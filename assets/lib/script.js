const screen = document.getElementById('screen');

function resize() {
    const phoneHeight = (document.getElementById('phone').clientWidth * (5.45 / 2.65)).toString() + 'px';
    document.getElementById('phone').setAttribute('style', 'height:' + phoneHeight);
}

function timeSize() {
    const val = (window.location.toString().includes('index') || !window.location.toString().includes('html')) ? 0.23 : 0.5;
    jQuery("#time").fitText(val);
}

function updateTime() {
    const date = new Date();
    document.getElementById('time').innerText = date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
}

document.getElementById('button').addEventListener('click', function onClick() {
    if (screen.getAttribute('class') === 'off') {
        screen.setAttribute('class', 'lock');
    } else {
        window.location.href = "home.html";
    }
    timeSize();
});

function arrowIn() {
    document.getElementById('arrow').setAttribute('style', 'border-color: white');
}

function arrowOut() {
    document.getElementById('arrow').setAttribute('style', 'border-color: black');
}

window.onload = timeSize;
resize();
window.onresize = resize;
updateTime();
setInterval(updateTime, 1000);

document.getElementById('arrow-container').onmouseover = arrowIn;
document.getElementById('arrow-container').onmouseout = arrowOut;