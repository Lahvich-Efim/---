    let str = document.querySelectorAll('.category__link');
    for(i = 0; i < str.length; i++) {
        let url = new URL(str[i].href);
        url.searchParams.set('category', i);
        document.querySelectorAll('.category__link')[i].href = url;
    }