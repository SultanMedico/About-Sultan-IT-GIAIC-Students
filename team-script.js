// team-script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Team section script loaded.");

    // Example of a simple interactive element (not strictly needed for this design)
    const teamCards = document.querySelectorAll('.team-member-card');

    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            // console.log("Card clicked:", card.querySelector('h3').textContent);
            // You could, for example, open a modal with more details about the team member
            // alert(`More details about ${card.querySelector('h3').textContent} coming soon!`);
        });
    });

    // You could implement Intersection Observer here to add classes for animations
    // when cards come into view, e.g., fade-in animation.
    // const observerOptions = {
    //     root: null, // viewport
    //     rootMargin: '0px',
    //     threshold: 0.1 // 10% of item visible
    // };

    // const observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible'); // Add a class to trigger animation
    //             observer.unobserve(entry.target); // Stop observing once animated
    //         }
    //     });
    // }, observerOptions);

    // teamCards.forEach(card => {
    //     observer.observe(card);
    // });
});