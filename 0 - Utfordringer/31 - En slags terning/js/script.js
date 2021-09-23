var bodyEl = document.querySelector("body");
var tall = Math.floor(Math.random() * 6 + 1);
var divEl;

divEl = document.createElement("div");
divEl.innerHTML = tall;

bodyEl.appendChild(divEl);