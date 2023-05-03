
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
    let cost_p = cost* scidka / 100;
    str += "<div class=\"inf\">";
    str += "<div class=\"stretchy-wrapper\"><img src=\"" + tovar.getElementsByTagName("urlimg")[0].textContent + "\"></div><h3>" +
    tovar.getElementsByTagName("name")[0].innerHTML + "</h3><p>Цена: " +
    tovar.getElementsByTagName("cost")[0].textContent + " " + tovar.getElementsByTagName("cost")[0].getAttribute("unit") + "</p><p>Количество: " +
    tovar.getAttribute("number")  + " штук</p><p>Наличие: ";
    if (tovar.getAttribute('availability') == 1){
        str +=  "есть";
    }
    else
    {
        str += "нет"; 
    }
    str  += "</p></div><div class=\"cost\"><div class=\"cost__scidka\">Скидка " +
    scidka + "%</div><div class=\"cost__scidka\">" + cost_p.toFixed(2) + " " + tovar.getElementsByTagName("cost")[0].getAttribute("unit") + 
    "</div><div class=\"cost__cost\">К оплате</div><div class=\"cost__cost\">" + cost_s.toFixed(2) + " " + 
    tovar.getElementsByTagName("cost")[0].getAttribute("unit") + "</div></div>";
    document.querySelector(".items__content").innerHTML = str;