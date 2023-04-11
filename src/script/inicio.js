import "core-js/features/promise";

function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve(image);
      };
      image.onerror = () => {
        reject(new Error(`Failed to load image from ${url}`));
      };
      image.src = url;
    });
}

if(document.getElementById('index') != null){
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
        h1Title.innerText = "¡Bienvenid@ a la Biblioteca de Fer!"
        header.appendChild(h1Title);
    }
    
    const createContent = () =>{
        let imgCat = document.createElement("img");
        imgCat.setAttribute('src', "https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif");
        imgCat.width = "256";
        imgCat.height = "256";
        document.body.appendChild(imgCat);

        setTimeout(() => {
            loadImage('https://images.vexels.com/media/users/3/205195/isolated/preview/1c2ccc57f033c7b2612f1cce2b6eb7f2-bookshelf-sleeping-cat-illustration.png')
              .then(image => {
                imgCat.className = "catAnimation"
                imgCat.setAttribute('src', image.src);
              })
              .catch(error => {
                console.error(error);
              });
          }, 6000);
    
        let h2Subtitle = document.createElement("h2");
        //ㅤ --> espacio
        h2Subtitle.innerText = "ㅤ¿Que deseas ver hoy?"
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
    
    const createFooter = () =>{
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
        iPage.className = "footerText";
        iPage.innerText = "~ Página 1 ~"
        footer.appendChild(iPage);
        
        let br = document.createElement("br");
        footer.appendChild(br);
    }   
}