'use strict'

var gCurrImage
let funny = 18
  let pet = 13
  let cool = 14
  let vip = 15
renderImages()

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

function renderImages(images = getImages()) {
  // const images = getImages()
  var strHtml = ''

  images.forEach((img) => {
    strHtml += `<img src="imgs/${img.id}.jpg" class="main-images" onclick="onImageClick(this)" data-id="${img.id}"/>`
  })

  const elMain = document.querySelector('.main-containor')
  elMain.innerHTML = strHtml
}

function onImageClick(el) {
  var { gCanvas, gCtx } = getCanvas()
  gCurrImage = el
  getImageId(el)

  gCtx.drawImage(el, 0, 0, gCanvas.width, gCanvas.height)
  const elImgsContainor = document.querySelector('.main-containor')
  const elEditorArea = document.querySelector('.editor-area')
  elImgsContainor.style.display = 'none'
  elEditorArea.hidden = false

}

function onFilterImages(input) {
  const searchTerm = input.value.toLowerCase()
  const images = getImages()
  const filteredImages = images.filter(image => {

    const keywords = (image && image.keywords) ? image.keywords.join(" ") : "";
    return keywords.toLowerCase().includes(searchTerm)
  })

  renderImages(filteredImages)
}

function onKeywordClick(keyword) {
  const images = getImages();
  if (keyword === 'funny'){
    funny++
  }else if(keyword === 'pet'){
    pet++
  }else if(keyword === 'cool'){
    cool++
  }else{
    vip++
  }
  const filteredImages = images.filter((img) => {
    return img.keywords.includes(keyword);
  });
  keywordCloud()
  renderImages(filteredImages);
}


keywordCloud()

function keywordCloud() {
  const elFunny = document.querySelector('.button-funny')
  const elPet = document.querySelector('.button-pet')
  const elCool = document.querySelector('.button-cool')
  const elVip = document.querySelector('.button-vip')
  
  elFunny.style.fontSize = funny + 'px'
  elPet.style.fontSize = pet + 'px'
  elCool.style.fontSize = cool + 'px'
  elVip.style.fontSize = vip + 'px'
}


