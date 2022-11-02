import React, { useContext } from 'react'
import NavbarModule from "./NavBar.module.css"
import imageSource from "../../../images/search.png";
import { DarkContext } from '../../context/darkMode';
import useFetch from '../../hooks/useFetch';
import Card from '../card/Card';

const NavBar = () => {
  const {
    dark
  } = useContext(DarkContext);
  const {
    handleChange,
    handleSubmit,
    input,
    data,
    fecha
  } = useFetch()
  return (
    <>
      <form className={NavbarModule.form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            className={`${NavbarModule.input} ${dark && NavbarModule.inputDark}`} 
            placeholder="Search github userNames" 
            name='search'
            value={input.search}
            onChange={handleChange}
          />
          <img src={imageSource} alt="imagen del buscador" className={`${NavbarModule.icono} ${dark && NavbarModule.iconoDark}`} />
          <button type="submit" className={NavbarModule.button}>Search</button>
      </form>
      <Card data={data} fecha={fecha} />
    </>
  )
}

export default NavBar