const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuCartAside = document.querySelector('.product-detail');

//Eventos del DOM capturando los clicks//
burgerMenu.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuCartIcon.addEventListener('click', toggleCartAside);


// funciones para activar y desactivar los menús desplegables// 
function toggleMobileMenu() {
  if (!menuCartAside.classList.contains('inactive')) {
    menuCartAside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu() {
  if (!menuCartAside.classList.contains('inactive')) {
    menuCartAside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive');
  } else if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.add('inactive');
  }
  menuCartAside.classList.toggle('inactive'); 
}