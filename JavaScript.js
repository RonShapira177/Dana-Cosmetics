document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-track-container');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    const scrollAmount = container.offsetWidth;
    let direction = -1; // -1 = ימינה (scroll שמאלה), 1 = שמאלה (scroll ימינה)

    nextButton.addEventListener('click', () => {
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        container.scrollBy({ left: -direction * scrollAmount, behavior: 'smooth' });
    });

    setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const atStart = container.scrollLeft <= 0;
        const atEnd = container.scrollLeft >= maxScroll - 5;

        if (atEnd) direction = 1; // שינוי כיוון לשמאל (scroll ימינה)
        if (atStart) direction = -1; // שינוי כיוון לימין (scroll שמאלה)

        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }, 4000);
});
