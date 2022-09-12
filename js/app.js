/*-------------------------------- Constants --------------------------------*/
import { chapters } from "./data.js";


/*-------------------------------- Variables --------------------------------*/
let state = {}


/*------------------------ Cached Element References ------------------------*/
const txtEl = document.querySelector('#text')
const optionBtns = document.querySelector('#options')

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
  chapter.options.forEach(function(option){
    if (showOption(option)){
      const btn = document.createElement('button')
      btn.innerText = option.option
      btn.classList.add('option')
      btn.addEventListener('click', selectChapter())
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
function selectChapter(){

}
init()