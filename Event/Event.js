// JavaScript for Event Modal

const eventCards = document.querySelectorAll('.event-card');
const modal = document.querySelector('.event-modal');
const modalImage = modal.querySelector('img');
const modalTitle = modal.querySelector('h3');
const modalDate = modal.querySelector('p');

eventCards.forEach(eventCard => {
    eventCard.addEventListener('click', () => {
        modalImage.src = eventCard.querySelector('img').src;
        modalTitle.textContent = eventCard.querySelector('h3').textContent;
        modalDate.textContent = eventCard.querySelector('p').textContent;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
