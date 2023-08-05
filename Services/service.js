// JavaScript for Slideshow

const slideshowImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image filenames here
];

let currentSlide = 0;

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slideshowImages.length - 1;
    } else if (currentSlide >= slideshowImages.length) {
        currentSlide = 0;
    }
    
    const slideshowImage = document.querySelector('.slideshow-image');
    slideshowImage.style.opacity = 0;
    setTimeout(() => {
        slideshowImage.src = slideshowImages[currentSlide];
        slideshowImage.style.opacity = 1;
    }, 300);
}

// JavaScript for Service Hover Effect

const serviceBlocks = document.querySelectorAll('.service');

serviceBlocks.forEach(serviceBlock => {
    serviceBlock.addEventListener('mouseenter', () => {
        serviceBlock.classList.add('hovered');
    });
    
    serviceBlock.addEventListener('mouseleave', () => {
        serviceBlock.classList.remove('hovered');
    });
});

// JavaScript for Smooth Scrolling

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// JavaScript for Accordion

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    
    title.addEventListener('click', () => {
        content.classList.toggle('active');
        item.classList.toggle('active');
    });
});
