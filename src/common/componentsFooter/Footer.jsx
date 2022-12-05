import React from 'react'
import styles from './styles/Footer.module.css';

export const Footer = () => {
  
  return (
  <> 
    <div className={styles ["container"]}>
      <div> Términos de uso </div>
      <div> Información corporativa </div>
      <div> Privacidad </div>
      <div> Contáctanos </div>
      <div> Empleo </div>
      <div> Avisos legales </div> 
    </div>
    <p className={styles ["parrafo"]}> © 1997-2022 Netflix, inc </p>
  </>  
  )
}


