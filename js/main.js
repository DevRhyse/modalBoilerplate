const modal = document.getElementById('modal')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')


function setUpModalContentChange(elementSelected, contentToShow){
  const button = document.querySelector(elementSelected)
  button.addEventListener('click', modalButtons)

  // toggle modal
  function modalButtons(){
    let CurrentModalSetting = contentToShow.classList.contains('modalHide')
    if(!CurrentModalSetting){
      toggleHide()
    }else{
      toggleShow()
    }
  }

  function toggleShow(){
    contentToShow.classList.remove("modalHide")
  }
  
  function toggleHide(){
    contentToShow.classList.add("modalHide")
  }
  
}
setUpModalContentChange('.onButton', modal)

// inside modal buttons slide change
function changeShownContentIndex(buttonPressed, contentToShow, contentToHide){
  const button = document.querySelector(buttonPressed)
  button.addEventListener('click', contentFuckery)
  function contentFuckery(){
    contentToShow.classList.remove("modalHide")
    contentToHide.classList.add('modalHide')
  }
}
changeShownContentIndex('#modalRightButton', content2, content1)
changeShownContentIndex('#modalLeftButton', content1, content2)

