if(document.getElementById('populares') != null){
    window.onload = () => {
        createHeader();
        createContent();
        createFooter();
    }
    
    const createHeader = () =>{
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
        aIndex.setAttribute('href', "index.html");
        aIndex.innerText = "Inicio";
        liIndex.appendChild(aIndex);
    
        let liPopular = document.createElement("li");
        liPopular.className = "nav-item";
        ul.appendChild(liPopular);
        let aPopular = document.createElement("a");
        aPopular.className = "nav-link";
        aPopular.setAttribute('href', "libros-populares.html");
        aPopular.innerText = "Libros Populares";
        liPopular.appendChild(aPopular);
    
        let liNew = document.createElement("li");
        liNew.className = "nav-item";
        ul.appendChild(liNew);
        let aNew = document.createElement("a");
        aNew.className = "nav-link";
        aNew.setAttribute('href', "nuevos-lanzamientos.html");
        aNew.innerText = "Nuevos Lanzamientos";
        liNew.appendChild(aNew); 
    
        let header = document.createElement("header");
        console.log(header)
        document.body.appendChild(header);
        let h1Title = document.createElement("h1");
        h1Title.innerText = "Libros populares"
        header.appendChild(h1Title);
    
        let hr = document.createElement("hr");
        header.appendChild(hr);
    }
    
    const createContent = () =>{
        let h2Subtitle = document.createElement("h2");
        h2Subtitle.innerText = "ㅤEstos son nuestros lanzamientos más populares:"
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
        img1.setAttribute('src', "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328774498i/9811918.jpg");
        img1.width = "140";
        img1.height = "211";
        td1.appendChild(img1);
        let b1 = document.createElement("b");
        b1.innerText = "The Moon Over The Mountain";
        td1.appendChild(b1);
        let i1 = document.createElement("i");
        i1.innerText = "Atsushi Nakajima";
        td1.appendChild(i1);
    
        let td2 = document.createElement("td");
        tableBooks.appendChild(td2);
        let img2 = document.createElement("img");
        img2.setAttribute('src', "https://tienda.sophosenlinea.com/imagenes/9780811/978081120481.GIF");
        img2.width = "140";
        img2.height = "211";
        td2.appendChild(img2);
        let b2 = document.createElement("b");
        b2.innerText = "No Longer Human";
        td2.appendChild(b2);
        let i2 = document.createElement("i");
        i2.innerText = "Dazai Osamu";
        td2.appendChild(i2);
    
        let td3 = document.createElement("td");
        tableBooks.appendChild(td3);
        let img3 = document.createElement("img");
        img3.setAttribute('src', "https://cdn2.wwnorton.com/wwnproducts/LIVERT/1/3/9780871401731/9780871401731_300.jpeg");
        img3.width = "140";
        img3.height = "211";
        td3.appendChild(img3);
        let b3 = document.createElement("b");
        b3.innerText = "Rashōmon and Other Stories";
        td3.appendChild(b3);
        let i3 = document.createElement("i");
        i3.innerText = "Ryūnosuke Akutagawa";
        td3.appendChild(i3);
    
        let td4 = document.createElement("td");
        tableBooks.appendChild(td4);
        let img4 = document.createElement("img");
        img4.setAttribute('src', "https://m.media-amazon.com/images/I/512hJqrk5fL.jpg");
        img4.width = "140";
        img4.height = "211";
        td4.appendChild(img4);
        let b4 = document.createElement("b");
        b4.innerText = "The Poems of Nakahara Chuya";
        td4.appendChild(b4);
        let i4 = document.createElement("i");
        i4.innerText = "Chūya Nakahara";
        td4.appendChild(i4);
    
    }
    
    const createFooter = () =>{
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
        iPage.innerText = "~ Página 2 ~"
        footer.appendChild(iPage);
        
        let br = document.createElement("br");
        footer.appendChild(br);
    }

}
