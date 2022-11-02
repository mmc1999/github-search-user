import React,{ useContext }  from 'react'
import headerModule from "./header.module.css"
import imagenDark from "../../../images/night.png"
import imagenLight from "../../../images/light.png"
import { DarkContext } from '../../context/darkMode'

const Header = () => {
    const {
        setDark,
        dark
    } = useContext(DarkContext)
  return (
    <header className={headerModule.header}>
        <div>
            <p className={`${headerModule.title} ${dark && headerModule.titleDark}`}>devfinder</p>
        </div>
        <div>
            {
                !dark 
                ? (
                    <div className={headerModule.divModo} onClick={() => setDark(true)}>
                        <p className={`${headerModule.modo} ${headerModule.dark}`}>Dark</p>
                        <img src={imagenDark} alt='imagen de dark' className={headerModule.icono} />
                    </div>
                )
                : (
                    <div className={headerModule.divModo} onClick={() => setDark(false)}>
                        <p className={`${headerModule.modo} ${headerModule.light}`}>Light</p>
                        <img src={imagenLight} alt='imagen de light' className={headerModule.iconoDark} />
                    </div>
                )
            }
        </div>
    </header>
  )
}

export default Header