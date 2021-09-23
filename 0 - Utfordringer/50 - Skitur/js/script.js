/* Hvis man skal legge til et ekstra sted må man legge til avstander i "avstand" arrayen, 
   legge til navnet på stedet i "steder" arrayen, redigere bilder på kartet og pil og ellers
   er programmet dynamisk. Muligheter for forbedring er å legge til de riktige stiene og piler
   som følger de stiene.
*/
// alle variabler brukt i koden. Kan bli brukt som en slags innholdsfortegnelse
var bodyEl = document.querySelector("body");
var stederEl;
var selectEl;
var optionEl;
var imgEl;
var sumAvstand = 0;
var avstand = [
    [0, 10.3, 6.8, 10.5, 5.3],
    [10.3, 0, 4.9, 1.7, 5.1],
    [6.8, 4.9, 0, 6.6, 4.1],
    [10.5, 1.7, 6.6, 0, 6.1],
    [5.3, 5.1, 4.1, 6.1, 0]
];
var steder = ["Velg", "Sognsvann", "Kobberhaughytta", "Tryvannstua", "Finnerud", "Ullevålseter"]

// legger til skrift som viser avstand
var hEl = document.createElement("h2");
hEl.innerHTML = "Velg avstand",
bodyEl.appendChild(hEl);

leggTil();
leggTil();

function finnAvstand() {
    sumAvstand = 0;
    stederEl = document.querySelectorAll("select");
    var kartEl = document.createElement("img");
    kartEl.setAttribute("src","media/kart.jpg");
    bodyEl.appendChild(kartEl);
    for (var i = 0; i < stederEl.length - 1; i++) {
        //ser om noen av selektorne ikke er på en av de faktiske stedene
        if (stederEl[i].value == -1 || stederEl[i + 1].value == -1) {
            hEl.innerHTML = "Velg avstand";
        } else {
            //Legg til avstandens sum
            sumAvstand = sumAvstand + avstand[stederEl[i].value][stederEl[i + 1].value]
            sumAvstand = Math.round(sumAvstand*10)/10
            hEl.innerHTML = "Avstanden for turen er " + sumAvstand + " km"

            //Legg til riktig bilde
            imgEl = document.createElement("img");
            imgEl.setAttribute("src", "media/" + stederEl[i].value + "-" + stederEl[i+1].value + ".png");
            bodyEl.appendChild(imgEl);
        }

        bodyEl.appendChild(hEl);
    }

    

}

function leggTil() {
    selectEl = document.createElement("select");
    selectEl.setAttribute("onchange", "finnAvstand()")
    // løkke for å legge til så mange muligheter som antall avstander
    for (var i = 0; i < steder.length; i++) {
        optionEl = document.createElement("option");
        optionEl.setAttribute("value", i - 1);
        optionEl.innerHTML = steder[i];
        selectEl.appendChild(optionEl);
    }
    bodyEl.appendChild(selectEl);
    bodyEl.appendChild(hEl);
}

