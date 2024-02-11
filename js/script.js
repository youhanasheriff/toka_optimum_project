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