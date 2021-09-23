var bodyEl = document.querySelector("body");
var canvas = document.querySelector("#c1")
var c = canvas.getContext("2d")
c.imageSmoothingEnabled = true;

var ballong = document.querySelector("#ballong")
var feil = document.querySelector("#feil")
var musikk = document.querySelector("#musikk")
musikk.volume = 0.3
var lydSjekk = document.querySelector("input")
lydSjekk.addEventListener("click", lydEndring)

var musY;
canvas.addEventListener("mousemove", track)

var forhold = 16 / 9;
var firkantStr = 10;
var poeng1 = 0;
var poeng2 = 0;
var ball = { x: 100, y: 100, fartX: 10, fartY: 1, radius: 10 }
var spiller2 = { x: canvas.width - 10, y: canvas.height / 2, fartY: 3, hoyde: 60, bredde: 10 }
var SfartY = 3;
var BfartX = 10;


function track(e) {
    musY = e.offsetY
}

reset()
var animasjon = setInterval(frame, 20)
function frame() {
    //nullstiller bildet
    c.fillStyle = "rgba(0,0,0,0.8)"
    c.fillRect(0, 0, canvas.width, canvas.height)
    //tegner fast bane
    tegnBane();
    //tegner spillere og ball
    c.beginPath()
    c.fillRect(10, musY - 30, 10, 60)
    c.fillRect(spiller2.x, spiller2.y - spiller2.hoyde / 2, -spiller2.bredde, spiller2.hoyde)
    c.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    c.fill();
    // beveger ball
    ball.x += ball.fartX;
    ball.y += ball.fartY;
    //beveger spiller 2
    if (Math.abs(ball.y - spiller2.y) < 10) {
        spiller2.fartY = 0;
    } else {
        spiller2.fartY = SfartY;
        spiller2.y += spiller2.fartY * (ball.y - spiller2.y) / Math.abs(ball.y - spiller2.y)

    }
    //ball treffer
    //if (ball.x + ball.radius > canvas.width) { ball.fartX *= -1 }
    //if (ball.x - ball.radius < 0) { ball.fartX *= -1 }
    if (ball.y + ball.radius + 3 > canvas.height) { ball.fartY *= -1 }
    if (ball.y - ball.radius - 3 < 0) { ball.fartY *= -1 }
    if (ball.y > musY - 30 - ball.radius && ball.y < musY + 30 + ball.radius && ball.x >= 10 && ball.x <= 40) {
        ball.fartX *= -1
        ball.fartY = -(musY - ball.y) / 3
        if (lydSjekk.checked) { ballong.play(); }
    }
    if (ball.y > spiller2.y - spiller2.hoyde / 2 && ball.y < spiller2.y + spiller2.hoyde / 2 && ball.x <= canvas.width - 20 && ball.x >= canvas.width - 50) {
        ball.fartX *= -1
        ball.fartY = -(spiller2.y - ball.y) / 3
        if (lydSjekk.checked) { ballong.play(); }

    }
    if (ball.x > canvas.width) {
        poeng1++;
        if (lydSjekk.checked) { feil.play(); }
        reset();
    }
    if (ball.x < 0) {
        poeng2++;
        if (lydSjekk.checked) { feil.play(); }
        reset();
    }
}

function tegnBane() {
    for (var i = 0; i < 10; i++) {
        c.fillStyle = "white"
        c.fillRect(canvas.width / 2 - firkantStr / 2, i * canvas.height / 10 + 20, firkantStr, firkantStr)
    }
    c.fillRect(0, 0, canvas.width, 3)
    c.fillRect(0, canvas.height - 3, canvas.width, 3)
    c.font = "40px arial"
    c.fillText(poeng1, canvas.width * 0.38, 80, 100);
    c.fillText(poeng2, canvas.width * 0.6, 80, 100)

}

function reset() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.fartX = 0;
    ball.fartY = 0;
    setTimeout(() => {
        ball.fartY = 3 * Math.random() - 1.5;
        ball.fartX = BfartX;
    }, 1000);
    SfartY = 3 + poeng1 / 4;
    BfartX += 0.4

}

function lydEndring() {
    musikk.play()
    if (lydSjekk.checked) {
        feil.muted = false;
        ballong.muted = false;
        musikk.muted = false;
    } else {
        feil.muted = true;
        ballong.muted = true;
        musikk.muted = true;
    }
}