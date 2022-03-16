const hamburgerBtn = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.close')

const menu = document.querySelector('ul')

hamburgerBtn.addEventListener('click',(e)=>{
    e.target.classList.add('hidden')
    menu.classList.add('appear')
    closeBtn.classList.remove('hidden')
})

closeBtn.addEventListener('click',e=>{
    e.target.classList.add('hidden')
    menu.classList.remove('appear')
    hamburgerBtn.classList.remove('hidden')
})

let current = 0
setContent(current)
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

leftArrow.addEventListener('click',()=>{
    if(current == 0) current = 2
    else current -=1
    setContent(current)
})

rightArrow.addEventListener('click',()=>{
    if(current == 2) current = 0
    else current +=1
    setContent(current)
})

function setContent(index){
    const imgBg = document.querySelector('.top .left')
    const title = document.querySelector('.top h1')
    const description = document.querySelector('.top p')

    const request = new Request('./js/data.json')
    fetch(request)
    .then(res=>res.json())
    .then(data=>{
        imgBg.style.background = `url("${data[index].img}")`
        title.textContent = data[index].title
        description.textContent = data[index].description
    })
}
