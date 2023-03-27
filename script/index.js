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

    let thIndex = document.createElement("th");
    tableNav.appendChild(thIndex);
    let aIndex = document.createElement("a");
    aIndex.innerText = "Inicio";
    aIndex.setAttribute('href', "index.html");
    thIndex.appendChild(aIndex);

    let thPopular = document.createElement("th");
    tableNav.appendChild(thPopular);
    let aPopular = document.createElement("a");
    aPopular.innerText = "Libros Populares";
    aPopular.setAttribute('href', "libros-populares.html");
    thPopular.appendChild(aPopular);

    let thNew = document.createElement("th");
    tableNav.appendChild(thNew);
    let aNew = document.createElement("a");
    aNew.innerText = "Nuevos Lanzamientos";
    aNew.setAttribute('href', "nuevos-lanzamientos.html");
    thNew.appendChild(aNew);

    let h1Title = document.createElement("h1");
    h1Title.innerText = "¡Bienvenid@ a la Biblioteca de Fer!"
    header.appendChild(h1Title);
}

function createContent(){
    let imgCat = document.createElement("img");
    imgCat.className = "catAnimation"
    imgCat.setAttribute('src', "https://images.vexels.com/media/users/3/205195/isolated/preview/1c2ccc57f033c7b2612f1cce2b6eb7f2-bookshelf-sleeping-cat-illustration.png");
    imgCat.width = "256";
    imgCat.height = "256";
    document.body.appendChild(imgCat);

    let h2Subtitle = document.createElement("h2");
    //ㅤ --> espacio
    h2Subtitle.innerText = "¿Que deseas ver hoy?"
    document.body.appendChild(h2Subtitle);

    let ulPages = document.createElement("ul");
    document.body.appendChild(ulPages);

    let liPopular = document.createElement("li");
    ulPages.appendChild(liPopular);
    let aPopular = document.createElement("a");
    aPopular.innerText = "Libros Populares";
    aPopular.setAttribute('href', "libros-populares.html");
    liPopular.appendChild(aPopular);

    let liNew = document.createElement("li");
    ulPages.appendChild(liNew);
    let aNew = document.createElement("a");
    aNew.innerText = "Nuevos Lanzamientos";
    aNew.setAttribute('href', "nuevos-lanzamientos.html");
    liNew.appendChild(aNew);
}

function createFooter(){
    let footer = document.createElement("footer");
    console.log(footer)
    document.body.appendChild(footer);

    let hr = document.createElement("hr");
    footer.appendChild(hr);

    let progressBar = document.createElement("progress");
    progressBar.value = "50";
    progressBar.max = "100";
    footer.appendChild(progressBar);

    let iPage = document.createElement("i");
    iPage.innerText = "~ Página 1 ~"
    footer.appendChild(iPage);
    
    let br = document.createElement("br");
    footer.appendChild(br);
}

