import React from 'react'

function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
    {['home', 'about', 'contact', 'work', 'testimonials', 'contact', 'skills'].map((item, index) => ( 
          <a key={item + index} className='app__navigation-dot' style={active === item ? { backgroundColor: '#313BAC' } : {}}
            
            href={`#${item}`} />
       ))}
    </div>
  )
}

export default NavigationDots