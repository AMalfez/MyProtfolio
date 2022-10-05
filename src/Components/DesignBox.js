import React from 'react'

function DesignBox(props) {
  return (
    <div className='home__designBox' style={{marginLeft:'19%', borderRadius:'8px',width: '80px', height:'80px' ,backgroundImage: `linear-gradient(to top, ${props.color[0]},${props.color[1]})`}}>

    </div>
  )
}

export default DesignBox
