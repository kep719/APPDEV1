//set initial value for our count variable
let count = 0;
let num;

//select the value buttons
const value =  document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {//the forEach method separates all the buttons
    btn.addEventListener("click", (e) =>{//the e is a parameter that we are only refernecing 1 button from the group
        // console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else if(styles.contains('decreaseBy5')){
            count -=5
        }else if(styles.contains('increaseBy5')){
            count +=5
        }else if(styles.contains('random')){
            num = Math.floor(Math.random()* 2)
            if(num == 0){
                count = Math.floor(Math.random()*-100)
            }else if(num == 1){
                count = Math.floor(Math.random()*100)
            }
        }else{
            count = 0
        }
        //style feedback for my count variable
        if(count > 0){
            value.style.color = "green"
        }else if(count < 0){
            value.style.color = "red"
        }else{
            value.style.color = "black"
        }
        value.textContent = count
    })
})


