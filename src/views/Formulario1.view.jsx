import React, { useState } from 'react';

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [localidad, setLocalidad] = useState('');

    let manejarCambios = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        switch(name) {
            case 'nombre': setNombre(value); break;
            case 'descripcion': setDescripcion(value); break;
            case 'localidad': setLocalidad(value); break;
            default: break;
        }
    };

    	
    let manejarEnvio = (event) => {
        event.preventDefault();
    
        console.log("%cDatos del formulario 📑", "color: green")
        console.log(`Nombre: ${nombre}`);        
        console.log(`Descripción: ${descripcion}`); 
        console.log(`Localidad: ${localidad}`); 
    }

    return (
        <form onSubmit={manejarEnvio} className="Formulario">
            <strong>Mi formulario</strong>

            <input className="Elemento" placeholder="Introduce tu nombre..."
                type="text" name="nombre" onChange={manejarCambios} />
                
            <textarea className="Elemento" placeholder="Introduce tu descripción..."
                name="descripcion" onChange={manejarCambios} />
                
            <select className="Elemento" name="localidad" onChange={manejarCambios}>
                <option value="Málaga">Málaga</option>
                <option value="Granada">Granada</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Valencia">València</option>
            </select>	

            <button className="Elemento"  type="submit">Enviar</button>
        </form>
    );
}
//<textarea onChange={manejarCambios} />
//<input type="text" value={value} onChange={manejarCambios}/>