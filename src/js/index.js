import {mq768} from './lib/var-basicas'
import {createModal} from './lib/elements'
import {mpC, mpG, mpImg} from './assets/var-mapa'
import {bMForm} from './assets/var-actions'
import {Form} from './assets/var-modal';
import {Mapa} from './dev/mapa'
import {toggleNav, scrollNav, animaHeader, colorHeader, showButtonUp, upToTop} from './dev/nav'
import {CopyDate} from './dev/footer'
import {printModal} from './dev/modal'


toggleNav()
scrollNav()
animaHeader()
colorHeader()
CopyDate()
showButtonUp()
upToTop()
printModal(bMForm, createModal,Form)
Mapa(mq768, mpC, mpG, mpImg)
