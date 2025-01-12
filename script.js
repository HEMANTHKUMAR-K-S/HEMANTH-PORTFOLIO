const toggleIcon = document.getElementById('menu-toggle');
const navBar = document.getElementById('navbar');
let isOpen = false;

toggleIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    if (isOpen) {
        closeNavBar();
    } else {
        openNavBar();
    }
});

document.addEventListener('click', () => {
    if (isOpen) {
        closeNavBar();
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        closeNavBar();
    }
});

function openNavBar() {
    navBar.style.display = 'block';
    toggleIcon.innerHTML = '<i class="fas fa-times"></i>';
    document.body.style.overflow = 'hidden';
    isOpen = true;
}

function closeNavBar() {
    navBar.style.display = 'none';
    toggleIcon.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = 'auto';
    isOpen = false;
}