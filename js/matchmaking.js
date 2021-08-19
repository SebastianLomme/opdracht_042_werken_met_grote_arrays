const arrayMatch = []
let sterr;
let elementSteren;


const printImgElement = (url) => {
    const newImg = document.createElement("img")
    newImg.setAttribute("src", url)
    textContainer[0].appendChild(newImg)
}

const getSterrenbeeld = (element) => {
    const dag = element.birthday.mdy.split("/")[1]
    const maand = element.birthday.mdy.split("/")[0]

    if (dag >= 21 && maand == 03 || dag < 21 && maand == 04){
        sterr = "Ram"

    } else if (dag >= 21 && maand == 04 || dag < 21 && maand == 05){
        sterr = "Stier"

    }else if (dag >= 21 && maand == 05 || dag < 22 && maand == 06){
        sterr = "Tweeling"

    }else if (dag >= 22 && maand == 06 || dag < 23 && maand == 07){
        sterr = "Kreeft"

    }else if (dag >= 23 && maand == 07 || dag < 24 && maand == 08){
        sterr = "Leeuw"

    }else if (dag >= 24 && maand == 08 || dag < 23 && maand == 09){
        sterr = "Maagd"

    }else if (dag >= 23 && maand == 09 || dag < 24 && maand == 10){
        sterr = "Weegschaal"

    }else if (dag >= 24 && maand == 10 || dag < 23 && maand == 11){
        sterr = "Schorpioen"

    }else if (dag >= 23 && maand == 11 || dag < 22 && maand == 12){
        sterr = "Boogschutter"

    }else if (dag >= 22 && maand == 12 || dag < 21 && maand == 01){
        sterr = "Steenbok"

    }else if (dag >= 21 && maand == 01 || dag < 20 && maand == 02){
        sterr = "Waterman"

    }else if (dag >= 20 && maand == 02 || dag < 20 && maand == 03){
        sterr = "Vissen"

    } return sterr
}

const printCardElement = (element) => {
    const newDiv = document.createElement("div")
    const heading = document.createElement("h4")
    const newP = document.createElement("p")
    const newImg = document.createElement("img")
    const newPa = document.createElement("p")
    const btn = document.createElement("button")
    const sterr = getSterrenbeeld(element)
    age = element.age 
    newPa.innerText = `${sterr} ${age} jaar`
    name = `${element.name} ${element.surname} `
    heading.innerText= name
    btn.innerText = "Vind matches"
    newImg.setAttribute("src", element.photo)
    newP.innerText = `${element.region}`
    newDiv.appendChild(heading)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newP)
    newDiv.appendChild(newPa)
    newDiv.appendChild(btn)
    btn.classList.add("btn")
    btn.classList.add("card-btn")
    newDiv.classList.add("card")
    textContainer[1].appendChild(newDiv)
    btn.id = element.credit_card.number
}

const filterMatch = (e) => {
    removeElement(0)
    removeElement(1)
        arrayMatch.forEach(element => {
            if ( e === element.credit_card.number){
                let elementSteren = getSterrenbeeld(element)
                let elementRegion = element.region
                let newArray = arrayMatch.filter(element => elementSteren == getSterrenbeeld(element)).filter(element => elementRegion == element.region)
                newArray.forEach(element => {
                    if (element.credit_card.number !== e){
                    printCardElement(element)
                    setBtn()}

                    else if (element.credit_card.number == e){
                        const headingMatch = document.createElement("h2")
                        const newDiv = document.createElement("div")
                        const heading = document.createElement("h4")
                        const newP = document.createElement("p")
                        const newImg = document.createElement("img")
                        const newPa = document.createElement("p")
                        const btn = document.createElement("button")
                        const sterr = getSterrenbeeld(element)
                        age = element.age 
                        newPa.innerText = `${sterr} ${age} jaar`
                        name = `${element.name} ${element.surname} `
                        heading.innerText= name
                        headingMatch.innerText= "Match"
                        btn.innerText = "Vind matches"
                        newImg.setAttribute("src", element.photo)
                        newP.innerText = `${element.region}`
                        newDiv.appendChild(headingMatch)
                        newDiv.appendChild(heading)
                        newDiv.appendChild(newImg)
                        newDiv.appendChild(newP)
                        newDiv.appendChild(newPa)
                        newDiv.appendChild(btn)
                        btn.classList.add("btn")
                        btn.classList.add("card-btn")
                        newDiv.classList.add("card")
                        textContainer[0].appendChild(newDiv)
                        btn.id = element.credit_card.number
                    }
                })
            }
    }
        )

}

const setBtn = () => {
    const cardBtn = document.querySelectorAll(".card-btn")
    cardBtn.forEach(element => element.addEventListener("click", (e)=> {
        filterMatch(element.id)
        return element.id
    }))
}

randomPersonData.forEach(element => {
    arrayMatch.push(element)
    arrayMatch.sort((a,b) =>  a.name.localeCompare(b.name))}
    )
    mensenBtn.addEventListener("click", ()=> {
    removeElement(0)
    removeElement(0)
    arrayMatch.map(element => {
        printCardElement(element)
    })
    setBtn()
})


