import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {

    //Extraer los valores
    const { name, main } = resultado;

    //Grados kelvin
    const kelvin = 273.15;

    if(!name) return null;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de { name } es:</h2>
                <p className="temperatura">
                    {/* { parseInt(main.temp - kelvin) } */}
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Temperatura Maxima: 
                    {/* { parseInt(main.temp - kelvin) } */}
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Temperatura Minima: 
                    {/* { parseInt(main.temp - kelvin) } */}
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
     );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;
