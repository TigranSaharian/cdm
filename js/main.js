const serviceFooter = '/footer.html'
const serviceHeader = '/header.html'
const serviceServices = '/services.html'
const production = true;

jQuery(document).ready(function ($) {

    'use strict';
    /************** Mixitup (Filter Projects) *********************/
    $('.filter-gallery').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });

});


fetch(serviceHeader ?? "/header.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("header").innerHTML = data;
    })
    .catch((err) => {
        console.log(err.message);
    });
fetch(serviceFooter ?? "/footer.html")
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        document.querySelector("footer").innerHTML = data;
    })
    .catch((err) => {
        console.log(err.message);
    });

fetch(serviceServices ?? "/services.html")
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
        const base = location.origin; // e.g., http://localhost:5500
        if (production) {
            window.location.href = `${base}/cdm/services/${pagename}.html`;
        } else {
            window.location.href = `${base}/services/${pagename}.html`;
        }
    } else {
        console.warn('No data-page attribute found on element.');
    }
};
