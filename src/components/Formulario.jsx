import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    //State de Error
    const [ error, guardarError ] = useState(false);

    //Extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    //Funcion para colocar los elementos en el State
    const handleChange = e => {
        //Actualizar el State
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //Funcion cuando el usuario de submit
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);

            return;
        }

        guardarError(false);

        //Pasar al componente principal
        guardarConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error mensaje="Completa todos los campos"/> : null }
            <div className="input-field col-s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ ciudad }
                    onChange={ handleChange }
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={ pais }
                    onChange={ handleChange }
                >
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>

            <div className="input-field col-s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
 
export default Formulario;
