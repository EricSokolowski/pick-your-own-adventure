/*-------------------------------- Constants --------------------------------*/
import { chapters } from "./data.js";


/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const txtEl = document.querySelector('#text')
const optionBtns = document.querySelector('#options')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init(){
selectChapter(1)
}

function selectChapter(chapterIdx){
  const chapter = chapters.find(function(chapter){
    return chapter.chapter === chapterIdx})
  txtEl.innerText = chapter.story
}

function showChapter(){

}
init()