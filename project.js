const boxes = document.querySelectorAll('.box.expandable');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        boxes.forEach((b) => b.classList.remove('expanded'));

        box.classList.toggle('expanded');
        const details = box.querySelector('.details');
        if (details) {
            details.style.display = box.classList.contains('expanded') ? 'block' : 'none';
        }
    });
});