var xmlDoc;
let url = new URL(document.location.href);
let n = url.searchParams.get('new');
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
var news = xmlDoc.getElementsByTagName("new")[n];
var str = "";
str += "<h2 class=\"new__title\">" + news.getElementsByTagName("title")[0].textContent + "</h2><img class=\"new__img\" src=\"" + news.getElementsByTagName("urlimg")[0].textContent + "\"><div class=\"new__description\">" + news.getElementsByTagName("description")[0].innerHTML + "</div><p class=\"new__data\">" + news.getElementsByTagName("date")[0].textContent + "</p>" + document.querySelector(".new__content").innerHTML = str; 
document.querySelector("title").innerHTML =  news.getElementsByTagName("title")[0].textContent;
  
                    