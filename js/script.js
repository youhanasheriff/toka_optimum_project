const url = window.location.href;

const ul = document.querySelector('ul');

if (url.includes('discover.html')) {
  ul.children[1].classList.add('active');
} else {
  ul.children[1].classList.remove('active');
}

if (url.includes('index.html')) {
  ul.children[0].classList.add('active');
} else {
  if (!url.includes('discover.html')) {
    ul.children[0].classList.add('active');
  } else {
    ul.children[0].classList.remove('active');
  }
}

// DISCOVER PAGE



if (url.includes('discover.html')) {
  const h2Title = document.createElement('h2');
  h2Title.textContent = 'Our products';

  const pPage = document.createElement('p');
  pPage.textContent = 'We provide the best water purification management system for your home and office. We provide the best water purification management system for your home and office';

  const addButtonElement = document.createElement('button');
  addButtonElement.classList.add('add-product-btn');
  addButtonElement.innerHTML = `ADD <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="white"/>
</svg>`;

  const previousElements = [h2Title, pPage, addButtonElement];
  const discoverHero = document.querySelector('.discover-hero');
  const addButton = document.querySelector('.add-product-btn');
  const productsSection = document.querySelector('.products');

  previousElements.forEach((element) => {
    discoverHero.appendChild(element);
  });

  if (!!addButton) { 
    addButton.addEventListener('click', () => {
    alert('Product added to cart');
    });
  }

  let selectedProduct = null;

  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'assets/fish-tank.png',
      fishName: 'Fish 1',
      ph: 7,
      temperature: 25,
      turbidity: 5,
      description: 'This is a description for product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'assets/fish-tank.png',
      fishName: 'Fish 2',
      ph: 7,
      temperature: 25,
      turbidity: 5,
      description: 'This is a description for product 2',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'assets/fish-tank.png',
      fishName: 'Fish 3',
      ph: 7,
      temperature: 25,
      turbidity: 5,
      description: 'This is a description for product 3',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'assets/fish-tank.png',
      fishName: 'Fish 4',
      ph: 7,
      temperature: 25,
      turbidity: 5,
      description: 'This is a description for product 4',
    },
  ];

  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-container');

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;

    const h3 = document.createElement('h3');
    h3.textContent = product.name;

    const p = document.createElement('p');
    p.textContent = product.description;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    div.addEventListener('click', () => {
      console.log(product);
      selectedProduct = product;

      discoverHero.innerHTML = '';
      
    });

    productsSection.appendChild(div);
  });
}
