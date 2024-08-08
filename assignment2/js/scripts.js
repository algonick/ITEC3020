/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 


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

    // set view mode value (light or dark)
    var toggleValue = "light";    //view mode default is "light".
    var mode = getCookie('mode');
    if ( mode ) { toggleValue = mode; }  //if there's a cookie value, use it
    toggleView(toggleValue); 

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

function toggleView(mode) {

    if ( toggleValue == "dark" ){   
        document.body.classList.add('dark');
        document.getElementById('sideNav').classList.add('dark');
        //change toggle button values
        toggleButton.classList.add('dark');
        document.getElementById('viewName').textContent = 'Light';
    } else {
        //Light is default//        
        document.body.classList.remove('dark');
        document.getElementById('sideNav').classList.remove('dark');
        //change toggle button values
        toggleButton.classList.remove('dark');
        document.getElementById('viewName').textContent = 'Dark';
    }

    setCookie('mode', toggleValue, 1);
}

function changeView() {
    // if in Light mode (no  class=dark for button), switch to Dark 
    // if in Dark  mode (has class=dark for button), switch to Light

    var toggleButton = document.getElementById('viewToggle');

    if ( toggleButton.classList.contains("dark") ) { 
        toggleValue = "light";
    } else {
        toggleValue = "dark"
    }

    toggleView(toggleValue);
}


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
  
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
