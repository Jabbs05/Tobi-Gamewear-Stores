const btn = document.querySelector('button')
const btn1 = document.querySelector('#btn')
const btn2 = document.querySelector('#btn1')
const btn3 = document.querySelector('#btn2')
const btn4 = document.querySelector('#btn3')
const btn5 = document.querySelector('#btn4')
const btn6 = document.querySelector('#btn5')
const btn7 = document.querySelector('#btn6')
const btn8 = document.querySelector('#btn7')
const btn9 = document.querySelector('#btn8')
const btn10 = document.querySelector('#btn9')
const btn11 = document.querySelector('#btn10')

function ding(){
    alert("Sorry,You Can't Buy Them Now,We're Working On It👨🏾‍💻")
}
btn.addEventListener('click', ding)
btn1.addEventListener('click', ding)
btn2.addEventListener('click', ding)
btn3.addEventListener('click', ding)
btn4.addEventListener('click', ding)
btn5.addEventListener('click', ding)
btn6.addEventListener('click', ding)
btn7.addEventListener('click', ding)
btn8.addEventListener('click', ding)
btn9.addEventListener('click', ding)
btn10.addEventListener('click', ding)
btn11.addEventListener('click', ding)

const hamburger = document.querySelector('.hamburger')
const li = document.querySelector('.ul-mobile')
 
function toggle(){
    if (li.style.opacity === "0") {
        li.style.opacity = "1"
        li.style.transform = "translateY(0px)"
        li.style.transition = "0.4s"
    } else {
        li.style.opacity = "0"
        li.style.transform = "translateY(-10px)"  
        li.style.transition = "0.4s"
    }
}
hamburger.addEventListener('click',toggle)