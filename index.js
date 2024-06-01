if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('#cursor').classList.add('cursor__none');
}


window.addEventListener('load', function () {
    const loader = document.querySelector('.nav');
    loader.classList.add('nav-active');
    const header = document.querySelector('.header__title');
    header.classList.add('title-active');
    setUnderlineLink()
});

const navAdapt = document.querySelector('.nav-adaptiv');
const nav = document.querySelector('.nav');
const body = document.body;

navAdapt.addEventListener('click', () => {
    nav.classList.toggle('nav-adaptiv-active')
    body.classList.toggle('body__scroll')
})

window.addEventListener('resize', (e) => {
    if (e.target.screen.width > 768) {
        nav.classList.remove('nav-adaptiv-active')
        body.classList.remove('body__scroll')
    }
})








let fon = document.querySelector('.fon-stars')
function lines() {
    let sizeW = Math.random() * 12;
    let e = document.createElement('div');
    e.setAttribute('class', 'fon-stars__circle');
    fon.appendChild(e);

    e.style.width = 2 + sizeW + 'px';
    e.style.left = Math.random() * + innerWidth + 'px';
    let duration = Math.random() * 3;
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(() => {
        fon.removeChild(e)
    }, 5000);

}

let intervalLine;

function functionIntervalLine() {
    clearInterval(intervalLine)
    intervalLine = setInterval(() => {
        lines()
    }, 300);
}



let cursor = document.getElementById('cursor');
let scrollPos = 0;
let userClientY = 0;

window.onmousemove = (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + scrollPos + 'px';
    userClientY = e.clientY;
}

window.addEventListener('scroll', () => {
    scrollPos = this.scrollY;
    cursor.style.top = userClientY + scrollPos + 'px';

    setUnderlineLink();
});

let isActivateAbout = false;
let isActivateSkills = false;
let isActivatePortfolio = false;
let isActivateContact = false;

function setUnderlineLink() {
    let $header = document.querySelector('.header').offsetTop;
    let $about = document.querySelector('.about').offsetTop;
    let $skills = document.querySelector('.conteiner__skills').offsetTop;
    let $portfolio = document.querySelector('.conteiner__portfolio').offsetTop;
    let $footer = document.querySelector('.footer');

    let $fonStars = document.querySelector('.fon-stars');

    setTimeout(() => {
        if (scrollPos >= $about) {
            $fonStars.style.display = 'none';
            clearInterval(intervalLine);
        } else {
            $fonStars.style.display = 'block';
            functionIntervalLine()
        }



        if (scrollPos >= $header
            && scrollPos < $about) {
            document.querySelector('.nav__header').classList.add('underline-link')

            document.querySelector('.nav__about').classList.remove('underline-link')
            document.querySelector('.nav__skills').classList.remove('underline-link')
            document.querySelector('.nav__portfolio').classList.remove('underline-link')
            document.querySelector('.nav__footer').classList.remove('underline-link')
        }



        if (scrollPos >= $about
            && scrollPos < $skills) {
            document.querySelector('.nav__about').classList.add('underline-link')

            document.querySelector('.nav__header').classList.remove('underline-link')
            document.querySelector('.nav__skills').classList.remove('underline-link')
            document.querySelector('.nav__portfolio').classList.remove('underline-link')
            document.querySelector('.nav__footer').classList.remove('underline-link')
        }
        if (scrollPos > $header + 100
            && !isActivateAbout) {
            const aboutImg = document.querySelector('.about__img');
            const aboutRight = document.querySelector('.about__right');
            aboutImg.classList.add('about-active');
            aboutRight.classList.add('about-active');

            isActivateAbout = true;
        }



        if (scrollPos >= $skills
            && scrollPos < $portfolio) {

            document.querySelector('.nav__skills').classList.add('underline-link')

            document.querySelector('.nav__header').classList.remove('underline-link')
            document.querySelector('.nav__about').classList.remove('underline-link')
            document.querySelector('.nav__portfolio').classList.remove('underline-link')
            document.querySelector('.nav__footer').classList.remove('underline-link')
        }
        if (scrollPos > $about + 100
            && !isActivateSkills) {
            isActivateSkills = true;

            const skillsTitle = document.querySelector('.conteiner__skills__title');
            skillsTitle.classList.add('conteiner__skills__title-active');

            const skillsIconTitle = document.querySelectorAll('.conteiner__skills__titleSlils');
            const skillsIcon = document.querySelectorAll('.conteiner__skills__icon');
            let i = 0;

            const skillsText = document.querySelectorAll('.conteiner__skills__right');

            function right() {
                setTimeout(() => {
                    for (const key in skillsText) {
                        if (skillsText.hasOwnProperty(key)) {
                            skillsText[key].classList.add('conteiner__skills__right-active');
                        }
                    }

                    // for (const key in skillsText) {
                    //     console.log(key);
                    //     console.log(skillsText[key]);
                    //     skillsText[key].classList.add('conteiner__skills__right-active');
                    // }
                }, 300)
            }

            const timerId = setInterval(() => {
                if (skillsIcon.length === i + 1) {
                    clearInterval(timerId);
                    right();
                }
                skillsIcon[i].classList.add('conteiner__skills__icon-active');
                skillsIconTitle[i].classList.add('conteiner__skills__titleSlils-active');
                i++;
            }, 200);
        }



        if (scrollPos >= $portfolio
            && !(scrollPos >= body.offsetHeight - window.innerHeight)) {
            // if (scrollPos >= $portfolio && scrollPos < $footer.offsetTop) {
            document.querySelector('.nav__portfolio').classList.add('underline-link')

            document.querySelector('.nav__header').classList.remove('underline-link')
            document.querySelector('.nav__about').classList.remove('underline-link')
            document.querySelector('.nav__skills').classList.remove('underline-link')
            document.querySelector('.nav__footer').classList.remove('underline-link')
        }

        if (scrollPos > $skills + 100 || body.offsetHeight - window.innerHeight
            && !isActivatePortfolio) {
            const portfolioTitle = document.querySelector('.conteiner__portfolio__title');
            portfolioTitle.classList.add('conteiner__portfolio__title-active');

            const portfolioItem = document.querySelectorAll('.conteiner__portfolio__item');
            let i = 0;

            let timerId = setInterval(() => {
                if (portfolioItem.length === i + 1) {
                    clearInterval(timerId)
                }
                portfolioItem[i].classList.add('conteiner__portfolio__item-active');
                i++;
            }, 200);

            isActivatePortfolio = true;
        }



        if (scrollPos >= body.offsetHeight - window.innerHeight) {
            document.querySelector('.nav__footer').classList.add('underline-link')

            document.querySelector('.nav__header').classList.remove('underline-link')
            document.querySelector('.nav__about').classList.remove('underline-link')
            document.querySelector('.nav__portfolio').classList.remove('underline-link')
            document.querySelector('.nav__skills').classList.remove('underline-link')
        }
        if (scrollPos >= body.offsetHeight - window.innerHeight
            && !isActivateContact) {
            const footerTitle = document.querySelector('.footer__title');
            footerTitle.classList.add('footer__title-acive');

            const footerContent = document.querySelector('.footer__content');
            footerContent.classList.add('footer__content-active');

            isActivateContact = true;
        }
    }, 0)
}


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", (e) => {
        nav.classList.remove('nav-adaptiv-active')
        e.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}






















const closeButton = document.querySelectorAll('.close__portfolio__item');
const moreDetails = document.querySelectorAll('.more-details');

const historyMap = document.querySelector('.button-history-map');
const historyMapActive = document.querySelector('.history-map_active');

historyMap.addEventListener('click', () => {
    historyMapActive.style.display = 'flex';
    body.style.overflow = 'hidden';
})
for (const i of closeButton) {
    i.addEventListener('click', () => {
        historyMapActive.style.display = 'none';
        body.style.overflow = 'visible';
    })
}

for (const i of moreDetails) {
    i.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'more-details') {
            historyMapActive.style.display = 'none';
            body.style.overflow = 'visible';
        }
    })
}

const musicApp = document.querySelector('.button-music-app');
const musicAppActive = document.querySelector('.music-app_active');

musicApp.addEventListener('click', () => {
    musicAppActive.style.display = 'flex';
    body.style.overflow = 'hidden';
})


for (const i of closeButton) {
    i.addEventListener('click', () => {
        musicAppActive.style.display = 'none';
        body.style.overflow = 'visible';
    })
}

for (const i of moreDetails) {
    i.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'more-details') {
            musicAppActive.style.display = 'none';
            body.style.overflow = 'visible';
        }
    })
}