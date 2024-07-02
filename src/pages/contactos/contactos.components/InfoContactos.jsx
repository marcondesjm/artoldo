import React from 'react';

import { MdEmail } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function InfoContactos() {
  return (
    <div className='infoscontactos'>
      <h2>Informações de Contato</h2>
      <span><MdEmail className='ico-contactos'/>- casadostoldosvendas10@hotmail.com</span>
      <span className='tel-contacto'><MdPhoneIphone className='ico-contactos'/>- 48 9 9617-8175</span>
      <span><MdLocationOn className='ico-contactos'/>- São José
     - SC / Brasil</span>
     
    </div>
    
  )
}

export default InfoContactos;