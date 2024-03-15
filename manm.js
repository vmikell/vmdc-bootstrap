let hero = document.getElementById('hero')
const h1 = document.getElementById('man_h1')

function fadeOutOnScroll(element) {
  if (!element) {
    return
  }

  let distanceToTop = window.scrollY + element.getBoundingClientRect().top
  let elementHeight = element.offsetHeight
  let scrollTop = document.documentElement.scrollTop

  let opacity = 1

  if (scrollTop > distanceToTop) {
    opacity = 1 - ((scrollTop - distanceToTop) / elementHeight)*2
  }

  if (opacity >= 0) {
    h1.style.opacity = opacity
  }
  console.log(opacity)
}

function scrollHandler() {
  fadeOutOnScroll(hero)
  console.log('fading')
}

window.addEventListener('scroll', scrollHandler)
