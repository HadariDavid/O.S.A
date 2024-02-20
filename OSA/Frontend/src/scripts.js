// PLUSZ ÉS MINUSZ GOMBOK -------------------
const plu = document.getElementById('plu'); // plu (PLUsz rövidítés) | HTML -> regist-t.component.html -> [button id] (plu)
const min = document.getElementById('min'); // min (MINusz rövidítés) | HTML -> regist-t.component.html -> [button id] (min)
const szakContainer = document.getElementById('szak-container'); // szakContainer | HTML -> regist-t.compoinent.html -> [div id] (szak-container)
const szakMegadasa = '<input type="text" class="form-control long" placeholder="Új szak megadása" title="Új szak megadása" id="szak-text" required>';

// plusz gomb funkciója
// (hozzáad egy [új szak megadása] beviteli mezőt )
function plusButton(){
    szakContainer.innerHTML = szakMegadasa
    console.log("PLUS")
}

// minusz gomb funkciója
// (elvesz egy [új szak megadása] beviteli mezőt )
function minusButton(){
    szakContainer.innerHTML = szakMegadasa
    console.log("MINUS")
}

plu.addEventListener('click', plusButton); // Event Listener a plusz gombhoz (plu)
min.addEventListener('click', minusButton); // Event Listener a minusz gombhoz (min)

plusButton();
minusButton();