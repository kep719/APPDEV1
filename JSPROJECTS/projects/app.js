const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener("click", () => {
    // if(links.classList.contains('show-links')){//the show-links is in the css file
    //     links.classList.remove('show-links')
    // }else{
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links')//same as the code above just shorter
})