"use strict";

if (document.getElementById('lesson') != null) {
  window.onload = function () {
    createHeader();
    createContent();
    createFooter();
  };
  var createHeader = function createHeader() {
    var nav = document.createElement("nav");
    nav.className = "navbar navbar-expand-md navbar-light";
    console.log(nav);
    document.body.appendChild(nav);
    var div1 = document.createElement("div");
    div1.className = "container-fluid mx-auto text-center";
    nav.appendChild(div1);
    var div2 = document.createElement("div");
    div2.className = "collapse navbar-collapse";
    div1.appendChild(div2);
    var ul = document.createElement("ul");
    ul.className = "navbar-nav mx-auto";
    div2.appendChild(ul);
    var liIndex = document.createElement("li");
    liIndex.className = "nav-item";
    ul.appendChild(liIndex);
    var aIndex = document.createElement("a");
    aIndex.className = "nav-link";
    aIndex.setAttribute('href', "../nuevos-lanzamientos.html");
    aIndex.innerText = "Volver al Inicio";
    liIndex.appendChild(aIndex);
  };
  var createContent = function createContent() {
    var divContainer = document.createElement("div");
    console.log(divContainer);
    divContainer.className = "container";
    document.body.appendChild(divContainer);
    var tableText = document.createElement("table");
    divContainer.appendChild(tableText);
    var tr1 = document.createElement("tr");
    tableText.appendChild(tr1);
    var th1 = document.createElement("th");
    tr1.appendChild(th1);
    var h1 = document.createElement("h1");
    h1.innerText = "Good stories had bad endings";
    th1.appendChild(h1);
    var td = document.createElement("td");
    tableText.appendChild(td);
    var img = document.createElement("img");
    img.setAttribute('src', "https://i.pinimg.com/originals/73/69/6e/73696e022df7cd5cb3d999c6875361dd.gif");
    img.width = "250";
    img.height = "225";
    td.appendChild(img);
    var br1 = document.createElement("br");
    divContainer.appendChild(br1);
  };
  var createFooter = function createFooter() {
    var footer = document.createElement("footer");
    console.log(footer);
    document.body.appendChild(footer);
    var hr = document.createElement("hr");
    footer.appendChild(hr);
    var progressBar = document.createElement("progress");
    progressBar.value = "100";
    progressBar.max = "100";
    footer.appendChild(progressBar);
    var iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ Fin ~";
    footer.appendChild(iPage);
    var br = document.createElement("br");
    footer.appendChild(br);
  };
}