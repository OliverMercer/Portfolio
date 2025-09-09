const elements = ['.award', 'a', '.btn', '#theme-switch', '.content'];

elements.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', () => {
            if (window.matchMedia('(hover: none)').matches) {
                element.classList.toggle('active');
            }
        });
    });
});
