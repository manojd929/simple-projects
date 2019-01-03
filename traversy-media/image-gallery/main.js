const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');


function imgClick(e) {
    // Reset opacity
    imgs.forEach(img => img.style.opacity = 1);
    // change current img to src of clicked image
    current.src = e.target.src;

    // set opacity to 0.4
    e.target.style.opacity = 0.4;
}
imgs.forEach(img => img.addEventListener('click', imgClick));
