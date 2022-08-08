const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuCartAside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

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

// 

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'monitor',
  price: 220,
  image: 'https://images.samsung.com/is/image/samsung/mx-t35f-lf24t350fhlxzx-frontblack-308825225?$650_519_PNG$',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});
productList.push({
  name: 'computador',
  price: 620,
  image: 'https://www.accesoriosparacomputadores.co/blog/wp-content/uploads/2015/03/las-partes-del-computador-800x400.jpg',
});



function insertProduct (arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); 

    productInfoFigure.appendChild(productImgCart);

    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

insertProduct(productList);
