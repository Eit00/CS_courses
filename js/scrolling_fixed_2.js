/*const sticky = document.querySelector('.list-topics');
const stickToThis = document.querySelector('.navbar-second fixed');
const stickToThisTop = stickToThis.offsetTop;

function updateSticky() {
  if (window.pageYOffset >= stickToThisTop) {
    sticky.classList.add('fixed');
  } else {
    sticky.classList.remove('fixed');
  }
}

window.addEventListener('scroll', updateSticky);

const sticky2 = document.querySelector('.list-topics');
const stickyTop2 = sticky.offsetTop;

function updateSticky2() {
  if (window.pageYOffset >= stickyTop2) {
    sticky.classList.add('fixed');
  } else {
    sticky.classList.remove('fixed');
  }
}

window.addEventListener('scroll', updateSticky2);
*/
var container = document.querySelector('header');
var div2 = document.querySelector('.list-topics');
var containerTop = container.offsetTop;

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= containerTop) {
    div2.style.position = 'fixed';
    div2.style.top = '5.5%';
  } else {
    div2.style.position = 'static';
    div2.style.top = '0';
  }
});