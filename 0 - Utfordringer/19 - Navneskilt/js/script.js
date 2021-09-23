var navn;

navn = prompt("Hva er navnet ditt?");

navneskilt(navn);

function navneskilt(n) {
    var linje = "";
    for (var i = -4; i < n.length; i++) {
        linje += "*";
    }

    console.log(linje);
    console.log("* " + n + " *")
    console.log(linje)
}