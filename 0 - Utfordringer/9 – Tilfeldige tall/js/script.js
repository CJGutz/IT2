var tall;
var partall;

tall = Math.floor(Math.random()*10) + 1
partall = (Math.floor(Math.random()*5 + 0.5)) *2

if (partall == 0) {
    partall = 2;
}

document.getElementById("tall").innerHTML = tall;
document.getElementById("partall").innerHTML = partall;