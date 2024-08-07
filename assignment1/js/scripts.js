/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

var light_Bodybgcolor = "#FFF";
var light_Bodytext = "#6c757d";
var dark_Bodybgcolor = "#000";
var dark_Bodytext = "ddd"

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});

function showBlog(article){
    var articleToggle =  "more-" + article;
    // if article is hidden show it
    if ( document.getElementById(article).style.display == 'none' ) {
        document.getElementById(article).style.display='block'; //Show desired form
        document.getElementById(articleToggle).innerHTML='Close x';
        document.getElementById('article-start').focus();
    }else {
    // if article is open, close it
        document.getElementById(article).style.display='none'; //Show desired form
        document.getElementById(articleToggle).innerHTML='Read More →';
    }
    return true;
}

function openEmail() {
    var emailMessage =  bv
}

function toggleView() {
    var toggleButton = document.getElementById('viewToggle');
    var toggleValue = toggleButton.className;

    if (toggleValue == "light"){
        //if light view, switch to dark //        
        document.body.classList.add('dark');
        document.getElementById('sideNav').classList.add('dark');
        //change toggle button values
        toggleButton.classList.add('dark');
        document.getElementById('viewName').textContent = 'Light';

    } else {
        //if dark view, switch to light.  Light is default//        
        document.body.classList.remove('dark');
        document.getElementById('sideNav').classList.remove('dark');
        //change toggle button values
        toggleButton.classList.remove('dark');
        document.getElementById('viewName').textContent = 'Dark';

    }

}

