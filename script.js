// Script for navigation bar
const bar = document.querySelector('#bar');
const close = document.querySelector('#close');
const nabar = document.querySelector('#navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nabar.classList.add('active');
    console.log('menu clicked');
  });
}
if (close) {
  close.addEventListener('click', () => {
    nabar.classList.remove('active');
    console.log('menu removed');
  });
}
