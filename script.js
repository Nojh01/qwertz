function wechsel() {
    document.getElementById("titel").innerText = "Text wurde geändert!";

    let neu = document.createElement("p");
    neu.innerText = "Ich wurde per JavaScript hinzugefügt!";
    document.getElementById("bereich").appendChild(neu);
}
