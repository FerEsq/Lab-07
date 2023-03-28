window.onload = () => {
    createHeader();
    createContent();
    createFooter();
}

function createHeader(){

    let nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-md navbar-light";
    console.log(nav)
    document.body.appendChild(nav);

    let div1 = document.createElement("div");
    div1.className = "container-fluid mx-auto text-center";
    nav.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "collapse navbar-collapse";
    div1.appendChild(div2);

    let ul = document.createElement("ul");
    ul.className = "navbar-nav mx-auto";
    div2.appendChild(ul);

    let liIndex = document.createElement("li");
    liIndex.className = "nav-item";
    ul.appendChild(liIndex);
    let aIndex = document.createElement("a");
    aIndex.className = "nav-link";
    aIndex.setAttribute('href', "/nuevos-lanzamientos.html");
    aIndex.innerText = "Volver al Inicio";
    liIndex.appendChild(aIndex);
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
    let h1 = document.createElement("h1");
    h1.innerText = "Good stories had bad endings";
    th1.appendChild(h1);

    let td = document.createElement("td");
    tableText.appendChild(td);
    let img = document.createElement("img");
    img.setAttribute('src', "https://i.pinimg.com/originals/73/69/6e/73696e022df7cd5cb3d999c6875361dd.gif");
    img.width = "250";
    img.height = "225";
    td.appendChild(img);

    let br1 = document.createElement("br");
    divContainer.appendChild(br1);

}

function createFooter(){
    let footer = document.createElement("footer");
    console.log(footer)
    document.body.appendChild(footer);

    let hr = document.createElement("hr");
    footer.appendChild(hr);

    let progressBar = document.createElement("progress");
    progressBar.value = "100";
    progressBar.max = "100";
    footer.appendChild(progressBar);

    let iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ Fin ~"
    footer.appendChild(iPage);
    
    let br = document.createElement("br");
    footer.appendChild(br);
}
