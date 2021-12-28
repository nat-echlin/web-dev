const findConsenants = (address) => {
    let myArr = []
    const CONSENANTS = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
    const addr_length = address.length
    const addr_lower = address.toLowerCase()
    for (let i = 0; i < addr_length; i++) {
        if (CONSENANTS.includes(addr_lower[i])) {
            myArr.push(i)
        }
    }
    return myArr
}

const getRandomInt = max => {
    return Math.floor(Math.random() * max);
}

Array.prototype.insert = function(index,item) {
    this.splice(index,0,item);
}

const addressJig = () => {           
    // init vars
    let jigs = []
    const address = document.querySelector("#add_line1").value
    const amount = parseInt(document.querySelector("#amount").value)
    
    // locating consenants
    let consenants = findConsenants(address)

    // random jigging phase
    for (let i = 0; i < amount; i++) {

        const charList = address.split("")

        // doubling 2 random consenants
        const randomMax = getRandomInt(3)
        for (let i = 0; i < randomMax; i++) {
            const ranPos = consenants[getRandomInt(consenants.length)]
            charList.insert(ranPos + 1, address[ranPos].toLowerCase())
        }

        // adding a fullstop at a random pos
        // todo

        jiggedAddress = charList.join("")
        jigs.push(jiggedAddress)
    }
    
    const textbox = document.querySelector("#output")
    textbox.style.display = "block"
    textbox.setAttribute("rows", amount)
    textbox.value = textbox.value + jigs.join("\n")
}