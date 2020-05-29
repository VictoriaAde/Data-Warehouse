/////////// mobileMenu

function mobileMenu() {
    var toggler = document.querySelector(".nav-list");
    if (toggler.classList.contains('responsive')) {
        toggler.classList.remove('responsive');
        document.querySelector('.fa-close').style.display = 'none';
        document.querySelector('.fa-bars').style.display = 'block';
    } else {
        toggler.classList.add('responsive');
        document.querySelector('.fa-close').style.display = 'block';
        document.querySelector('.fa-bars').style.display = 'none';
    }
}




//////////////// Siema
const mySiema = new Siema({
    perPage: 1,
    duration: 500,
});
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
