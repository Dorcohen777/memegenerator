'use strict'

const KEY_MEME = "dbMeme"
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny']},
    { id: 2, url: 'img/2.jpg', keywords: ['pet'] },
    { id: 3, url: 'img/3.jpg', keywords: ['pet'] },
    { id: 4, url: 'img/4.jpg', keywords: ['pet'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny'] },
    { id: 6, url: 'img/6.jpg', keywords: ['vip'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny'] },
    { id: 8, url: 'img/8.jpg', keywords: ['cool'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny'] },
    { id: 10, url: 'img/10.jpg', keywords: ['vip'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny'] },
    { id: 12, url: 'img/12.jpg', keywords: ['vip'] },
    { id: 13, url: 'img/13.jpg' , keywords:['vip']},
    { id: 14, url: 'img/14.jpg', keywords: ['cool'] },
    { id: 15, url: 'img/15.jpg', keywords: ['cool'] },
    { id: 16, url: 'img/16.jpg', keywords: ['vip'] },
    { id: 17, url: 'img/17.jpg', keywords: ['funny'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny'] }
]
var gMeme
var gCanvas
var gCtx

function getCanvas() {
    gCanvas = document.querySelector('canvas')
    gCtx = gCanvas.getContext('2d')

    return {
        gCanvas,
        gCtx
    }
}

function getImages() {
    return gImgs
}

function saveToGmeme([inputUp, inputCenter, inputDown], fontSize, textDirection, textColor, imgId, x, y, fontFamily) {
    var saveMeme = {
        imgId: imgId,
        txt: [inputUp, inputCenter, inputDown],
        size: fontSize,
        fontFamily: fontFamily,
        align: textDirection,
        color: textColor,
        pos: [x, y]
    }
    gMeme = saveMeme
    saveToStorage(KEY_MEME, gMeme)
}

function getGmeme() {
    return gMeme
}

function getImageId(elImg) {
    
    var currImgId = elImg.dataset.id

    return currImgId
}

function getImageEl(imgId) {

    const imgEl = gImgs.find((img) => img.id === parseInt(imgId))
    
    return imgEl
}

function getStorage(key) {
    const savedMeme = loadFromStorage(key)
    return savedMeme
}


/*
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}
var gImgs = [{id: 1, url: 'img/1.jpg',
keywords: ['funny', 'cat']}];
var gMeme = { selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [ { txt: 'I sometimes eat Falafel',
    size: 20, align: 'left',
    color: 'red' } ]
}
*/