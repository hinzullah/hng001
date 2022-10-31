import React from 'react'
import share from '../images/share button.png'
import icon from '../images/share button(1).png'
import slack from '../images/slack.png'
import github from '../images/github.png'
import Data from './Data'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div className='Homepage'>
        
            <div id='header'>
                <div>
                    <img className='three-dot' alt="share" src={share}></img>
                    <div id='profile__img'></div>
                </div>
                
                <img className='icon' alt="share" title='Click to share' src={icon}></img>
                <h3>Oduola Kamol</h3>
                <h3 id='slack'>Hinzullah</h3>
            </div>

        <Data/>
        
        <div className='social'>
            <a href='https://slack.com'><img src={slack} title='Slack' alt='slack-icon'/></a>
            <a href='https://github.com/hinzullah'><img src={github} title='github' alt='slack-icon'/></a>
        </div>

        <Footer/>
        
        
    </div>
  )
}

export default Homepage
