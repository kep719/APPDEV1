import { useLocation } from "react-router-dom";

const keyboardImages = {
    'Logitech Pro X TKL': '',

}

export default function Keyboard(){
    const location = useLocation();
    const keyboard = location.state.keyboard

    const keyboardImageUrl = keyboardImages[keyboard.name]

    return(
        <>
            
        </>
    )
}