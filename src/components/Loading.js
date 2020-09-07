import React from 'react'
import ellipsis from '../images/ellipsis.gif'
import {styled} from 'styletron-react';

const Loading = () => {
    const LoadingContainer = styled('div',{
        display: `flex`,
        position: `fixed`,
        width: `100%`, height: `100%`,
        textAlign: `center`,
        justifyContent: `center`,
        alignItems: `center`,
        alignSelf: `center`
    })
    return (
        <LoadingContainer>
           <img src={ellipsis} alt=""/>
        </LoadingContainer>
    )
}

export default Loading
