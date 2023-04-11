"use strict";

if (document.getElementById('city') != null) {
  window.onload = function () {
    createHeader();
    createContent();
    createFooter();
  };
  var createHeader = function createHeader() {
    var header = document.createElement("header");
    console.log(header);
    document.body.appendChild(header);
    var tableNav = document.createElement("table");
    tableNav.cellPadding = "10";
    tableNav.cellSpacing = "5";
    header.appendChild(tableNav);
    var thLeft = document.createElement("th");
    tableNav.appendChild(thLeft);
    var h1Left = document.createElement("h1");
    thLeft.appendChild(h1Left);
    var aLeft = document.createElement("a");
    aLeft.innerText = "⇜";
    aLeft.setAttribute('href', "you.html");
    h1Left.appendChild(aLeft);
    var thRight = document.createElement("th");
    tableNav.appendChild(thRight);
    var h1Right = document.createElement("h1");
    thRight.appendChild(h1Right);
    var aRight = document.createElement("a");
    aRight.innerText = "⇝";
    aRight.setAttribute('href', "you-end.html");
    h1Right.appendChild(aRight);
    var hr = document.createElement("hr");
    header.appendChild(hr);
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
    var h2 = document.createElement("h2");
    h2.innerText = "A la ciudad no le gusta tu egoísmo";
    th1.appendChild(h2);
    var tr2 = document.createElement("tr");
    tableText.appendChild(tr2);
    var th2 = document.createElement("th");
    tr2.appendChild(th2);
    var h3 = document.createElement("h3");
    h3.innerText = "Despidete de tu maravilloso regalo...";
    th2.appendChild(h3);
    var div2 = document.createElement("div");
    div2.style.height = "180px";
    divContainer.appendChild(div2);
    var img = document.createElement("img");
    img.className = "cityAnimation";
    img.setAttribute('src', "https://cdnb.artstation.com/p/assets/images/images/034/452/165/original/jeong-h-lee-ezgif-com-resize-3.gif?1612327608");
    img.width = "200";
    img.height = "238";
    div2.appendChild(img);
    var br1 = document.createElement("br");
    divContainer.appendChild(br1);
    var br2 = document.createElement("br");
    divContainer.appendChild(br2);
  };
  var createFooter = function createFooter() {
    var footer = document.createElement("footer");
    console.log(footer);
    document.body.appendChild(footer);
    var hr = document.createElement("hr");
    footer.appendChild(hr);
    var progressBar = document.createElement("progress");
    progressBar.value = "60";
    progressBar.max = "100";
    footer.appendChild(progressBar);
    var iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ 4 ~";
    footer.appendChild(iPage);
    var br = document.createElement("br");
    footer.appendChild(br);
  };
}