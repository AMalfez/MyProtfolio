import '../scss/Skills.scss'
import React from 'react'
import NeeadHelp from './NeeadHelp'

function Skills(props) {
  return (
    <div className='skills' style={{height: props.mainHeight}}>
      <div className='skills__container' style={{ marginTop: props.containerTopMargin}}>
        <div className='skills__header'>
          <h1>Skills</h1>
        </div>
        <hr style={{ width: '95%', margin: 'auto' }} />
        <div className='skills'>
          <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='react logo' className='react skills__logo' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' className='html skills__logo' alt='html' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' alt='css' className='skills__logo css' />
          <img src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' alt='javascript' className='javascript skills__logo' />
          <img src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' alt='nodejs' className='nodejs skills__logo' />
          <img src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' alt='expressjs' className='expressjs skills__logo' />
          <img src='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png' alt='mongodb skills__logo' className='mongodb skills__logo' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' alt='sass' className='sass skills__logo' />
          <img src='https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png' alt='wordpress' className='wordpress skills__logo' />
        </div>
      </div>
      <NeeadHelp />
    </div>
  )
}

export default Skills
