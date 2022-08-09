
const button = document.querySelector('.button');
// button.addEventListener('click', toggleSection);

button.onclick = function(){
    const ratingSection = document.querySelector('.section-rating');
const afterSection = document.querySelector('.section-after');
    if (afterSection.style.display == 'none') {
    afterSection.style.display = 'block';
    ratingSection.style.display = 'none';
} else {
    afterSection.style.display = 'none';
    ratingSection.style.display = 'block';
}}

