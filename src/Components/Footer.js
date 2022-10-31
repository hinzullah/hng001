import React from 'react'
import zuri from '../images/zuri-logo.svg'
import hng from '../images/Footer text.png'
import i4g from '../images/I4G.png'

const Footer = () => {
    
  return (
    <div>
        <footer>
            <div><a href='https://training.zuri.team/'><img src={zuri} alt='zuri-icon'/></a></div>
            <div><a href='https://internship.zuri.team/hngi9'><img src={hng} alt='hng-icon'/></a></div>
            <div><a href='https://ingressive.org/'><img src={i4g} alt='i4g-icon'/></a></div>
        </footer>
    </div>
  )
}

export default Footer