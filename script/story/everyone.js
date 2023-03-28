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
    aLeft.setAttribute('href', "/story/red-pill.html");
    h1Left.appendChild(aLeft);

    let thRight = document.createElement("th");
    tableNav.appendChild(thRight);
    let h1Right = document.createElement("h1");
    thRight.appendChild(h1Right);
    let aRight = document.createElement("a");
    aRight.innerText = "⇝";
    aRight.setAttribute('href', "/story/mistake.html");
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
    h2.innerText = "La ciudad está muy feliz de tener tu ayuda";
    th1.appendChild(h2);

    let tr2 = document.createElement("tr");
    tableText.appendChild(tr2);
    let th2 = document.createElement("th");
    tr2.appendChild(th2);
    let h3 = document.createElement("h3");
    h3.innerText = "Pero ten cuidado, no puedes cometer errores";
    th2.appendChild(h3);

    let td = document.createElement("td");
    tableText.appendChild(td);
    let img = document.createElement("img");
    img.setAttribute('src', "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6c68bd99-92a3-4476-8306-f5a95c1ade32/dbfl4pn-7e1b0c3d-117e-47da-bc20-3d71c719bf50.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZjNjhiZDk5LTkyYTMtNDQ3Ni04MzA2LWY1YTk1YzFhZGUzMlwvZGJmbDRwbi03ZTFiMGMzZC0xMTdlLTQ3ZGEtYmMyMC0zZDcxYzcxOWJmNTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5OPofxQkKWr247epvmbXDvS0pq3Rpzuh3vIK8g3hR4I");
    img.width = "326";
    img.height = "185";
    td.appendChild(img);

    let br = document.createElement("br");
    divContainer.appendChild(br);

    let audio = document.createElement("audio");
    audio.autoplay = true;
    audio.controls = true;
    divContainer.appendChild(audio);
    let source = document.createElement("source");
    source.setAttribute('src', "/media/fireworks.mp3");
    source.setAttribute('type', "audio/mpeg");
    audio.appendChild(source);
}

function createFooter(){
    let footer = document.createElement("footer");
    console.log(footer)
    document.body.appendChild(footer);

    let hr = document.createElement("hr");
    footer.appendChild(hr);

    let progressBar = document.createElement("progress");
    progressBar.value = "40";
    progressBar.max = "100";
    footer.appendChild(progressBar);

    let iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ 3 ~"
    footer.appendChild(iPage);
    
    let br = document.createElement("br");
    footer.appendChild(br);
}
