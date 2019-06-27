import {createCustomElement} from '../lib/var-basicas'


const modalForm = () =>{
  const b = document.getElementById('FormJoin')
  // content es el parametro que recibe el contenido en si que llevará el modal, contenido que va dentro del modalContentEl
  const printModal = content =>{
    //contenedor interno
    const modalContentEl = createCustomElement('div', {
      id: 'Modal-content',
      class: 'Modal-item'
    }, [content])
    //contenedor principal
    const modalContainerEl = createCustomElement('div', {
      id: 'Modal-container',
      class: 'Modal'
    }, [modalContentEl])
    //Imprimir Modal
    document.body.appendChild(modalContainerEl)
    //Remover modal
    const removeModal = () => document.body.removeChild(modalContainerEl)

    //evento para remover modal
    modalContainerEl.addEventListener('click', e =>{
      if(e.target === modalContainerEl) removeModal()
    })
  }

  const Form = `
      <table border=0 cellspacing=0 cellpadding=0 class="scroll-iframe">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTbLLosuyymQVA4MLeLB8BrWEqVSUaz_m9pYvc7izFSCcpKw/viewform?embedded=true" width="640" height="1836" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
      </table>`
  b.addEventListener('click', () =>{
    printModal(`${Form}`)
  })
}

export {modalForm}
