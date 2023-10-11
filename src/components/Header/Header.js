import React from 'react';
import CartButton from '../botaoCarrinho/botaoCarrinho';
import Pesquisa from '../BarraPesquisa/SearchBar';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "./logo.png"
import { BiUser } from "react-icons/bi";

function Header() {
  return (
    <header className="header">
      <div className="container">
      <Link to = "/"> <img src={logo} width="90px"/></Link>

      <Link to = "/login" className='teste'>      <BiUser size={25} />
</Link>
        <Pesquisa />
        <Link to="/cart"><CartButton /></Link>
      </div>
    </header>
  );
}

export default Header;
