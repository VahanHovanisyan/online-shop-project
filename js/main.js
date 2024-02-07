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
    const slider = getSliderPromoProduct();
    const section = getSection();
    section.className = 'hero'
    page.append(slider,section);
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

function getSection() {
    const section = document.createElement('section');
    const container = getContainer();
    container.classList.add('hero__container');
    section.append(container);

    return section;
}

function getTitleAndSearchBox() {
    const content = document.createElement('div');
    content.className = 'title-and-search-box';
    const title = getTitle('h2','title');
    title.textContent = 'Все кроссовки';
    const search = getSearchBox();
    content.append(title,search);

    return content;
}

function getSearchBox() {
    const form = document.createElement('form');
    form.className = 'search-form';
    const input = document.createElement('input');
    input.setAttribute('type', 'search');
    input.className = 'search-form__input'
    const button = document.createElement('button');
    button.className = 'search-form__button';
    const iconSearch = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    iconSearch.classList.add('nav__icon');
    const iconSearchUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    iconSearchUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#search');

    iconSearch.appendChild(iconSearchUse);
    button.append(iconSearch);
    form.append(button, input);

    return form;
}

function getTitle(tag = 'h2',addClass = 'title') {
    const title = document.createElement(tag);
    title.className = addClass;

    return title;
}

function getContainer() {
    const container = document.createElement('div');
    container.className = 'container';
    const content = getTitleAndSearchBox();
    container.prepend(content);

    return container;
}

function getProduct() {
    const product = document.createElement('article');
    product.className = 'product';
    const link = document.createElement('a');
    link.className = 'product__link';
    const buttonFavorite = document.createElement('button');
    buttonFavorite.className = 'product__favorite-button';
    const buttonPlus = document.createElement('button');
    buttonPlus.className = 'product__plus-button';

    const iconFavorite = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    iconFavorite.classList.add('nav__icon');
    const iconPlus = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    iconPlus.classList.add('nav__icon');

    const iconFavoriteUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    const iconPlusUse = document.createElementNS('http://www.w3.org/2000/svg', 'use');

    iconFavoriteUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#cart');
    iconPlusUse.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './img/svg/sprite.svg#favorite');

    iconFavorite.appendChild(iconFavoriteUse);
    iconPlus.appendChild(iconPlusUse);

    buttonFavorite.append(iconFavorite);
    buttonPlus.append(iconPlus);
    
}

const header = getHeader();
const pageContainer = getPageContainer();

pageContainer.append(getMainPage())

app.append(header, pageContainer);