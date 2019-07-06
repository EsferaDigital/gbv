import {createCustomElement} from '../lib/var-basicas'

const createModal = content =>{
  const modalContentEl = createCustomElement('div',{
    id: 'Modal-content',
    class: 'Modal-item'
  }, [content])
  const modalContainerEl = createCustomElement('div',{
    id: 'Modal-container',
    class: 'Modal'
  }, [modalContentEl])
  document.body.appendChild(modalContainerEl)
  const removeModal = () => document.body.removeChild(modalContainerEl)
  modalContainerEl.addEventListener('click', e =>{
    if(e.target === modalContainerEl) removeModal()
  })
}

export {createModal}
