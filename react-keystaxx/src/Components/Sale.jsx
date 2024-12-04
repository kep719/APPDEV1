import { Link } from "react-router-dom"

const kb = [
    {id: 1, name: 'Logitech Pro X TKL',
    description: 'A championship-trusted wireless gaming keyboard designed for the highest levels of competitive play. Designed with pros and engineered to win.'
    },
    {id: 2, name: 'Keychron Q5 Pro',
    description: 'The Q6 Pro is a traditional full-size keyboard layout with a NumPad and navigation keys, while the Q5 Pro is a slightly more compact 1800-style layout. Both of them are gasket-mounted, with thick aluminum cases and a knob in the top right corner.'
    },
    {id: 3, name: 'Keychron Q6 Pro',
    description: 'The Q6 Pro is a traditional full-size keyboard layout with a NumPad and navigation keys, while the Q5 Pro is a slightly more compact 1800-style layout. Both of them are gasket-mounted, with thick aluminum cases and a knob in the top right corner.'
    },
]

export default function Sale(){
    return(
        <>

            <center><h1 className="KL">Keyboard List</h1></center>
            <ul className="saleListUl">
                {Sale.map((keyboard) => (
                    <li className="saleListLi" key = {keyboard.id}>
                        <Link to = {`/sale/$(keyboard.id)`} state={{keyboard}} className="keyboardLink"> 
                        {/* $ means a javascript function */}
                        <strong>{keyboard.name}</strong>
                        </Link>
                    </li>
                ))}
            </ul>

        </>
    )
}