//components for item1
const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {

    let name = document.getElementById("name").value    
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value   
    let x = `Hello ${name}, i see that you are from 
    ${address} and you are also purseuing your degree
    ${major} and you can be contacted using ${telephone}.`
    document.getElementById("output1").innerHTML = x

})

//components for item2
const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {

    let sales = document.getElementById("sales").value
    let total = sales*0.23
    let x = `The annual profit is ${total} $.`
    document.getElementById("output2").innerHTML = x

})

//components for item3
let fiveHours = 60*5
let eightHours = 60*8
let twelveHours = 60*12
document.getElementById("output3.1").innerHTML = fiveHours
document.getElementById("output3.2").innerHTML = eightHours
document.getElementById("output3.3").innerHTML = twelveHours

//components for item4
const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {

    let miles = document.getElementById("miles").value
    let gallons = document.getElementById("gallons").value
    let mpg = miles/gallons
    let x = `The car's miles per gallon is ${mpg}.`
    document.getElementById("output4").innerHTML = x

})

//components for item5
const btn5 = document.getElementById("btn5")
btn5.addEventListener("click", () => {

    let temp = document.getElementById("temp").value
    let fahrenheit = 9/5*temp+32 
    let x = `The temperature is ${fahrenheit}° in Fahrenheit`
    document.getElementById("output5").innerHTML = x

})

//components for item6
const btn6 = document.getElementById("btn6")
btn6.addEventListener("click", () => {

    let cookies = document.getElementById("cookies").value
    let calc = (300/40)*10
    let result = calc*cookies;
    let x = `The total of calories consumed is ${result}.`
    document.getElementById("output6").innerHTML = x

})

//components for item7
const btn7 = document.getElementById("btn7")
btn7.addEventListener("click", () => {

    let males = parseFloat(document.getElementById("males").value)
    let females = parseFloat(document.getElementById("females").value)
    let total = males+females
    let result1 = males/total*100
    let result2 = females/total*100
    let x = `The percentage of males is ${result1}% and the percentage of females is ${result2}%.`
    document.getElementById("output7").innerHTML = x

})

