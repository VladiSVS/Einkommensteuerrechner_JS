
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

    let selectedValue = document.getElementById("yearList")
    let checkedYear = selectedValue.options[selectedValue.selectedIndex].value
    if (checkedYear == "2021") {
        rechnen()
    } else if (checkedYear == "2020") {
        rechnenOne()
    } else if (checkedYear == "2019") {
        rechnenTwo()
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

    function rechnenOne() {
        if (zvE <= 9408) {
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT
            esT = Math.round(esT)
        } else if (zvE >= 9409 && zvE <= 14532) {
            y = (zvE - 9408) / 10000
            esT = (972.87 * y + 1400) * y
            esT = Math.round(esT)
        } else if (zvE >= 14533 && zvE <= 57051) {
            z = (zvE - 14532) / 10000
            esT = (212.02 * z + 2397) * z + 972.79
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 57052 && zvE <= 270500) {
            esT = 0.42 * zvE - 8963.74
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 270501) {
            esT = 0.45 * zvE - 17078.74
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        }
    }

    function rechnenTwo() {
        if (zvE <= 9168) {
            kirkSt.innerHTML = kirk
            einResult.innerHTML = esT
            gesamtB.innerHTML = esT
        } else if (zvE >= 9169 && zvE <= 14254) {
            y = (zvE - 9168) / 10000
            esT = (980.14 * y + 1400) * y
            esT = Math.round(esT)
        } else if (zvE >= 14255 && zvE <= 55960) {
            z = (zvE - 14254) / 10000
            esT = (216.16 * z + 2397) * z + 965.58
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 55961 && zvE <= 265326) {
            esT = 0.42 * zvE - 8780.90
            esT = Math.round(esT)
            kirkRechner()
            splitting()
        } else if (zvE >= 265327) {
            esT = 0.45 * zvE - 16740.68
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



