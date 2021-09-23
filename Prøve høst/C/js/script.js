//Definerer alle variabler
var bodyEl = document.querySelector("body");
var overskriftEl;
var divEl;
var storsteTall;
var antallLand = 0;
var land = ["Sverige", "Finland", "Danmark"];
var smittet = [
    Number(prompt("Hvor mange smittede per 100 000 i Sverige?")),
    Number(prompt("Hvor mange smittede per 100 000 i Finland?")),
    Number(prompt("Hvor mange smittede per 100 000 i Danmark?"))
]

//Sjekker om noen av tallene er negative
if (smittet[0] < 0 || smittet[1] < 0 || smittet[2] < 0) {
    alert("Et av tallene er mindre enn null og det går ikke! Prøv på nytt.")
    smittet[0] = 0;
    smittet[1] = 0;
    smittet[2] = 0;
}

//Finner det størtse tallet
if (smittet[0] >= smittet[1] && smittet[0] >= smittet[1]) {
    storsteTall = smittet[0];
} else if (smittet[1] >= smittet[0] && smittet[1] >= smittet[2]) {
    storsteTall = smittet[1];
} else {
    storsteTall = smittet[2];
}

var i = 0;
while (i < 3) {
    overskriftEl = document.createElement("p");
    divEl = document.createElement("div");
    overskriftEl.style.fontSize = "30px";

    //Lager tre forskjellige: Sverige, Finland og Danmark
    overskriftEl.innerHTML = "<b>" + land[i] + "</b>";
    divEl.style.width = smittet[i]/storsteTall * 100 + "%";
    divEl.addEventListener("mouseover", visTall);

    //Sjekker i hvert land hvor tallet ligger.
    if (smittet[i] < 20 && smittet[i] >= 0) {
        divEl.style.backgroundColor = "green";
    } else if (smittet[i] >= 20 && smittet[i] <= 100) {
         divEl.style.backgroundColor = "yellow";
    } else {
        divEl.style.backgroundColor = "red";
    }
    bodyEl.appendChild(overskriftEl);
    bodyEl.appendChild(divEl);
    i++;
}

function visTall(e) {
    console.log(e);
    if (e.clientY > 250 && e.clientY < 350) {
        e.target.innerHTML = smittet[0]
    } else if (e.clientY > 410 && e.clientY < 470) {
        e.target.innerHTML = smittet[1]
    } else {
        e.target.innerHTML = smittet[2]
    }
        
}