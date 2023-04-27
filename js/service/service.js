'use strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg' },
    { id: 2, url: 'img/2.jpg' },
    { id: 3, url: 'img/3.jpg' },
    { id: 4, url: 'img/4.jpg' },
    { id: 5, url: 'img/5.jpg' },
    { id: 6, url: 'img/6.jpg' },
    { id: 7, url: 'img/7.jpg' },
    { id: 8, url: 'img/8.jpg' },
    { id: 9, url: 'img/9.jpg' },
    { id: 10, url: 'img/10.jpg' },
    { id: 11, url: 'img/11.jpg' },
    { id: 12, url: 'img/12.jpg' },
    { id: 13, url: 'img/13.jpg' },
    { id: 14, url: 'img/14.jpg' },
    { id: 15, url: 'img/15.jpg' },
    { id: 16, url: 'img/16.jpg' },
    { id: 17, url: 'img/17.jpg' },
    { id: 18, url: 'img/18.jpg' }
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

function getImages(){
    return gImgs
}

function saveToGmeme(lineIdx, inputValue, fontSize, textDirection, textColor) {

    var saveMeme = {
        selectedLineIdx: lineIdx,
        lines: [{
            txt: inputValue,
            size: fontSize,
            align: textDirection,
            color: textColor
        }]
    }
    gMeme = saveMeme
}



function getImageId(elImg){
    console.log('elImg', elImg)
    var currImgId = elImg.dataset.id
    
    return currImgId
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