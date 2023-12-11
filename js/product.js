const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
function toggleContent() {
    // Get the content element
    var content = document.getElementById('tabcontent3');

    // Toggle the visibility of the content
    var isExpanded = content.style.display === 'block';
    content.style.display = isExpanded ? 'none' : 'block';

    // Toggle the aria-expanded attribute
    var toggle = document.querySelector('.accordion-toggle');
    toggle.setAttribute('aria-expanded', !isExpanded);
}