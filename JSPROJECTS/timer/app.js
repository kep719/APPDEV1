let count = parseInt(document.getElementById("value").textContent)
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
btn.addEventListener("click", () => {
        const speed = setInterval(() => {
            if(count > 0){
                count--
                document.getElementById("value").textContent = count
            }else{
                clearInterval(speed)
            }
        }, 100);
        if(count == 0){
                count = 30
                document.getElementById("value").textContent = count
        }
        
})
})

