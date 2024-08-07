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
    var toggleValue = "light";    //view mode default is "light".  

    //If page already set to 'dark', set that. (Otherwise, keep default) 
    var toggleButton = document.getElementById('viewToggle');
    var toggleClasses = toggleButton.classList;
    if ( Array.from(toggleClasses).filter(word => word == "dark") ) { 
        toggleValue = "dark";
    }

    //If there's a value passed (in URL), use that.   Otherwise keep value as set
    var mode = checkMode();
    if ( mode ) { toggleValue = mode; }

    if ( toggleValue == "light" ){
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

function passMode() {
    var currentMode = document.getElementById('viewToggle').className;
    var link = this.href; 
    alert(link);

    var url = link.split('#')[0];  //if hash exists, get it
    var section = link.split('#')[1]; 

    alert('link: '+ link + '; url: ' + url + '; section: ' + section);

    var modeLink = url + "?" + currentMode + "#" + section; //add mode to url (keep hash)
    
    window.location(modeLink);
}

function checkMode() {
    var currentMode = document.getElementById('viewToggle').className;
    var link = this.href; 
    alert(link);

    var extras = link.split('?')[1];   //if parameter was passed, get it
    var mode = extras.split('#')[0];   // if there is a URL hash, get it
    var modeValue = mode.split('=')[1];   //get the display mode from parameter

    alert('extras: '+ extras + '; mode: ' + mode + '; modeValue: ' + modeValue);

   return modeValue;

    
}
