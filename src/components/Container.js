import {styled} from 'styletron-react';
import React from "react";

export default ({children}) => {
    const Container = styled('div', {
        paddingLeft: `3rem`,
        paddingRight: `3rem` 
    });
    return(
        <Container>
            {children}
        </Container>
    )
}
