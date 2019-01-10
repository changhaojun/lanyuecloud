function pageJump(event) {
    const element = event.target;
    let href = element.getAttribute('data-href');
    let currentIndex =  element.getAttribute('data-i');
    console.log(href);
    console.log(currentIndex);
    window.sessionStorage.setItem('href', href);
    window.sessionStorage.setItem('currentIndex', currentIndex);
    if(href == 'home.html') {
        window.location.href = href;
    }else {
        window.location.href = 'iframe.html';
    }
}