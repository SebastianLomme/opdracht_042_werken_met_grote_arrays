const arrayCredit = []
const creditBtn = document.getElementById("credit-btn")
const createNewDate = (year, month, day) => new Date(year, month)


randomPersonData
.filter(element => element.age > 18)
.forEach(element => {
    const exprDateM = Number(element.credit_card.expiration.split("/")[0] -1)
    const exprDateY = Number("20" + element.credit_card.expiration.split("/")[1])
    const exprDate = createNewDate(exprDateY, exprDateM)
    const newDate = new Date()
    const newDateY = Number(newDate.getFullYear())


    if ((exprDate < newDate && exprDateY === newDateY )|| exprDateY < newDateY) {
        arrayCredit.push(element)
        arrayCredit.sort((a,b) => a.credit_card.expiration.split("/")[0] - b.
        credit_card.expiration.split("/")[0])
    }
}
    )

creditBtn.addEventListener("click", ()=> {
    removeElement(0)
    removeElement(1)
    arrayCredit.forEach(element => {
        const text = 
        `Voornaam: ${element.name} Achternaam: ${element.surname}
        Credicardnumber: ${element.credit_card.number} 
        Verloopdatum: ${element.credit_card.expiration}`
        printCreateElement("p" ,text)
    })
})