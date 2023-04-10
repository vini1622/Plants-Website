const hamburger= document.getElementsByClassName('hamburger')[0]
const navlinks = document.getElementsByClassName('nav-links')[0]

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('active')
})
