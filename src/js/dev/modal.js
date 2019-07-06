const printModal = (bm,createModal,content) =>{
  bm.addEventListener('click', () =>{
    createModal(`${content}`)
  })
}

export {printModal}
