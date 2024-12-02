import PropTypes from 'prop-types';
import ricardo from './ricardo.png';


export default function Body(props){
    return(
        <>  
            <a href="https://www.youtube.com/shorts/SXHMnicI6Pg"><img src={ricardo} className="person-picture"/></a>
            <p class="bodytext"><strong>Hi there, I'm {props.name}</strong></p>
            <p class="bodytext"><strong>Studying {props.course}</strong></p>
            <p class="bodytext1"><strong>Dont <br />CLICK <br />{props.name}</strong></p>
        </>
    )
}

Body.defaultProps = {
    name: "Guest",
    course: "Unknown",
}


//prop types as a function to check the validity of types passed as props
Body.propTypes = {
    name: PropTypes.string,
    course: PropTypes.string,
}