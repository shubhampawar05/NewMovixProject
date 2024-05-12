import React from 'react'
import "./ContentWrapper.css"

const ContentWrapper = ( {children}) => {
  return (
    <div className='Wrapper'>
    {children}
    </div>
  )
}

export default ContentWrapper