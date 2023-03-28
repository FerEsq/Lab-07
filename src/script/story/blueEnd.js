if(document.getElementById('blueEnd') != null){
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
        aLeft.setAttribute('href', "blue-pill.html");
        h1Left.appendChild(aLeft);
    
        let thRight = document.createElement("th");
        tableNav.appendChild(thRight);
        let h1Right = document.createElement("h1");
        thRight.appendChild(h1Right);
        let aRight = document.createElement("a");
        aRight.innerText = "⇝";
        aRight.setAttribute('href', "lesson.html");
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
        h2.innerText = "Oh no, la píldora tenía veneno";
        th1.appendChild(h2);
    
        let tr2 = document.createElement("tr");
        tableText.appendChild(tr2);
        let th2 = document.createElement("th");
        tr2.appendChild(th2);
        let h3 = document.createElement("h3");
        h3.innerText = "Y parece que acabó contigo";
        th2.appendChild(h3);
    
        let td = document.createElement("td");
        tableText.appendChild(td);
        let img = document.createElement("img");
        img.setAttribute('src', "https://art.pixilart.com/1d506ddb543c512.png");
        img.width = "296";
        img.height = "296";
        td.appendChild(img);
    }
    
    function createFooter(){
        let footer = document.createElement("footer");
        console.log(footer)
        document.body.appendChild(footer);
    
        let hr = document.createElement("hr");
        footer.appendChild(hr);
    
        let progressBar = document.createElement("progress");
        progressBar.value = "66";
        progressBar.max = "100";
        footer.appendChild(progressBar);
    
        let iPage = document.createElement("i");
        iPage.className = "footerText";
        iPage.innerText = "~ 3 ~"
        footer.appendChild(iPage);
        
        let br = document.createElement("br");
        footer.appendChild(br);
    }
    
}