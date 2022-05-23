const display1Ele = document.querySelector(".display-1");
const display2Ele = document.querySelector(".display-2");
const tempResultEle = document.querySelector(".temp-result");
const numbersEle = document.querySelectorAll(".number");
const operationEle = document.querySelectorAll(".operation");
const equalEle = document.querySelector(".equals");
const clearAllEle = document.querySelector(".all-clear");
const clearLastEle = document.querySelector(".last-entity-clear");

let disnum1 = ''
let disnum2 = ''
let result = null
let lastoperation = ''
let haveDot = false

numbersEle.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        disnum2 += e.target.innerText
        display2Ele.innerText = disnum2
    })
})

operationEle.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!disnum2)
            return
        haveDot = false
        const op = e.target.innerText
        if (disnum1 && disnum2 && lastoperation) {
            mathOperation()
        } else {
            result = parseFloat(disnum2)
        }
        clearVar(op)
        lastoperation = op
        console.log(result)
    })
})

function clearVar(name = '') {
    disnum1 += disnum2 + ' ' + name + ' '
    display1Ele.innerText = disnum1
    display2Ele.innerText = ''
    disnum2 = ''
    tempResultEle.innerHTML = result
}
function mathOperation() {
    if (lastoperation === 'x') {
        result = parseFloat(result) * parseFloat(disnum2)
    } else if (lastoperation === '+') {
        result = parseFloat(result) + parseFloat(disnum2)
    } else if (lastoperation === '-') {
        result = parseFloat(result) - parseFloat(disnum2)
    } else if (lastoperation === '/') {
        result = parseFloat(result) / parseFloat(disnum2)
    } else if (lastoperation === '%') {
        result = parseFloat(result) % parseFloat(disnum2)
    }
}


equalEle.addEventListener('click', (e) => {
    if ( !disnum1 || !disnum2 ) return
    haveDot = false
    mathOperation()
    clearVar()
    display2Ele.innerText = result
    tempResultEle.innerText = ''
    disnum2 = result
    disnum1 = ''
})

clearAllEle.addEventListener('click', (e) => {
    display1Ele.innerText = '0'
    display2Ele.innerText = '0'
    disnum1 = ''
    disnum2 = ''
    result = ''
    tempResultEle.innerText = '0'
})



