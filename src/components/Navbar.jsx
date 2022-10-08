import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom'

export default function BarraNav() {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    <>
      <Navbar bg="secondary ">
            <img className='logo mx-5 ' src={logo} alt="icono pokemon" />
          <Nav className="ms-auto">
            <NavLink className={setActiveClass} end to='/' ><p className='nav-home mx-3 text-decoration-none'>Home</p></NavLink>
            <NavLink className={setActiveClass} to='/Pokemon'><p className='nav-pokemon'>Pokemón</p></NavLink>
            </Nav>

      </Navbar>
    </>
  );
}

