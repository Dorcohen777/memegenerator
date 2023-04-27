'use strict'

var gCurrImage

renderImages()

function renderImages() {
    const images = getImages()
    var strHtml = ''

    images.forEach((img) => {
        strHtml += `<img src="imgs/${img.id}.jpg" class="main-images" onclick="onImageClick(this)" data-id="${img.id}"/>`
    })

    const elMain = document.querySelector('.main-containor')
    elMain.innerHTML = strHtml
}

function onImageClick(el){
    var {gCanvas, gCtx} = getCanvas()
    gCurrImage = el
    getImageId(el)
    gCtx.drawImage(el, 0, 0, gCanvas.width, gCanvas.height)
    const elImgsContainor = document.querySelector('.main-containor')
    const elEditorContainor = document.querySelector('.editor-containor')
    elImgsContainor.style.display = 'none'
    elEditorContainor.hidden = false
}

