const landenBtn = document.getElementById("landen-btn")
const mensenBtn = document.getElementById("mensen-btn")
const btnContainer = document.getElementsByClassName("btn-container")
const textContainer = document.getElementsByClassName("text-container")
const container = document.getElementsByClassName("container")

const printCreateElement = (element, text) => {
    const newLi = document.createElement(element)
    const newContent = document.createTextNode(text)
    newLi.appendChild(newContent)
    textContainer[0].appendChild(newLi)
}

const removeElement = (num) => {
    while (textContainer[num].lastChild){
    textContainer[num].removeChild(textContainer[num].lastChild) }
}

