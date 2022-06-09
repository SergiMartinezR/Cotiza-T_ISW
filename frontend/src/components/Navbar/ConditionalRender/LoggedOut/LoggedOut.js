import React from 'react';
import {Link} from 'react-router-dom';
import '../../Navbar.css'

const Logout = (props) => {
  return (
    <div className='conditional_render centerDiv'>
      <Link to='/userSignup/register'>
        <button className='signbutton' type="button">Registrarse</button>
      </Link>
      <Link to='/userLogin'>
        <button className='logbutton' type="button">Iniciar Sesi&oacute;n</button>
      </Link>
    </div>
  );
}

export default Logout; 