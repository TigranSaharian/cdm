const base = location.origin;
const production = false;

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

const toggleMenu = (element) => {
    element.classList.toggle('active');
    const menu = document.querySelector(".navbar-menu");
    menu.classList.toggle('active');
}
