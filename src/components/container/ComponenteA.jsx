import React from 'react'
import { contacto } from '../../models/contacto'
import ComponenteB from '../pure/ComponenteB'
import { useState } from "react";

const ComponenteA = () => {
    const [conectado , setConectado] = useState(false);
    const newcontacto = new contacto("David" , "Garcia", "degm321123@gamil.com" , conectado);
    
    const conectarse = (contact) => {
        console.log(contact);
        setConectado(!contact.conectado);
    }

    return (
        <div>
            <ComponenteB contact={newcontacto} conectarse={conectarse}/>
        </div>
    )
}

export default ComponenteA
