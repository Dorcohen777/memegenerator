'use strict'



function getRandomMeme() {
    // get a random meme object from the gImgs array
    const randomMeme = gImgs[Math.floor(Math.random() * gImgs.length)]

    // generate a random color in hexadecimal format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

    // generate a random font family from the given options
    const fontFamilies = ['impact', 'verdana', 'fantasy']
    const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)]

    // generate a random font size up to 60px
    const randomFontSize = Math.floor(Math.random() * 60) + 1

    // construct the meme object with the random properties
    const meme = {
        id: randomMeme.id,
        url: randomMeme.url,
        color: randomColor,
        fontFamily: randomFontFamily,
        fontSize: randomFontSize + 'px'
    }

    return meme
}


function generateRandomMemeText() {
    const phrases = [
        'One does not simply...',
        'I am once again asking...',
        'Is this a pigeon?',
        'But that\'s none of my business',
        'Why you no...',
        'It\'s over 9000!',
        'All your base are belong to us',
        'That\'s what she said',
        'Do you even lift?',
        'Keep calm and carry on',
        'Y U NO',
        'You know nothing, Jon Snow'
    ]
    const randomIndex = Math.floor(Math.random() * phrases.length)
    const randomIndex2 = Math.floor(Math.random() * phrases.length)
    return [phrases[randomIndex], phrases[randomIndex2]]
}

function onRandomMeme() {
    let randomMeme = getRandomMeme()
    let randomText = generateRandomMemeText()

    console.log('randomMeme', randomMeme)
    console.log('randomText', randomText)

    let { gCtx, gCanvas } = getCanvas()

    const divEl = document.createElement('div')
    let urlWithS = randomMeme.url.replace("img/", "imgs/")
    let createImgHtml = `<img src="${urlWithS}" class="main-images" data-id="${randomMeme.id}"/>`
    divEl.innerHTML = createImgHtml

    const imgEl = divEl.querySelector('img')
    const y = isLineDown ? bottomLineY : 250 // bottom of the canva
    gCtx.drawImage(imgEl, 0, 0, gCanvas.width, gCanvas.height)
    renderTextInImage(randomText[0], gCanvas.width / 2, 50, randomMeme.color, 'center', randomMeme.fontFamily) // (textValue, x, y, color = 'white', textPosition, fontFamily,)
    renderTextInImage(randomText[1], gCanvas.width / 2, y, randomMeme.color, 'center', randomMeme.fontFamily) // (textValue, x, y, color = 'white', textPosition, fontFamily,)
    const elImgsContainor = document.querySelector('.main-containor')
    const elEditorArea = document.querySelector('.editor-area')
    elImgsContainor.style.display = 'none'
    elEditorArea.hidden = false
}