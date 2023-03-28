if(document.getElementById('pickApill') != null){
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
        aLeft.setAttribute('href', "../nuevos-lanzamientos.html");
        h1Left.appendChild(aLeft);
    
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
        th1.colSpan = "2";
        tr1.appendChild(th1);
        let h1 = document.createElement("h1");
        h1.innerText = "Escoge una píldora";
        th1.appendChild(h1);
    
        let td1 = document.createElement("td");
        tableText.appendChild(td1);
        let a1 = document.createElement("a");
        a1.setAttribute('href', "red-pill.html");
        td1.appendChild(a1);
        let imgRed = document.createElement("img");
        imgRed.setAttribute('src', "https://i.ibb.co/DGTKX9S/red-pill.png");
        imgRed.width = "115";
        imgRed.height = "68";
        a1.appendChild(imgRed);
    
        let td2 = document.createElement("td");
        tableText.appendChild(td2);
        let a2 = document.createElement("a");
        a2.setAttribute('href', "blue-pill.html");
        td2.appendChild(a2);
        let imgBlue = document.createElement("img");
        imgBlue.setAttribute('src', "https://i.ibb.co/4ZMhdPR/blue-pill.png");
        imgBlue.width = "115";
        imgBlue.height = "68";
        a2.appendChild(imgBlue);
    
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
        progressBar.value = "0";
        progressBar.max = "100";
        footer.appendChild(progressBar);
    
        let iPage = document.createElement("i");
        iPage.className = "footerText";
        iPage.innerText = "~ 1 ~"
        footer.appendChild(iPage);
        
        let br = document.createElement("br");
        footer.appendChild(br);
    }
    
}