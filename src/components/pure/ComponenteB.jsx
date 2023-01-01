
import PropTypes  from "prop-types";
import { contacto } from "../../models/contacto";


const ComponenteB = ({ contact, conectarse }) => {
    return(
        <div>
            <h1>{contact.nombre } { contact.apellido }</h1>
            <h1>{contact.email }</h1>
            <h1>{contact.conectado ? 'Contacto En Línea': ' Contacto No Disponible' }</h1>
            <button onClick={() => conectarse(contact)}> Conectarse o Desconectarse </button>
        </div>
    );
}

ComponenteB.propTypes = {
    contact: PropTypes.instanceOf(contacto)
}

export default ComponenteB;