var xmlDoc;
if (typeof window.DOMParser != "undefined") {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "new.xml", false);
    if (xmlhttp.overrideMimeType) {
        xmlhttp.overrideMimeType('text/xml');
    }
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    }
else {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = "false";
    xmlDoc.load("new.xml");
}
var news = xmlDoc.getElementsByTagName("new");
var str = "";
for (i = 0; i < news.length; i++)
{
    str += "<div class=\"new\"><div class=\"new__content\"><a href=\"new.html?new=" + i + "\" class=\"link__img\"><img class=\"new__img\" src=\"" + news[i].getElementsByTagName("urlimg")[0].textContent + "\"></a>" + 
    "<a href=\"new.html?new=" + i + "\" class=\"link__title\"><h3 class=\"new__title\">" + news[i].getElementsByTagName("title")[0].textContent + "</h3></a>" +
    "<p class=\"new__data\">" + news[i].getElementsByTagName("date")[0].textContent + "</p></div></div>" 
}
document.querySelector(".main__news").innerHTML = str;