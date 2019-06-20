const toggleNav = () =>{
  const d = document,
  panel = d.querySelector('.Panel'),
  panelBtn = d.querySelector('.Panel-btn')

  panelBtn.addEventListener('click', e => {
    e.preventDefault()
    panelBtn.classList.toggle('is-active')
    panel.classList.toggle('is-active')
  })
}

const scrollNav = () =>{
  const itemLinks = document.querySelectorAll(".Menu-link")

  itemLinks.forEach(elem => elem.addEventListener('click', navBarClick))

  function navBarClick(e){
    smoothScroll(e);
  }

  function smoothScroll(e){
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute("href")
    const targetPosition = document.querySelector(targetId).offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition //- 80
    const duration = 1000
    let start = null

    window.requestAnimationFrame(step)
    function step(timestamp){
      if(!start) start = timestamp
      const progress = timestamp - start
      window.scrollTo(0, easeInOut(progress, startPosition, distance, duration))
      if(progress < duration) window.requestAnimationFrame(step)
    }
  }

  function easeInOut(t,b,c,d){
    t /= d/2
    if(t <1 ) return c/2*t*t + b
    t--
    return -c/2 * (t*(t-2) - 1) + b
  }
}

const toggleHeader = () =>{
  const h = document.getElementById('Header')
  let lastScrollTop = 0;
  // al hacer scroll aumenta el valor de sctop
  let sctop = document.documentElement.scrollTop
  let st = window.pageYOffset || document.documentElement.scrollTop

  if(st > lastScrollTop){
    h.classList.remove('slide-down')
    h.classList.add('slide-up')
  }else if(sctop === 0){
    h.classList.remove('slide-up')
    h.classList.add('slide-down')
  }

  lastScrollTop = st

}

const animaHeader = () =>{window.addEventListener('scroll', toggleHeader, false)}


export {
  toggleNav,
  scrollNav,
  animaHeader,
}
