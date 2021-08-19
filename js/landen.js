const arrayLanden = []

randomPersonData.forEach(element => {
    if (!arrayLanden.includes(element.region))
    {
        arrayLanden.push(element.region)
        arrayLanden.sort()
    }
})

landenBtn.addEventListener("click", ()=> {
    removeElement(0)
    removeElement(1)
    arrayLanden.forEach(element => printCreateElement("li", element))
})