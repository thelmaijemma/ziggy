
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");    
  var lazyloadThrottleTimeout;
let lazyImageText = document.querySelectorAll("p.project-link-text");
  
  function lazyload () {
    console.log(lazyImageText)
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }    
    
    lazyloadThrottleTimeout = setTimeout(function() {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop - 50)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        lazyImageText.forEach(function(text) {
          console.log('hi')
          if(text.offsetTop < (window.innerHeight + scrollTop)) {
            text.classList.remove('link-hide');
            text.classList.add('link-show');
  
          }
      });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);

  }
  
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

