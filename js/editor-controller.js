'use strict'

var gInputValueUp = ''
var gInputValueDown = ''
var gInputValueCenter = ''
var gTextPosition = 'up' // update span in editor
var gAlignDir = 'left'
var gFontSize = 30
var gLineIdx = 0
var isLineDown = false
var isLineCenter = false
var isLineUp = true

renderCanvasSection()

// render canvas section
function renderCanvasSection() {

    var strHtml = `
    <div class="main-editor-containor">
        <div class="canvas-containor">
            <canvas width="500" height="500" id="canvas"> </canvas>
        </div>

        <div class="editor-containor">
        
            <div class="div-actions">
            
                <button class="btn-action" onclick="onIncreaseFont()"><i class="fa-solid fa-plus"></i></button>
                <button class="btn-action" onclick="onDecreaseFont()"><i class="fa-solid fa-minus"></i></button>
                <button class="btn-action" onclick="onAlignLeft()"><i class="fa-solid fa-align-left"></i></button>
                <button class="btn-action" onclick="onAlignCenter()"><i class="fa-solid fa-align-center"></i></button>
                <button class="btn-action" onclick="onAlignRight()"><i class="fa-solid fa-align-right"></i></button>
                <input type="color" onchange="onChnageColor()" class="color-input" value="#FFFFFF">
                <button class="btn-action" onclick="onChangeDirection('up')"><i class="fa-solid fa-arrow-up"></i></button>
                <button class="btn-action" onclick="onChangeDirection('center')"><i class="fa-solid fa-arrows-left-right"></i></button>
                <button class="btn-action" onclick="onChangeDirection('down')"><i class="fa-solid fa-arrow-down"></i></button>
                <select onchange="onChangeFont()" class="select-font">
                    <option value="Impact">Impact</option>
                    <option value="Verdana">Verdana</option>
                    <option value="fantasy">fantasy</option>
                </select>
            </div>

            <div class="box-text-input">
                <input type="text" value="" placeholder="enter text" oninput="onInputText(event)" class="input-text">
            </div>

            <div class="div-info">
            <h3> Current font size: <span class="span-font-size">${gFontSize}</span></h3>
            <h3> Current text position <span class="span-line-pos">${gTextPosition}</span></h3>
            <h3> Current text align: <span class="span-text-pos"> ${gAlignDir}</span> </h3>
            </div>

            <div class="box-buttons">
                <button class="btn-style">Share</button>
                <button class="btn-style" onclick="onDeleteLine()"> Delete line </button>
                <a href="#" onclick="downloadCanvas(this)" download="new-meme"><button class="btn-style">Download</button></a>
                <button class="btn-style"> Save for later </button>
            <div>
        </div>
    <div/>
    `
    const elCanvasArea = document.querySelector('.canvas-area')
    elCanvasArea.innerHTML = strHtml
}

// handle text input
function onInputText(ev) {

    let inputValue = ev.target.value
    const canvasHeight = gCanvas.height
    const bottomLineY = canvasHeight - gFontSize
    let fontFamily = onChangeFont()

    let x = 10 // default x
    let y = 50 // default y

    handleBackspace(ev, inputValue) // handle backspace

    let { gCtx } = getCanvas()
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height) // clear rect
    gCtx.drawImage(gCurrImage, 0, 0, gCanvas.width, gCanvas.height) // render image in canvas

    x = handleAlign(gAlignDir) // handle text align

    if (isLineCenter) {
        renderTextInImage(gInputValueCenter, x, y, onChnageColor(), gAlignDir, fontFamily,)
    }

    if (gInputValueUp) {
        renderTextInImage(gInputValueUp, x, y, onChnageColor(), gAlignDir, fontFamily,)
    }

    if (gInputValueDown) {
        const y = isLineDown ? bottomLineY : 250 // bottom of the canva
        renderTextInImage(gInputValueDown, x, y, onChnageColor(), gAlignDir, fontFamily,)
    }

    saveToGmeme(gLineIdx, inputValue, gFontSize, gAlignDir, onChnageColor())
}

// handle text render
function renderTextInImage(textValue, x, y, color = 'white', textPosition, fontFamily,) {
    var { gCtx, gCanvas } = getCanvas()
    if (textValue === undefined) textValue = ''

    gCtx.textAlign = textPosition
    gCtx.font = `${gFontSize}px "${fontFamily}"`
    gCtx.fillStyle = color
    gCtx.fillText(textValue, x, y)

}

// change direction on lines 
function onChangeDirection(direction) {
    isLineUp = direction === 'up'
    isLineDown = direction === 'down'
    isLineCenter = direction === 'center'

    if (isLineUp) gTextPosition = 'up'
    else if (isLineDown) gTextPosition = 'down'
    else if (isLineCenter) gTextPosition = 'center'

    onChangeLine()
}

// chnage color
function onChnageColor() {
    const colorValue = document.querySelector('.color-input').value
    return colorValue
}

//handle font size
function onIncreaseFont() {
    gFontSize++
    var spanSize = document.querySelector('.span-font-size')
    spanSize.innerText = gFontSize
}

function onDecreaseFont() {
    gFontSize--
    var spanSize = document.querySelector('.span-font-size')
    spanSize.innerText = gFontSize
}

// update text line position in editor
function onChangeLine() {
    const elSpanPos = document.querySelector('.span-line-pos')
    elSpanPos.innerText = gTextPosition
}
// update text align in editor
function onChangeAlign() {
    const elSpanAlignPos = document.querySelector('.span-text-pos')
    elSpanAlignPos.innerText = gAlignDir
}

// handle download button
function downloadCanvas(el) {
    var { gCanvas, gCtx } = getCanvas()
    const data = gCanvas.toDataURL()
    el.href = data
    el.download = 'new-meme'
}

// handle text alignment
function onAlignRight() {
    var { gCtx, gCanvas } = getCanvas()
    gAlignDir = 'right'
    onChangeAlign()
    const xRight = gCanvas.width - 20
    return xRight
}

function onAlignLeft() {
    gAlignDir = 'left'
    onChangeAlign()
    var x = 10
    return x
}

function onAlignCenter() {
    var { gCtx, gCanvas } = getCanvas()
    const xCenter = (gCanvas.width / 2)
    gAlignDir = 'center'
    onChangeAlign()
    return xCenter
}

function handleAlign(direction) {
    let x
    if (direction === 'center') {
        x = onAlignCenter()
    } else if (direction === 'left') {
        x = onAlignLeft()
    } else if (direction === 'right') {
        x = onAlignRight()
    }
    return x;
}

function onChangeFont() {
    const fontValue = document.querySelector('.select-font').value
    return fontValue
}

function handleBackspace(event, inputValue) {
    if (event.inputType === 'deleteContentBackward') {
        if (isLineUp) {
            gInputValueUp = gInputValueUp.slice(0, -1)
        } else {
            gInputValueDown = gInputValueDown.slice(0, -1)
        }
    } else {
        if (isLineUp) { // save the values from the txt input
            gInputValueUp = inputValue
        } else {
            gInputValueDown = inputValue
        }
    }
}

function onDeleteLine(){
    var { gCtx, gCanvas } = getCanvas()
    console.log('click')
    const elInput = document.querySelector('.input-text')
    const inputVal = elInput.value = ''
    
}
