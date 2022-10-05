import '../scss/MediaLinks.scss'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function MediaLinks() {
  return (
    <div className='media'>
      <a href='https://www.facebook.com/profile.php?id=100075781446415' className='media__links facebook'>
      <FontAwesomeIcon className='media__facebook icon'  icon={faFacebook} />
      </a>
      <a href='https://www.instagram.com/alfaiz_mansuri47' className='media__links instagram'>
        <FontAwesomeIcon className='media__instagram icon' icon = {faInstagram}/>
      </a>
      <a href='https://www.linkedin.com/in/alfez-mansuri-3aba3224a/' className='media__links linkedin'>
      <FontAwesomeIcon className='media__linkedin icon' icon = {faLinkedin}/>
      </a>
    </div>
  )
}

export default MediaLinks
