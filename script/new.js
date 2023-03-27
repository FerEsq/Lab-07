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
    h1Title.innerText = "Nuevos Lanzamientos"
    header.appendChild(h1Title);

    let hr = document.createElement("hr");
    header.appendChild(hr);
}

function createContent(){
    let h2Subtitle = document.createElement("h2");
    h2Subtitle.innerText = "ㅤEstos son nuestros más recientes lanzamientos:"
    document.body.appendChild(h2Subtitle);

    let divContainer = document.createElement("div");
    console.log(divContainer);
    divContainer.className = "container";
    document.body.appendChild(divContainer);

    let tableBooks = document.createElement("table");
    tableBooks.cellPadding = "10";
    divContainer.appendChild(tableBooks);

    let td1 = document.createElement("td");
    tableBooks.appendChild(td1);
    let img1 = document.createElement("img");
    img1.setAttribute('src', "https://bookcart.azurewebsites.net/Upload/Default_image.jpg");
    img1.width = "140";
    img1.height = "211";
    td1.appendChild(img1);
    let b1 = document.createElement("b");
    td1.appendChild(b1);
    let a1 = document.createElement("a");
    a1.innerText = "ʞooᙠ ɓuıssıW ǝɥ⊥";
    a1.setAttribute('href', "/story/pick-a-pill.html");
    b1.appendChild(a1);
    let i1 = document.createElement("i");
    i1.innerText = "F̸̝̠̎û̸̪͈̠͌̂̚m̵̩̳̈ḯ̴̧̤̻͚͂͐k̴̯̱͓̅̉̚̕ở̸͙̹̮̓͂̿ ̸̛̟̱̙̰̟̆͗̈́K̵̢̙̜̜͊͂̋̃͘i̴̧̮͇̾̒m̶͔̩̰͚̾͊͒͗ų̷̺̉r̶̖̝͎̾̔͛͝a̶̡͍͙̾ ";
    td1.appendChild(i1);

    let td2 = document.createElement("td");
    tableBooks.appendChild(td2);
    let img2 = document.createElement("img");
    img2.setAttribute('src', "https://m.media-amazon.com/images/I/31cMyZVk5vL._AC_SY400_.jpg");
    img2.width = "140";
    img2.height = "211";
    td2.appendChild(img2);
    let b2 = document.createElement("b");
    b2.innerText = "Japanese Gothic Tales";
    td2.appendChild(b2);
    let i2 = document.createElement("i");
    i2.innerText = "Kyōka Izumi";
    td2.appendChild(i2);

    let td3 = document.createElement("td");
    tableBooks.appendChild(td3);
    let img3 = document.createElement("img");
    img3.setAttribute('src', "https://m.media-amazon.com/images/I/51CeZrpS61L._AC_SY1000_.jpg");
    img3.width = "140";
    img3.height = "211";
    td3.appendChild(img3);
    let b3 = document.createElement("b");
    b3.innerText = "ㅤㅤI Am a Cat";
    td3.appendChild(b3);
    let i3 = document.createElement("i");
    i3.innerText = "Natsume Sōseki";
    td3.appendChild(i3);

    let td4 = document.createElement("td");
    tableBooks.appendChild(td4);
    let img4 = document.createElement("img");
    img4.setAttribute('src', "https://m.media-amazon.com/images/I/51EENZHH8JL._AC_SY400_.jpg");
    img4.width = "140";
    img4.height = "211";
    td4.appendChild(img4);
    let b4 = document.createElement("b");
    b4.innerText = "Night of the Milky Way Railway";
    td4.appendChild(b4);
    let i4 = document.createElement("i");
    i4.innerText = "Kenji Miyazawa";
    td4.appendChild(i4);

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
    iPage.innerText = "~ Página 2 ~"
    footer.appendChild(iPage);
    
    let br = document.createElement("br");
    footer.appendChild(br);
}
