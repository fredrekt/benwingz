import {styled} from 'styletron-react';
import React from "react";

export default ({children}) => {
    const Container = styled('div', {
        paddingLeft: `0rem`,
        paddingRight: `0rem` 
    });
    return(
        <Container>
            {children}
        </Container>
    )
}
