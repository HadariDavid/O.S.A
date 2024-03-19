document.addEventListener('DOMContentLoaded', function() { // Megvárja amég az oldal betölt és utána futtatja le a bennelévő scriptet.

// PLUSZ ÉS MINUSZ GOMBOK -------------------
const plu = document.getElementById('plu'); // plu (PLUsz rövidítés) | HTML -> regist-t.component.html -> [button id] (plu)
const min = document.getElementById('min'); // min (MINusz rövidítés) | HTML -> regist-t.component.html -> [button id] (min)
const szakContainer = document.getElementById('szak-container'); // szakContainer | HTML -> regist-t.compoinent.html -> [div id] (szak-container)

// plusz gomb funkciója
// (hozzáad egy [új szak megadása] beviteli mezőt )
function plusButton(){
    const inputs = szakContainer.querySelectorAll('input');
    if (inputs.length < 10) {
        const ujSzak = document.createElement('input'); // létrehoz egy ujSzak nevű inputot.
        // [ujSzak] input mező paraméterei:
        ujSzak.type= "text";
        ujSzak.classList = "form-control ex-long";
        ujSzak.placeholder = "Új szak megadása";
        ujSzak.title = "Új szak megadása";
        ujSzak.id = "szak-text";
        ujSzak.required = true;
        ujSzak.maxLength = "128";
        ujSzak.style = "width: 55%; padding: 10px; margin-bottom: 20px; margin-left: 0.5%; margin-right: 0.5%; border: 3px solid #ffa600; border-radius: 5px;"
        ujSzak.ngModel = "ujtanar.szak"
        szakContainer.appendChild(ujSzak);
        console.log("PLUS");
    }
}

// minusz gomb funkciója
// (elvesz egy [új szak megadása] beviteli mezőt )
function minusButton(){
    const inputs = szakContainer.querySelectorAll('input');
    if (inputs.length > 1) {
        szakContainer.removeChild(inputs[inputs.length - 1]);
    }
    console.log("MINUS")
}

plu.addEventListener('click', plusButton); // Event Listener a plusz gombhoz (plu)
min.addEventListener('click', minusButton); // Event Listener a minusz gombhoz (min)

});
