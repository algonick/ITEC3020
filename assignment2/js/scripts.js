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
        document.getElementById(article+'-start').focus();
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

    if ( mode == "dark" ){   
        document.body.classList.add('dark');
        document.getElementById('sideNav').classList.add('dark');
        //change toggle button values
        document.getElementById('viewToggle').classList.add('dark');
        document.getElementById('viewName').textContent = 'Light';
    } else {
        //Light is default//        
        document.body.classList.remove('dark');
        document.getElementById('sideNav').classList.remove('dark');
        //change toggle button values
        document.getElementById('viewToggle').classList.remove('dark');
        document.getElementById('viewName').textContent = 'Dark';
    }

    setCookie('mode', mode, 1);
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
// ****************************************** BLOG code. From course assignment ****************************** //
document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    const spotlight = document.getElementById('spotlight');
    const moreBlogs = document.getElementById('moreBlogs');

    var newRow = false;
    var postNum = 0;

    const postRow = document.createElement('div');  // create blog row element

    fetch('js/posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            // manipulate postElement to show the content of the blog post with the specific style defined for it
            const postElement = document.createElement('div');  // actual blog item
            var blogHTML = "";   //clear out blogHTML each time through
            blogHTML = renderPost(post);
            postElement.innerHTML += blogHTML;// add the blog HTML

            // spotlight goes first
            if (postNum < 1) {
                spotlight.appendChild(postElement); // move the blog HTML into its div element for display
                newRow = true;  //set row counter to begin pairs of "more" blogs
            }else {
            // for rest of posts (more-blogs), want only 2 items per row
                // to be side-by-side, more-blogs need an additional wrapping container 
                const postContainer = document.createElement('div');  //create more-blogs container wrapper
                postContainer.classList.add('col-lg-6');  // more-blogs container needs this class
                postContainer.appendChild(postElement);  //add the blog HTML to the more-blogs container

                if (newRow === true) {   
                    //if first item (post already added above) add to row container and go to next post
                    postRow.innerHTML = ""; //clear out rowElement from any previous pair content
                    postRow.appendChild(postContainer);  //add first blog to row container

                    newRow = false;  // set newRow as false for next post

                }else {       
                    //if second item (post already added above) add to row container write out row         
                    postRow.appendChild(postContainer);  //add second blog to row container    
                    postRow.classList.add('row');   // give div the row container class

                    //postRow.appendChild(rowElement);   // set the innerHTML to the whole HTML of both containers
                    moreBlogs.appendChild(postRow);  //write the blog row

                    newRow = true;//reset flag for next pair
                }   
            } 
            postNum++;
        });
    })
    .catch(error =>  console.error('Error loading blog posts:', error));
  
    renderPost = (post) => {       
        blogHTML = `
            <div class= "card mb-4"><a href="#!"><img class="card-img-top" src=${post.img} alt=${post.headline}/></a>
                <div class="card-body">
                    <div class="small text-muted">${post.date}</div>
                    <h2 class="card-title">${post.headline}</h2>
                    <p class="card-text">${post.teaser}</p>
                    <button id=more-${post.id} class="btn btn-primary" onclick="showBlog(${post.id})">Read more →</button>
                        <div id="${post.id}" class="article-body" style="display: none;">
                            <p id="${post.id}-start"></p>${post.body}
                        </div>
                </div>
            </div>`;   
        return blogHTML;
    }    
        
});