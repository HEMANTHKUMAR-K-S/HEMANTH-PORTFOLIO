
const toggleIcon = document.getElementById('menu-toggle');
const navBar = document.getElementById('navbar');
let isOpen = false;

toggleIcon.addEventListener('click', () => {
if (isOpen) {
    navBar.style.display = 'none';
    toggleIcon.innerHTML = '<i class="fas fa-bars"></i>';
} else {
    navBar.style.display = 'block';
    toggleIcon.innerHTML = '<i class="fas fa-times"></i>';
}
isOpen = !isOpen;
});