const menu = document.getElementById('menu')
const closeMenu = document.getElementById('closeMenu')
const navbarItems = document.getElementById('navbarItems')

menu.addEventListener('click', () => {
  navbarItems.style.display = 'flex'
  menu.style.display = 'none'
})

closeMenu.addEventListener('click', () => {
  navbarItems.style.display = 'none'
  menu.style.display = 'block'
})

new Glider(document.querySelector('.glider'), {
  rewind: true,
  scrollLock: true,
  draggable: true,
  slidesToShow: 1,
  dots: '.dots',
  draggable: true,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});