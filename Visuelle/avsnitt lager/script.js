var bodyEl = document.querySelector("body");
var mottak;
var avsnittEl;
var linjeEl;
var knappEl;
var nyttMottak = "";

function nyttInnlegg() {
	mottak = prompt("Skriv inn et avsnitt");
	avsnittEl = document.createElement("p");

	if (mottak.length > 50) {
		for (var i = 0; i < mottak.length/50; i++) {
			nyttMottak = nyttMottak + '<br>' + mottak.substr(i*50,(i+1)*50) + '<br>';
		}
	} else {
		nyttMottak = mottak; 	
	}


	nyttMottak = mottak;
	
	//Skriver inn et paragraf som bruker har laget
	avsnittEl.innerHTML = nyttMottak;
	bodyEl.appendChild(avsnittEl);
	nyttMottak = "";
}

wrapperEl = document.createElement("div")
knappEl = document.createElement("div")

wrapperEl.className = "wrapper"

knappEl.className = "knapp"
knappEl.innerHTML = "Nytt innlegg"
knappEl.addEventListener("click", nyttInnlegg)

wrapperEl.appendChild(knappEl);
bodyEl.appendChild(wrapperEl);






