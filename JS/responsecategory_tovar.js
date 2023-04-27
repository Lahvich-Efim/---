str = document.querySelectorAll('.link-aside');
for(i = 0; i < str.length; i++) {
    let url = new URL(str[i].href);
    url.searchParams.set('category', i);
    document.querySelectorAll('.link-aside')[i].href = url;
}