let htmlText = "";

function loadBoxes() {
    let repeatValue;
    document.querySelectorAll('[repeat]').forEach((elem) => {
        repeatValue = parseInt(elem.getAttribute("repeat"));
        for(let i=0; i<repeatValue; i++) {
            htmlText += /* HTML */ `<div class="box">${i+1}</div>`;
        }
        console.log(htmlText);
        elem.innerHTML = elem.innerHTML.replace("{index}", htmlText);
        htmlText = "";
    })
}