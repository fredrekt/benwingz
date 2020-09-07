import React from 'react'
import ellipsis from '../images/ellipsis.gif'
import {styled} from 'styletron-react';

const Loading = () => {
    const LoadingContainer = styled('div',{
        display: `flex`,
        position: `absolute`,
        left: `0`,
        right: `0`,
        transform: `translate(-50%, -50%)`
    })
    return (
        <LoadingContainer>
           <img src={ellipsis} alt=""/>
        </LoadingContainer>
    )
}

export default Loading
