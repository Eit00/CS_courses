const sticky = document.querySelector('.navbar-second');
const stickyTop = sticky.offsetTop;

function updateSticky() {
  if (window.pageYOffset >= stickyTop) {
    sticky.classList.add('fixed');
  } else {
    sticky.classList.remove('fixed');
  }
}

window.addEventListener('scroll', updateSticky);