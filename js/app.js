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
showChapter(1)
}

function showChapter(chapterIdx){
  const chapter = chapters.find(function(chapter){
    return chapter.chapter === chapterIdx})
  txtEl.innerText = chapter.story
  clearBtns()
    
}
function clearBtns(){
  while (optionBtns.firstChild)
  optionBtns.removeChild(optionBtns.firstChild)
}
function selectChapter(){

}
init()