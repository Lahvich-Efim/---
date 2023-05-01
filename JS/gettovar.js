var xmlDoc;
let url = new URL(document.location.href);
let c = url.searchParams.get('category');
let t = url.searchParams.get('tovar');

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
    xmlDoc.load("catalog.xml");
}
    var tovar = xmlDoc.getElementsByTagName("category")[c].getElementsByTagName("tovar")[t];
    var str = "";
    var str_op = "";
    var str_ch = "";
    let cost = tovar.getElementsByTagName("cost")[0].innerHTML;
    let scidka = tovar.getElementsByTagName("skidka")[0].innerHTML;
    let cost_s = cost* ( 100 - scidka) / 100;
    str += "<div class=\"buy\">";
    str += "<div class=\"buy__stretchy-wrapper\"><img class=\"buy__img\" src=\"" + tovar.getElementsByTagName("urlimg")[0].textContent + "\"></div><div><h3 class=\"buy__title\">" +
    tovar.getElementsByTagName("name")[0].textContent + "</h3><p class=\"buy__cost\">" +
    tovar.getElementsByTagName("cost")[0].textContent + " " + tovar.getElementsByTagName("cost")[0].getAttribute("unit") + "</p><p class=\"buy__scidka\">" +
    cost_s.toFixed(2) + " " + tovar.getElementsByTagName("cost")[0].getAttribute("unit") + "</p><p class=\"buy__nalich\"><span class=\"nalich\" style=\"color:";
    if (tovar.getAttribute('availability') == 1){
        str +=  "#00860D;\">В наличии";
    }
    else
    {
        str += "#9d0000\">Нет в наличии"; 
    }
    str  += "</span><span class=\"code\">Код: " +
    tovar.getElementsByTagName("code")[0].textContent + "</span></p></div><a href=\"buy.html?category=" + c + "&tovar=" + t + "\"class=\"buy__buy\">Купить</a>"; 
    str += "</div>" + document.getElementById("tovar").innerHTML;
    str_op =  tovar.getElementsByTagName("opisanie")[0].innerHTML;
    str_ch =  tovar.getElementsByTagName("characteristic")[0].innerHTML;
    document.getElementById("tovar").innerHTML = str;
    document.querySelector(".content-info__opisanie").innerHTML += str_op;
    document.querySelector(".content-info__characteristic").innerHTML = str_ch;
