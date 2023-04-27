var xmlDoc;
let url = new URL(document.location.href);
let z = url.searchParams.get('category');
str = document.querySelectorAll('.link-aside');
for(i = 0; i < str.length; i++) {
    let url = new URL(str[i].href);
    url.searchParams.set('category', i);
    document.querySelectorAll('.link-aside')[i].href = url;
}
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "catalog.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("C:\Users\efiml\OneDrive\Документы\Лабы\КЯР\Курсовая работа\HTML\catalog.xml");
}
function get(p) {
    var tovars = xmlDoc.getElementsByTagName("category")[p].getElementsByTagName("tovar");
    var str = "";
    var header = xmlDoc.getElementsByTagName("category")[p].getAttribute('name');
    for (i = 0; i < tovars.length; i++) {
        let cost = tovars[i].getElementsByTagName("cost")[0].innerHTML;
        let scidka = tovars[i].getElementsByTagName("skidka")[0].innerHTML;
        let cost_s = cost* ( 100 - scidka) / 100;
        str += "<div class=\"item\"><div class = \"item__content\">";
        str += "<img src=\"" + tovars[i].getElementsByTagName("urlimg")[0].textContent + "\"><h4 class=\"item__title\">" +
            tovars[i].getElementsByTagName("name")[0].textContent + "</h4><p class=\"item__cost\">" +
            cost +  " " + tovars[i].getElementsByTagName("cost")[0].getAttribute("unit") + "</p><p class=\"item__scidka\">" +
            cost_s.toFixed(2) + " " + tovars[i].getElementsByTagName("cost")[0].getAttribute("unit") + "</p><a href=\"tovar.html?category="+ p + "&tovar=" + i + "\"class=\"item__button\">Купить</a>";
        str += "</div></div>";
    }
    document.getElementById("tovar").innerHTML = str;
    document.querySelector("main.main").firstElementChild.innerHTML = header;
    }
get(z);


