window.onload = () => {
    createHeader();
    createContent();
    createFooter();
}

function createHeader(){
    let header = document.createElement("header");
    console.log(header)
    document.body.appendChild(header);

    let tableNav = document.createElement("table");
    tableNav.cellPadding = "10";
    tableNav.cellSpacing = "5";
    header.appendChild(tableNav);

    let thLeft = document.createElement("th");
    tableNav.appendChild(thLeft);
    let h1Left = document.createElement("h1");
    thLeft.appendChild(h1Left);
    let aLeft = document.createElement("a");
    aLeft.innerText = "⇜";
    aLeft.setAttribute('href', "/src/story/pick-a-pill.html");
    h1Left.appendChild(aLeft);

    let thRight = document.createElement("th");
    tableNav.appendChild(thRight);
    let h1Right = document.createElement("h1");
    thRight.appendChild(h1Right);
    let aRight = document.createElement("a");
    aRight.innerText = "⇝";
    aRight.setAttribute('href', "/src/story/blue-end.html");
    h1Right.appendChild(aRight);

    let hr = document.createElement("hr");
    header.appendChild(hr);
}

function createContent(){
    let divContainer = document.createElement("div");
    console.log(divContainer);
    divContainer.className = "container";
    document.body.appendChild(divContainer);

    let tableText = document.createElement("table");
    divContainer.appendChild(tableText);

    let tr1 = document.createElement("tr");
    tableText.appendChild(tr1);
    let th1 = document.createElement("th");
    tr1.appendChild(th1);
    let h2 = document.createElement("h2");
    h2.innerText = "¿No te sientes un poco maread@?";
    th1.appendChild(h2);

    let td = document.createElement("td");
    tableText.appendChild(td);
    let img = document.createElement("img");
    img.setAttribute('src', "https://i.pinimg.com/originals/5a/4c/91/5a4c91599d1d921747c0a64e31eb2036.gif");
    img.width = "300";
    img.height = "206";
    td.appendChild(img);
    
    let br = document.createElement("br");
    divContainer.appendChild(br);
}

function createFooter(){
    let footer = document.createElement("footer");
    console.log(footer)
    document.body.appendChild(footer);

    let hr = document.createElement("hr");
    footer.appendChild(hr);

    let progressBar = document.createElement("progress");
    progressBar.value = "33";
    progressBar.max = "100";
    footer.appendChild(progressBar);

    let iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ 2 ~"
    footer.appendChild(iPage);
    
    let br = document.createElement("br");
    footer.appendChild(br);
}
