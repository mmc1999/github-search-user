import React, { useContext } from 'react';
import building from "../../../images/building.svg";
import twitter from "../../../images/iconTwitter.svg";
import location from "../../../images/iconLocation.svg";
import octocat from "../../../images/octocat.jfif"
import CardModule from "./Card.module.css"
import webSite from "../../../images/webSite.svg"
import { DarkContext } from '../../context/darkMode';

const Card = ({data,fecha}) => {
  console.log(data)
  const  {
    dark
  } = useContext(DarkContext)
  return (
    <section className={`${CardModule.sectionCard} ${dark && CardModule.sectionCardDark}`}>
        <div className={CardModule.primerDiv}>
            <img src={data.avatar_url ? data.avatar_url : octocat} alt="Icono del usuario" className={CardModule.octocat} />
            <div className={CardModule.divDatosUsuario}>
                <p className={`${CardModule.nombre} ${dark && CardModule.nombreDark}`}>{data.name}</p>
                <p className={CardModule.user}>@{data.login}</p>
                <p className={CardModule.joined}>Joined {fecha}</p>
            </div>
        </div>
        <div className={CardModule.divBiography}>
          <p className={`${CardModule.biography} ${dark && CardModule.biographyDark}`}>{!data.bio ? "This profile hasn't bio" : data.bio}</p>
        </div>
        <div className={`${CardModule.divStatistics} ${dark && CardModule.divStatisticsDark}`}>
          <div>
            <p className={`${CardModule.infoStatic} ${dark && CardModule.infoStaticDark}`}>Repos</p>
            <p className={`${CardModule.infoVariable} ${dark && CardModule.infoVariableDark}`}>{data.public_repos}</p>
          </div>   
          <div>
            <p className={`${CardModule.infoStatic} ${dark && CardModule.infoStaticDark}`}>Followers</p>
            <p className={`${CardModule.infoVariable} ${dark && CardModule.infoVariableDark}`}>{data.followers}</p>
          </div>   
          <div>
            <p className={`${CardModule.infoStatic} ${dark && CardModule.infoStaticDark}`}>Following</p>
            <p className={`${CardModule.infoVariable} ${dark && CardModule.infoVariableDark}`}>{data.following}</p>
          </div>   
        </div>
        <div className={CardModule.divDatos}>
          <div>
            <img src={location} alt='Icon de ubication' className={`${!data.location && CardModule.datoFijoNada} ${dark && CardModule.imgDark}`} />
            <p className={`${CardModule.datoFijo} ${!data.location && CardModule.datoFijoNada} ${dark && CardModule.datoFijoDark}`}>{data.location ? data.location : "Not available"}</p>
          </div>
          <div>
            <img src={webSite} alt='Icon of link' className={`${!data.blog && CardModule.datoFijoNada} ${dark && CardModule.imgDark}`}/>
            <a href={data.blog ? data.blog : "#"} target="_black" className={`${CardModule.datoFijo} ${!data.blog && CardModule.datoFijoNada} ${dark && CardModule.datoFijoDark}`}>{data.blog ? data.blog : "Not available"}</a>
          </div>
          <div>
            <img src={twitter} alt='Icon de twitter' className={`${!data.twitter_username && CardModule.datoFijoNada} ${dark && CardModule.imgDark}`} />
            <p className={`${CardModule.datoFijo} ${!data.twitter_username && CardModule.datoFijoNada} ${dark && CardModule.datoFijoDark}`}>{data.twitter_username ? data.twitter_username : "Not available"}</p>
          </div>
          <div>
            <img src={building} alt='Icon of building' className={`${!data.company && CardModule.datoFijoNada} ${dark && CardModule.imgDark}`} />
            <p className={`${CardModule.datoFijo} ${!data.company && CardModule.datoFijoNada} ${dark && CardModule.datoFijoDark}`}>{data.company ? data.company : "Not available"}</p>
          </div>
        </div>
    </section>
  )
}

export default Card