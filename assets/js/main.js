
function einkommenSteuer() {
    let esT = 0
    let kirk = 0
    let zvE = Number(document.getElementById("betragOne").value)
    let zvEtwo = Number(document.getElementById("betragTwo").value)
    let einResult = document.getElementById("einResult")
    let kirkSt = document.getElementById("kirkSt")
    let gesamtB = document.getElementById("totalResult")
    let check = document.getElementById("married")

    if (check.checked) {
        zvE = (zvE + zvEtwo) / 2
        rechnen()
    } else {
        rechnen()
    }

    function rechnen() {
        if (zvE <= 9744) {
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT
        } else if (zvE >= 9745 && zvE <= 14753) {
            y = (zvE - 9744) / 10000
            esT = (995.21 * y + 1400) * y
            esT = Math.round(esT)
        } else if (zvE >= 14754 && zvE <= 57918) {
            z = (zvE - 14753) / 10000
            esT = (208.85 * z + 2397) * z + 950.96
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 57919 && zvE <= 274612) {
            esT = 0.42 * zvE - 9136.63
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 274613) {
            esT = 0.45 * zvE - 17374.99
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        }
    }

    function kirkRechner() {
        if (document.getElementById("selectTwo").selected) {
            kirk = esT / 100 * 8
            kirk = Math.round(kirk)
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT + kirk
        } else if (document.getElementById("selectThree").selected) {
            kirk = esT / 100 * 9
            kirk = Math.round(kirk)
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT + kirk
        } else {
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT + kirk
        }
    }

    function splitting() {
        let split = 0
        if (check.checked) {
            split = esT * 2
            einResult.innerHTML = split
            gesamtB.innerHTML = split + kirk
        }
    }
}

function change() {
    let einkommenTwo = document.getElementById("einkommenTwo")
    let betragTwo = document.getElementById("betragTwo")
    if (document.getElementById("married").checked) {
        einkommenTwo.style.display = "block"
        betragTwo.style.display = "block"
    } else {
        einkommenTwo.style.display = "none"
        betragTwo.style.display = "none"
    }
}