const printModal = (bm,createModal,content) =>{
  bm.addEventListener('click', () =>{
    createModal(`${content}`)
  })
}

const printModalClasic = (open,modal,close) =>{
  open.addEventListener('click', () =>{
    modal.classList.replace('zoom-out', 'zoom-in')
  })
  close.addEventListener('click', () =>{
    modal.classList.replace('zoom-in', 'zoom-out')
  })
}

export {
  printModal,
  printModalClasic
}
