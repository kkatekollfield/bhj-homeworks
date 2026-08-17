const blocksRevealed = document.querySelectorAll('.reveal')
// var isInViewport = function(element) {
//     const rect = element.getBoundingClientRect();
//     const viewportHeight = window.innerHeight;
    
//     return rect.top < viewportHeight && rect.bottom > 0;
// };

// window.addEventListener('scroll', () => {
//     blocksRevealed.forEach(element => {
//         if (isInViewport(element)) {
//             element.classList.add('reveal_active');
//         } else {
//             element.classList.remove('reveal_active');
//         }
//     });
// });

window.addEventListener('scroll', () => {
    blocksRevealed.forEach(element => {
        const {innerHeight} = window;
        const {top} = element.getBoundingClientRect();

        if (top < innerHeight && top > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
});