
var miniHeaderActive = document.getElementById('mini_header');

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      /*document.getElementById('b').innerHTML = scrolled;*/
      if(scrolled >= 110) {
          miniHeaderActive.classList.add('mini_header_active');
      
      }
      if(scrolled < 110) {
      miniHeaderActive.classList.remove('mini_header_active');
      
      }
    }