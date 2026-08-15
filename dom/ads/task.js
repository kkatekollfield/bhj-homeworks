const rotators = document.querySelectorAll('.rotator');

rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll('.rotator__case');
    const activeCase = rotator.querySelector('.rotator__case_active');
    
    function rotate(cases, activeCase) {
        activeCase.classList.remove('rotator__case_active');
        
        let nextCase = activeCase.nextElementSibling;
        if (!nextCase) {
            nextCase = cases[0];
        }
        
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color || 'black';

        const speed = parseInt(nextCase.dataset.speed) || 1000;

        setTimeout(() => {
            rotate(cases, nextCase);
        }, speed);
    }

    rotate(cases, activeCase);
});
