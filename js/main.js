const base = location.origin;
const production = true;

const footer = production ? `${base}/cdm/footer.html` : `${base}/footer.html`
const header = production ? `${base}/cdm/header.html` : `${base}/header.html`
const services = production ? `${base}/cdm/services.html` : `${base}/services.html`

jQuery(document).ready(function ($) {

    'use strict';
    /************** Mixitup (Filter Projects) *********************/
    $('.filter-gallery').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

});

const prepareHeaderBody = () => {
    const headerBody = document.querySelector('.header__body');
    if (!headerBody) return;

    const urlParts = window.location.pathname.split('/');
    const currentPage = urlParts[urlParts.length - 1] || 'index.html';

    const content = headerContent.find(x => x.page.includes(currentPage));
    console.log(currentPage);
    if (content) {
        headerBody.innerHTML = `
            ${content.title}
            ${content.text}
        `;
    } else {
        console.warn(`No header content found for page: ${currentPage}`);
    }
};

setTimeout(() => {
    prepareHeaderBody();
}, 500);


fetch(header)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    })
    .catch((err) => {
        console.log(err.message);
    });
fetch(footer)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    })
    .catch((err) => {
        console.log(err.message);
    });

fetch(services)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.getElementById("services").innerHTML = data;
    })
    .catch((err) => {
        console.log(err.message);
    });

const method = (element) => {
    const pagename = element.dataset.page;
    if (pagename) {
        if (production) {
            window.location.href = `${base}/cdm/services/${pagename}.html`;
        } else {
            window.location.href = `${base}/services/${pagename}.html`;
        }
    } else {
        console.warn('No data-page attribute found on element.');
    }
};

const getFlag = () => {
    const headerLogo = document.getElementById('flag');
    headerLogo.setAttribute('src', `${window.location.origin}${production ? '/cdm' : ''}/assets/RU.svg`);
}

const getHeaderLogo = () => {
    const headerLogo = document.querySelectorAll('.header__logo-image');
    headerLogo.forEach(x => {
        x.setAttribute('src', `${window.location.origin}${production ? '/cdm' : ''}/assets/header-logo.svg`);
    });
}

const getFooterLogo = () => {
    const headerLogo = document.getElementById('footer-logo');
    headerLogo.setAttribute('src', `${window.location.origin}${production ? '/cdm' : ''}/assets/small-logo.svg`);
}

const getCircalImage = () => {
    const headerLogo = document.getElementById('circal-text');
    headerLogo.setAttribute('src', `${window.location.origin}${production ? '/cdm' : ''}/assets/circal-text.svg`);
}

const toggleMenu = (element) => {
    element.classList.toggle('active');
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle('active');
}

setTimeout(() => {
    getFlag();
    getHeaderLogo();
    getFooterLogo();
    getCircalImage();
}, 500);  
