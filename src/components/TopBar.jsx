import React from 'react';

import { BsEnvelope } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";

function TopBar() {
  return (
    <div className='my-topBar'>
      <div className='telefone'>
        <BsTelephone className='icon-top phone'/>
        <p>48 9 9617-8175</p>
      </div>
      <div>
        <BsEnvelope className='icon-top envelop'/>
        <p>casadostoldosvendas10@hotmail.com</p>
      </div>
    </div>
  )
}

export default TopBar