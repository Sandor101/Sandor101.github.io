/* Get the element you want displayed in fullscreen */ 
let elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
  openFullscreen();
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
  closeFullscreen();
}

// Events
let output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});
document.addEventListener("mozfullscreenchange", function() {
  output.innerHTML = "mozfullscreenchange event fired!";
});
document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});
document.addEventListener("msfullscreenchange", function() {
  output.innerHTML = "msfullscreenchange event fired!";
});

// Hamburger ikon
/*let hamburger = document.openList("#hamburger");

function openList() {
  if(elem.requestOnclick)
  elem.requestOnclick();
}
openList();
*/
// (ez a hamburger a bootstrap-nek)<button class="btn bd-search-docs-toggle d-md-none p-0 ml-3 collapsed" type="button" data-toggle="collapse" data-target="#bd-docs-nav" aria-controls="bd-docs-nav" aria-expanded="false" aria-label="A dokumentumok navigációjának átváltása"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg></button>