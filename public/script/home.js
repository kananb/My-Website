let articles = document.getElementsByClassName('article');
let windowHeight = document.documentElement.clientHeight;

function isAbove(element) {
    return element.getBoundingClientRect().bottom < 0;
}
function isBelow(element) {
    return element.getBoundingClientRect().top > windowHeight;
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

document.onscroll = scrolled;
scrolled();