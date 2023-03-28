if(document.getElementById('redPill') != null){
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
        aLeft.setAttribute('href', "pick-a-pill.html");
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
        let img = document.createElement("img");
        img.setAttribute('src', "https://i.pinimg.com/originals/7d/09/a4/7d09a485cb23ebed6cb999e0f4302dd6.gif");
        img.width = "122";
        img.height = "122";
        th1.appendChild(img);
    
        let tr2 = document.createElement("tr");
        tableText.appendChild(tr2);
        let th2 = document.createElement("th");
        th2.colSpan = "2";
        tr2.appendChild(th2);
        let h2 = document.createElement("h2");
        h2.innerText = "Ahora tienes superpoderes";
        th2.appendChild(h2);
        let h3 = document.createElement("h3");
        h3.innerText = "¿Qué quieres hacer con ellos?";
        th2.appendChild(h3);
    
        let td1 = document.createElement("td");
        tableText.appendChild(td1);
        let h4One = document.createElement("h4");
        td1.appendChild(h4One);
        let a1 = document.createElement("a");
        a1.setAttribute('href', "you.html");
        a1.innerText = "Usarlos para ti";
        h4One.appendChild(a1);
    
        let td2 = document.createElement("td");
        tableText.appendChild(td2);
        let h4Two = document.createElement("h4");
        td2.appendChild(h4Two);
        let a2 = document.createElement("a");
        a2.setAttribute('href', "everyone.html");
        a2.innerText = "Usarlos para los demás";
        h4Two.appendChild(a2);
        
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
        progressBar.value = "20";
        progressBar.max = "100";
        footer.appendChild(progressBar);
    
        let iPage = document.createElement("i");
        iPage.className = "footerText";
        iPage.innerText = "~ 2 ~"
        footer.appendChild(iPage);
        
        let br = document.createElement("br");
        footer.appendChild(br);
    }
    
}