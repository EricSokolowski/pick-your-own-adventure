/*-------------------------------- Constants --------------------------------*/
import { chapters } from "./data.js";


/*-------------------------------- Variables --------------------------------*/
let state = {}


/*------------------------ Cached Element References ------------------------*/
const txtEl = document.querySelector('#text')
const optionBtns = document.querySelector('#options')
const imgSec = document.querySelector('#img-section')
const musicPlays = new Audio('../assets/forest.mp3')
/*----------------------------- Event Listeners -----------------------------*/
musicPlays.addEventListener('ended', function(evt){
  musicPlays.play()
  musicPlays.loop() = true
})

/*------------------------------- Functions --------------------------------*/

function init(){
  state = {}
  showChapter(1)
  txtEl.classList.remove('won')
  txtEl.classList.remove('lost')
  txtEl.classList.add('beginning')
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
    pic.classList.add('pics')
    pic.addEventListener('click', function(evt){
      musicPlays.volume = .10
      if(musicPlays.paused){
        musicPlays.play()
    } else {
        musicPlays.pause()
      }
    })
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
    init()
  } else if (nextChapterId === 100) {
    txtEl.classList.remove('beginning')
    txtEl.classList.remove('won')
    txtEl.classList.add('lost')
  } else if (nextChapterId === 99){
    txtEl.classList.remove('beginning')
    txtEl.classList.remove('lost')
    txtEl.classList.add('won')
  } else if(nextChapterId !== 1 || 100 || 99){
    txtEl.classList.remove('beginning')
    txtEl.classList.remove('lost')
    txtEl.classList.remove('won')
  }
  state = Object.assign(state, option.setState)
  showChapter(nextChapterId)
}

init()
