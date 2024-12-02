import PropTypes from 'prop-types';
import board from './kb.png';

export default function Body(props){
    return(
        <>  
            <div class='kboard1'>
            <p class="bodytext"><strong>{props.name}</strong></p>
                    <img src={board} alt="keyboard" className='board1'/>
            </div>

            <div class='specifications1'>
                <ul>
                    <li class='l1'>SPECIFICATIONS</li>
                    <ul>
                        <li>Switch Type: Cherry MX Red (Mechanical)</li>
                        <li>Key Layout: Full-size (104 keys)</li>
                        <li>Backlighting: RGB with customizable colors</li>
                        <li>Connectivity: Wired (USB 2.0)</li>
                        <li>Dimensions: 440 mm x 135 mm x 35 mm</li>
                        <li>Weight: 1.2 kg</li>
                        <li>Cable Length: 1.8 meters</li>
                        <li> Additional Features: Anti-ghosting, N-key rollover, dedicated media controls</li>
                    </ul>
                </ul>
            </div>

            <div class='specifications2'>
            <ul>
                <li class='l1'>IN THE BOX</li>
                <ul>
                    <li>KB-X1000 Keyboard</li>
                    <li>USB Cable</li>
                    <li>User Manual</li>
                    <li>Keycap Removal Tool</li>
                    <li>Warranty Card</li>
                </ul>
            </ul>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div class='specifications'>
                <pre class='specs1'>
                <ul>   
                    <li class='l1'>KEY FEATURES</li>
                    Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors
                    and lighting effects. <br />
                    Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience. <br />
                    Programmable Keys: Assign macros and custom functions to any key with the included software. <br />
                    Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming
                    sessions. <br />
                    Dedicated Media Controls: Easily control music and videos with dedicated media keys <br />
                    <br /><br /><br />

                    <li class='l1'>SETUP INSTRUCTIONS</li>
                    <li>Unboxing:</li>
                        <ul>
                            <li>Carefully remove the keyboard and accessories from the box.</li>
                        </ul>
                    <li>Connecting the Keyboard:</li>
                        <ul>
                            <li>Plug the USB cable into an available USB port on your computer. </li>
                            <li>The keyboard should be automatically recognized and ready for use. No additional drivers are
                            required.</li>
                        </ul>
                    <br /><br /><br />
                    <li class='l1'>Software Installation (Optional):</li> 
                    <ul>
                        <li>Download the configuration software from the manufacturer’s website if you wish to customize</li>
                        <li>key functions or lighting.</li>
                        <li>Follow the on-screen instructions to install the software.</li>
                    </ul> <br /><br /><br />
                        <li class='l1'>Keycap Removal and Replacement: </li>
                        <ul>
                            <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                            <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
                        </ul>
                </ul>
                </pre>
                <br /><br /><br /><br />
            </div>

        </>
    )
}

Body.defaultProps = {
  
}


//prop types as a function to check the validity of types passed as props
Body.propTypes = {
    name: PropTypes.string,
    course: PropTypes.string,
}