let articles = document.getElementsByClassName('article');
let externalLinks = document.getElementsByClassName('external-link');
let externalLinksParent = document.getElementById('external-links');
let windowHeight = document.documentElement.clientHeight;


function isAbove(element) {
    return element.getBoundingClientRect().bottom < 0;
}
function isBelow(element) {
    return element.getBoundingClientRect().top > windowHeight - 10;
}

function scrolled() {
    for (let i = 0; i < articles.length; ++i) {
        articles[i].classList.remove('hiding-above');
        articles[i].classList.remove('hiding-below');
        if (isAbove(articles[i])) {
            articles[i].classList.add('hiding-above');
        }
        else if (isBelow(articles[i])) {
            articles[i].classList.add('hiding-below');
        }
    }
}


document.addEventListener('scroll', scrolled);
document.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight;
});
for (let i = 0; i < externalLinks.length; ++i) {
    externalLinks[i].addEventListener('mouseenter', () => {
        externalLinksParent.classList.add('expand');
    });
    externalLinks[i].addEventListener('mouseleave', () => {
        externalLinksParent.classList.remove('expand');
    });
}
scrolled();