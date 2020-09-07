import React from 'react'
import ellipsis from '../images/ellipsis.gif'

const Loading = () => {
    return (
        <div style={{ textAlign: `center`, marginTop: `25%` }}>
           <img src={ellipsis} alt=""/>
        </div>
    )
}

export default Loading
