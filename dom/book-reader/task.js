const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
const colorControls = document.querySelectorAll('.book__control_color .color');
const bgControls = document.querySelectorAll('.book__control_background .color');

fontSizeControls.forEach((control) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
        
        const group = control.closest('.book__control_font-size');
        const allControls = group.querySelectorAll('.font-size');

        allControls.forEach(item => item.classList.remove('font-size_active'));

        control.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');
        const size = control.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});

colorControls.forEach((control) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();
        
        const group = control.closest('.book__control_color');
        const allControls = group.querySelectorAll('.color');

        allControls.forEach(item => item.classList.remove('color_active'));

        control.classList.add('color_active');

        book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
        const color = control.dataset.textColor;
        if (color === 'gray') {
            book.classList.add('book_color-gray');
        } else if (color === 'whitesmoke') {
            book.classList.add('book_color-whitesmoke');
        } else if (color === 'black') {
            book.classList.add('book_color-black');
        }
    });
});

bgControls.forEach((control) => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        const group = control.closest('.book__control_background');
        const allControls = group.querySelectorAll('.color');

        allControls.forEach(item => item.classList.remove('color_active'));
        control.classList.add('color_active');

        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        const bg = control.dataset.bgColor;
        if (bg === 'black') {
            book.classList.add('book_bg-black');
        } else if (bg === 'gray') {
            book.classList.add('book_bg-gray');
        } else if (bg === 'white') {
            book.classList.add('book_bg-white');
        }
    });
});