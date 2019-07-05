import {mq768} from './lib/var-basicas'
import {mpC, mpG, mpImg} from './assets/var-mapa'
import {Mapa} from './dev/mapa'
import {toggleNav, scrollNav, animaHeader, showButtonUp, upToTop} from './dev/nav'
import {CopyDate} from './dev/footer'
import {modalForm} from './dev/modal'


toggleNav()
scrollNav()
animaHeader()
CopyDate()
showButtonUp()
upToTop()
modalForm()
Mapa(mq768, mpC, mpG, mpImg)
