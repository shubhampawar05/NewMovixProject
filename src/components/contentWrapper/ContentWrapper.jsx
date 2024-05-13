import React from 'react'
import "./ContentWrapper.css"

const ContentWrapper = ( {children,className}) => {
  return (
    <div className={`Wrapper ${className}`}>
    {children}
    </div>
  )
}

export default ContentWrapper