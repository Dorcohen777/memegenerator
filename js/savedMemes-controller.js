'use strict'

function onRenderSaved() {
    var { gCanvas, gCtx } = getCanvas()
    var strHtml = ''
    const loadMeme = getStorage('dbMeme')

    const divEl = document.createElement('div')
    let el = getImageEl(loadMeme.imgId) // return img
    let urlWithS = el.url.replace("img/", "imgs/");

    let createImgHtml = `<img src="${urlWithS}" class="main-images" data-id="${el.id}"/>`
    divEl.innerHTML = createImgHtml
    const imgEl = divEl.querySelector('img')

    gCtx.drawImage(imgEl, 0, 0, gCanvas.width, gCanvas.height)
    hideOtherSections()
    const elSavedArea = document.querySelector('.div-saved-section')
    elSavedArea.innerHTML = strHtml

}

function renderSavedText() {
    
}


function hideOtherSections() {
    const elImgsContainor = document.querySelector('.main-containor')
    const elEditorArea = document.querySelector('.editor-area')
    elImgsContainor.style.display = 'none'
    elEditorArea.hidden = false
}
