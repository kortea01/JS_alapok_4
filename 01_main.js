function szovegKicsi() {
    const szoveg = document.getElementById("bevitel");
    const kiiratas=document.getElementById("uzenet");
    kiiratas.innerHTML=szoveg.value;
    kiiratas.style.textTransform="lowercase";
}

function szovegNagy() {
    const szoveg = document.getElementById("bevitel");
    const kiiratas=document.getElementById("uzenet");
    kiiratas.innerHTML=szoveg.value;
    kiiratas.style.textTransform="uppercase";
}

