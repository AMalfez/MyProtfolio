import '../scss/Home.scss'
import React from 'react'
import DesignBox from './DesignBox'
import MediaLinks from './MediaLinks'
import Skills from './Skills'

function Home() {
    
  return (
    <>
    <div className='home__container'>
        <div className='home__intro'>
            <p className='home__introGreet'><span className='home__introLetters' style={{fontSize:'20px'}}>Hi. I am</span><span className='home__introLetters'style={{fontSize:'55px'}}> Alfez Mansuri.</span><span className='home__introLetters' style={{fontSize:'30px'}}> Web Developer</span></p>
            <p className='home__briefIntro'>
            I'm a MERN Stack Developer (specialised in frontend-development) with keen interest in designing websites also. I am equiped with skills to bring your dream website to life...
            </p>
        </div>
        <div className='home__profilePhoto'>
         <DesignBox className='home__designbox' color={['#ff6b08','#eedd44']} />
         <div className='profilePhoto'>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeVOH-TmZJVNP0KHXoPcjta6NLjJXtNSsDbbEtlJD&s'} alt='alfez' />  
         </div>
        </div>
        {/*convert it to chat*/}
        <MediaLinks/>
    </div> 
      <Skills/>
    </>
  )
}

export default Home
