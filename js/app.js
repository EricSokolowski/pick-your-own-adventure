/*-------------------------------- Constants --------------------------------*/
import { chapters } from "./data.js";


/*-------------------------------- Variables --------------------------------*/
let state = {}


/*------------------------ Cached Element References ------------------------*/
const txtEl = document.querySelector('#text')
const optionBtns = document.querySelector('#options')
const imgSec = document.querySelector('#img-section')
/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
  state = {}
showChapter(1)
}

function showChapter(chapterIdx){
  const chapter = chapters.find(function(chapter){
    return chapter.chapter === chapterIdx})
  txtEl.innerText = chapter.story
  clearBtns()
  clearPics()
  chapter.images.forEach(function(image){
    const pic = document.createElement('img')
    pic.src = image
    imgSec.appendChild(pic)
  })
  chapter.options.forEach(function(option){
    if (showOption(option)){
      const btn = document.createElement('button')
      btn.innerText = option.option
      btn.classList.add('option')
      btn.addEventListener('click', function(){selectChapter(option)})
      optionBtns.appendChild(btn)
    }
  })
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function clearBtns(){
  while (optionBtns.firstChild)
  optionBtns.removeChild(optionBtns.firstChild)
}
function clearPics(){
  while(imgSec.firstChild)
  imgSec.removeChild(imgSec.firstChild)
}
function selectChapter(option){
  const nextChapterId = option.nextChapter
  if (nextChapterId === 1) {
    return init();
  }
  state = Object.assign(state, option.setState)
  showChapter(nextChapterId)
}

init()