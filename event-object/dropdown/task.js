const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const btn = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');
    
    btn.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });
    
    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            btn.textContent = item.textContent;
            list.classList.remove('dropdown__list_active');
        });
    });
});