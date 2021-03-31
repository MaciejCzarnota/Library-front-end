function changeMode() {
    if (sessionStorage.getItem("mode") === "white") {
        sessionStorage.setItem("mode", "black");
        blackMode();

    } else if (sessionStorage.getItem("mode") === "black") {
        sessionStorage.setItem("mode", "white");
        whiteMode();
    }
}

function selectorAllToBlack(arr, color) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        arr[i].firstChild.style.borderColor = "#eee";
        arr[i].style.borderColor = "#eee";
        arr[i].firstChild.style.color = "#eee";
    }
}

function changeTablesToBlack() {
    var everySecondRow = [...document.querySelectorAll("tr:nth-child(even)")];
    var ths = [...document.querySelectorAll("th")];
    var tds = [...document.querySelectorAll("td")];
    for (let i = 0; i < ths.length; i++) {
        ths[i].style.borderColor = "white";
    }
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.borderColor = "white";
    }
    for (let i = 0; i < everySecondRow.length; i++) {
        everySecondRow[i].style.background = "black";
    }
}

function blackMode() {
    const mainId = document.body;
    mainId.style.background = "#222";
    mainId.style.color = "#eee";
    document.querySelector("#modeButton").style.borderColor = "#ddd";
    document.querySelector("#modeButton").innerHTML = "Tryb jasny";
    selectorAllToBlack([...document.querySelectorAll('.add-button')]);
    selectorAllToBlack([...document.querySelectorAll('.record-filter')]);
    selectorAllToBlack([...document.querySelectorAll('.search-reference')]);
    selectorAllToBlack([...document.querySelectorAll('.user-info-table')]);
    let mainProfile = document.querySelector('#main-profile ul');
    if (mainProfile) {
        mainProfile.style.borderColor = "#eee";
    }
    const books = [...document.querySelectorAll('.book-element')];
    for (var i = 0 ; i < books.length; i++) {
        books[i].style.borderColor = "#eee";
    }
    const bookDescription = [...document.querySelectorAll('.other-info-element h6')];
    for (var i = 0 ; i < bookDescription.length; i++) {
        bookDescription[i].style.color = "black";
    }
    changeTablesToBlack();
}

function selectorAllToWhite(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].firstChild.style.borderColor = "black";
        arr[i].style.borderColor = "black";
        arr[i].firstChild.style.color = "black";
    }
}

function changeTablesToWhite() {
    var everySecondRow = [...document.querySelectorAll("tr:nth-child(even)")];
    var ths = [...document.querySelectorAll("th")];
    var tds = [...document.querySelectorAll("td")];
    for (let i = 0; i < ths.length; i++) {
        ths[i].style.borderColor = "black";
    }
    for (let i = 0; i < tds.length; i++) {
        tds[i].style.borderColor = "black";
    }
    for (let i = 0; i < everySecondRow.length; i++) {
        everySecondRow[i].style.background = "#f2f2f2";
    }
}

function whiteMode() {
    const mainId = document.body;
    mainId.style.background = "#fff";
    mainId.style.color = "black";
    document.querySelector("#modeButton").style.borderColor = "#222";
    document.querySelector("#modeButton").innerHTML = "Tryb ciemny";
    selectorAllToWhite([...document.querySelectorAll('.add-button')]);
    selectorAllToWhite([...document.querySelectorAll('.search-reference')]);
    selectorAllToWhite([...document.querySelectorAll('.record-filter')]);
    selectorAllToWhite([...document.querySelectorAll('.user-info-table')]);
    let mainProfile = document.querySelector('#main-profile ul');
    if (mainProfile) {
        mainProfile.style.borderColor = "black";
    }
    const books = [...document.querySelectorAll('.book-element')];
    for (var i = 0 ; i < books.length; i++) {
        books[i].style.borderColor = "black";
    }
    const bookDescription = [...document.querySelectorAll('.other-info-element')];
    for (var i = 0 ; i < bookDescription.length; i++) {
        bookDescription[i].firstChild.style.borderColor = "black";
    }
    changeTablesToWhite();
}

var mode = sessionStorage.getItem("mode");
if (mode === "white") {
    whiteMode();
} else if (mode === "black") {
    blackMode();
} else if (mode === null) {
    whiteMode();
    sessionStorage.setItem("mode", "white");
}


