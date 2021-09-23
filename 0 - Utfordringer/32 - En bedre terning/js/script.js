var bodyEl = document.querySelector("body");
var tall = Math.floor(Math.random() * 6 + 1);
var imgEl;

imgEl = document.createElement("img");
imgEl.setAttribute("src", "media/c" + tall + ".png")

bodyEl.appendChild(imgEl);