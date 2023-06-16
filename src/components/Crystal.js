import React from 'react';
import PropTypes from 'prop-types';

const Crystal = ({ id, name , color, powers, charges, increaseCharge, removeCrystal }) => {
    // const [chargeCount, setChargeCount] = React.useState(0);
    // const increaseCharge = () => {
    //     // console.log('clicked');
    //     setChargeCount(chargeCount + 1);
    //     console.log(chargeCount);
    // }

    return (
        <>
            <h2>{name}</h2>
            <p>{color}</p>    
            <p>{powers}</p> 
            <button onClick={() => increaseCharge(id)}>Charge Crystal</button> 
            <p>You've charged your {name} crystal {charges} times</p>  
            <button onClick={() => removeCrystal(id)}>Remove Crystal</button>
        </>
    );
};

// call our component. lets other devs know how the components are supposed to work 
Crystal.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired,
    charges: PropTypes.number.isRequired
};

export default Crystal;