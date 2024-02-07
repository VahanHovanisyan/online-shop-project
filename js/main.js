const app = document.getElementById('app');

function getHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.append(getLogo());
    header.append(getNavigation());
    return header;
}

function getNavigation() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const navList = document.createElement('ul');
    navList.className = 'nav__list';

    const navItem1 = document.createElement('li');
    navItem1.className = 'nav__item';
    const navItem2 = document.createElement('li');
    navItem2.className = 'nav__item';
    const navItem3 = document.createElement('li');
    navItem3.className = 'nav__item';

    const navLink1 = document.createElement('a');
    navLink1.className = 'nav__link';
    const navLink2 = document.createElement('a');
    navLink2.className = 'nav__link';
    const navLink3 = document.createElement('a');
    navLink3.className = 'nav__link';

    const navIconCart = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    navIconCart.classList.add('nav__icon');
    const navIconFavorite = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    navIconFavorite.classList.add('nav__icon');
    const navIconProfile = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    navIconProfile.classList.add('nav__icon');

    const navUseCart = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const navUseFavorite = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const navUseProfile = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    navUseCart.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#cart');
    navUseFavorite.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#favorite');
    navUseProfile.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#profile');

    navIconCart.appendChild(navUseCart);
    navIconFavorite.appendChild(navUseFavorite);
    navIconProfile.appendChild(navUseProfile);

    navLink1.append(navIconCart)
    navLink2.append(navIconFavorite)
    navLink3.append(navIconProfile)

    navItem1.append(navLink1);
    navItem2.append(navLink2);
    navItem3.append(navLink3);

    navList.append(navItem1, navItem2, navItem3);
    nav.append(navList);

    return nav;
}

function getLogo() {
    const imgUrl = './img/logo.png';
    const logo = document.createElement('a');
    logo.setAttribute('href', 'index.html');
    logo.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.setAttribute('src', imgUrl);
    const logoStrongText = document.createElement('strong');
    logoStrongText.textContent = 'REACT SNEAKERS'.toUpperCase();
    const logoSpanText = document.createElement('span');
    logoSpanText.textContent = 'Магазин лучших кроссовок';
    logo.append(logoImg, logoStrongText, logoSpanText);
    return logo;
}

function getPageContainer() {
    const main = document.createElement('main');
    main.className = 'main';
    return main;
}

function getMainPage() {
    const page = document.createElement('div');
    page.className = 'main-page';
    page.prepend(getSliderPromoProduct())
    return page;
}

function getSliderPromoProduct() {
    const slider = document.createElement('div');
    slider.className = 'swiper slider-promo'
    const sliderWrapper = document.createElement('div');
    sliderWrapper.className = 'swiper-wrapper';
    const sliderSlide = document.createElement('div');
    sliderSlide.className = 'swiper-slide slider-promo__slide';
    const sliderButtonNext = document.createElement('button');
    sliderButtonNext.className = 'swiper-button-next';
    const sliderButtonPrev = document.createElement('button');
    sliderButtonPrev.className = 'swiper-button-prev';
    const content = document.createElement('div');
    content.className = 'slider-promo__content';
    const TextInTheContent = document.createElement('p');
    TextInTheContent.className = 'slider-promo__text';
    TextInTheContent.textContent = 'Forever!';
    const highlightedWord = getHighlightedWord().textContent = 'Stan Smith';
    const ButtonInTheContent = document.createElement('button');
    ButtonInTheContent.className = 'slider-promo__button';
    const sliderImg = document.createElement('img');
    sliderImg.setAttribute('src', './img/slider-img.png');
    sliderImg.className = 'slider-promo__img img';

    TextInTheContent.prepend(`${highlightedWord} ,`);
    sliderSlide.prepend(content);
    sliderSlide.append(sliderImg);
    sliderWrapper.append(sliderSlide);
    slider.append(sliderWrapper);
    slider.append(sliderButtonPrev, sliderButtonNext);
    content.prepend(TextInTheContent);
    content.append(ButtonInTheContent);

    return slider;
}

function getHighlightedWord() {
    const highlightedWord = document.createElement('mark');
    highlightedWord.className = 'highlighted-word';
    return highlightedWord;
}

function getButton() {
    const button = document.createElement('button');
    button.className = 'button';

    return button
}



const header = getHeader();
const pageContainer = getPageContainer();

pageContainer.append(getMainPage())

app.append(header, pageContainer);