/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 


var mode = null;

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
    mode = checkMode();
    if (mode == 'dark') {toggleView(mode);}

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

    //If page already set to 'dark', set that. (Otherwise, keep default) 
    var toggleButton = document.getElementById('viewToggle');
    if ( toggleButton.classList.contains("dark") ) { 
        toggleValue = "dark";
    }

    //If there's a value passed (in URL), mode will be set above.   Otherwise keep value as set
    if ( mode == 'dark' ) { toggleValue = "light"; } //toggleValue is what to switch FROM (therefore, to stay dark, switch to dark)

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
        //clean up URL
        if (window.location.href.indexOf("dark") != -1  ) {
            var cleanURL = window.location.href.split('?')[0]
            if (window.location.hash)  { cleanURL += window.location.hash; } //add any pre-existing hash value 
        
    }

}

function passMode(link) {
    var currentMode = 'light';   //default
    alert(link);

    var url = link.split('#')[0];  //if hash exists, get it
    var section = link.split('#')[1]; 
    alert('link: '+ link + '; url: ' + url + '; section: ' + section);

    if ( document.getElementById('viewToggle').classList.contains('dark') ){
        currentMode = 'dark';
    }

    var modeLink = url + "?mode=" + currentMode; //add mode to url (keep hash)
    if (section) {modeLink =+ "#" + section;} //not all pages need hash
    
    window.location.href = modeLink;
}

function checkMode() {
    var modeValue = 'light';
    var link = window.location.href;                            ; 
    alert(link);

    const parameters= window.location.search;
    const modeParams = new URLSearchParams(parameters);
    const passedMode = modeParams.get('mode');

    if(passedMode) {modeValue = passedMode;}

    //if parameter was passed, get it
    if ( link.indexOf("?") != -1 ) { 
        var extras = link.split('?')[1]; 
    }  
    // if there is a URL hash, get it
    if ( extras && extras.indexOf("#") != -1 ) {
        var mode = extras.split('#')[0];   
    } 
    //get the display mode from parameter
    if ( mode && mode.indexOf("=") != -1 ) {
        modeValue = mode.split('=')[1];   
    } else {
        if (extras && extras.indexOf("=") != -1 ) {
            modeValue = extras.split("=")[1];
        }
    }

    alert('extras: ' + extras +  '; modeValue: ' + modeValue);

   return modeValue;

    
}
