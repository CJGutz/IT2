// funksjon funnet på nettet som kan finne farge på gitt punkt.
var getCanvasPixelColor = function () { "use strict"; return function (a, r, t) { a.getImageData || (a = a.getContext("2d")); var g = a.getImageData(r, t, 1, 1).data; return g.r = g[0], g.g = g[1], g.b = g[2], g.a = g[3], g.rgb = "rgb(" + g.r + "," + g.g + "," + g.b + ")", g.rgba = "rgba(" + g.r + "," + g.g + "," + g.b + "," + g.a + ")", g } }();

// hviser livene til ballen. Starer fra null og går til 2 pi.
var radianer = 0;

var spillDisplay = document.querySelector("#spillDisplay")
var c1 = spillDisplay.getContext("2d")
var bodyEl = document.querySelector("body")

spillDisplay.setAttribute("width", window.innerWidth * 0.995)
spillDisplay.setAttribute("height", window.innerHeight * 0.995)

var x = spillDisplay.width / 2;
var y = spillDisplay.height / 2;
var fartX = 1;
var fartY = 1;
var musX = x + 1;
var musY = y + 1;

// teller hvilken frame programmet er på
var bilde = 0;

var fiender = []

spillDisplay.addEventListener("mousemove", mus)
var frame = setInterval(frame, 20)

// her animeres det hvert 20. ms.
function frame() {
    // nullstiller område. Rett under 100% for å løse noen bugs.
    spillDisplay.setAttribute("width", window.innerWidth * 0.996)
    spillDisplay.setAttribute("height", window.innerHeight * 0.996)
    //fjern frame
    c1.beginPath()
    c1.fillStyle = "rgba(0, 0, 0, 0.8)"
    c1.fillRect(0, 0, spillDisplay.width, spillDisplay.height)
    //vis score
    c1.fillStyle = "white"
    c1.textAlign = "center"
    c1.font = "30px Arial"
    c1.fillText("Score: " + Math.round(bilde / 100), 80, 50)
    //fiender
    if (fiender.length > 0) {
        for (var i = 0; i < fiender.length; i++) {
            //lykt, det gule området
            // kvadrant bestemmer om lykta skal være på venstre eller høyre side og lyktdeler er antall ulike gul farger på lykten. r er radiusen til hvert ensfargede gul område.
            var kvadrant;
            var lyktDeler = 10;
            var r = 200 / lyktDeler;
            if (fiender[i].xFart < 0) {
                kvadrant = Math.PI;
            } else { kvadrant = 0 }
            // det er bestemt bare en farge men siden det er flere lag ser det ut som fargen blir svakere og svakere
            c1.fillStyle = "rgba(245, 255, 100, 0.2)"
            for (var j = 1; j <= lyktDeler; j++) {
                c1.beginPath()
                c1.arc(fiender[i].X, fiender[i].Y, j * r,
                    // dette er en formel som er bestemt av fartsvektorene. formelene spytter ut radianene til lyset
                    Math.atan(fiender[i].yFart / fiender[i].xFart) - fiender[i].lykt + kvadrant,
                    Math.atan(fiender[i].yFart / fiender[i].xFart) + fiender[i].lykt + kvadrant)
                c1.lineTo(fiender[i].X, fiender[i].Y)
                c1.fill();
            }
            //kropp til fiender
            c1.beginPath();
            c1.fillStyle = "red"
            c1.arc(fiender[i].X, fiender[i].Y, 30, 0, Math.PI * 2)
            c1.fill()
            //posisjonsendring til fiende
            fiender[i].X += fiender[i].xFart;
            fiender[i].Y += fiender[i].yFart;
            //fiende treffer vegg
            if (fiender[i].X > spillDisplay.width - 25) { fiender[i].xFart = fiender[i].xFart * -1; }
            if (fiender[i].X < 25) { fiender[i].xFart = fiender[i].xFart * -1; }
            if (fiender[i].Y > spillDisplay.height - 25) { fiender[i].yFart = fiender[i].yFart * -1 }
            if (fiender[i].Y < 25) { fiender[i].yFart = fiender[i].yFart * -1 }
        }
    }
    //posisjonsendring til hvit ball
    // det ser veldig komplisert ut. Legger til et bildet av fartsgrafen i mappen. 
    // formålet er at farten er lav når musen er langt unna samtidig at den deakselereres når den kommer nærme musen. Farten er høyest i en viss avstand fra musen.
    fartX = 30 * Math.sin((musX - x) / spillDisplay.width * 3) * Math.pow(Math.E, (-(musX - x) / spillDisplay.width * 3 * Math.abs(musX - x) / (musX - x)));
    fartY = 30 * Math.sin((musY - y) / spillDisplay.height * 3) * Math.pow(Math.E, (-(musY - y) / spillDisplay.width * 3 * Math.abs(musY - y) / (musY - y)));
    x = x + fartX;
    y = y + fartY;



    //et sekund er 1000 / 20 = 50 frames. Fiender kommer hvert 3. sekund
    // også mulig å legge til en grensepå antall fiender
    bilde++;
    if (bilde % 150 == 0) { lagFiende(); }

    //sjekk om ball er i lys
    var color = getCanvasPixelColor(spillDisplay, x, y)
    detektorMaaler(Math.round(color.r / 255 * 100) / 100)

    //tegne ball
    c1.beginPath()
    c1.fillStyle = "rgb(255,255,255)"
    c1.arc(x, y, 20, 0, Math.PI * 2)
    c1.fill()
}

// tracker musens posisjon
function mus(e) {
    musX = e.clientX
    musY = e.clientY
}

// fiendene tegnes her. Farten er tilfeldig, men x og y vektor til sammen er alltid lik
function lagFiende() {
    var fart = Math.random() * 4 - 2
    // fortegnet endrer startfarten mellom høyre og venstre halvparten av gangene 
    var fortegn = 1;
    if (Math.random() < 0.5) { fortegn = -1 }
    // fiender legges i en objektarray
    fiender.push({
        X: (Math.random() * spillDisplay.width + 100) * 0.8,
        Y: (Math.random() * spillDisplay.height + 100) * 0.8,
        xFart: fart,
        yFart: fortegn * Math.sqrt(4 - (fart * fart)),
        // standard innstilling 1, mindre blir lettere og høyere blir vanskligere
        lykt: 1
    })
}

// funksjonen sjekker om ballen er i det gule lyset. Hvis det er tegnes en blå sirkelindikator rundt ballen
function detektorMaaler(n) {
    var maksRadianer = 2 * Math.PI
    c1.strokeStyle = "rgb(0,255,255)"
    c1.lineWidth = "5"
        // når sirkelindikatoren blir full er det game over
    if (n > 0 && radianer < maksRadianer) { radianer = 1 / 4 * n + radianer; }
    else if (radianer > 0.005 && n == 0) { radianer = radianer - 0.005; }
    else if (radianer > maksRadianer) { radianer = maksRadianer }
    else if (radianer == maksRadianer) {
        c1.fillStyle = "white"
        c1.textAlign = "center"
        c1.font = "100px Arial"
        c1.fillText("Du Tapte" + "  Score: " + Math.round(bilde / 100), spillDisplay.width / 2, spillDisplay.height / 2)
        clearInterval(frame)
    }
    else { radianer = 0.005; }

    // tegner sirkelindikatoren
    c1.beginPath()
    c1.arc(x, y, 22, 0, radianer)
    c1.stroke()
}
