import './Button.css'
// import PropTypes from 'prop-types';

function Button({ color, text, bg }) {
    return ( 
        <>
            <button id='Cus-Button' style={{ backgroundColor: bg, color: color }}>{text}</button>
        </>
    );
}

// Button.propTypes = {
//     color: PropTypes.string,
//     text: PropTypes.string.isRequired,
//     bg: PropTypes.string
// };

export default Button;