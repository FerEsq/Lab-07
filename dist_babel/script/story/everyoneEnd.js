"use strict";

if (document.getElementById('everyoneEnd') != null) {
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
    aLeft.setAttribute('href', "mistake.html");
    h1Left.appendChild(aLeft);
    var thRight = document.createElement("th");
    tableNav.appendChild(thRight);
    var h1Right = document.createElement("h1");
    thRight.appendChild(h1Right);
    var aRight = document.createElement("a");
    aRight.innerText = "⇝";
    aRight.setAttribute('href', "lesson.html");
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
    h2.innerText = "La culpa te está consumiendo";
    th1.appendChild(h2);
    var tr2 = document.createElement("tr");
    tableText.appendChild(tr2);
    var th2 = document.createElement("th");
    tr2.appendChild(th2);
    var h3 = document.createElement("h3");
    h3.innerText = "Y parece que acabó contigo";
    th2.appendChild(h3);
    var td = document.createElement("td");
    tableText.appendChild(td);
    var img = document.createElement("img");
    img.setAttribute('src', "https://art.pixilart.com/1d506ddb543c512.png");
    img.width = "296";
    img.height = "296";
    td.appendChild(img);
  };
  var createFooter = function createFooter() {
    var footer = document.createElement("footer");
    console.log(footer);
    document.body.appendChild(footer);
    var hr = document.createElement("hr");
    footer.appendChild(hr);
    var progressBar = document.createElement("progress");
    progressBar.value = "80";
    progressBar.max = "100";
    footer.appendChild(progressBar);
    var iPage = document.createElement("i");
    iPage.className = "footerText";
    iPage.innerText = "~ 5 ~";
    footer.appendChild(iPage);
    var br = document.createElement("br");
    footer.appendChild(br);
  };
}