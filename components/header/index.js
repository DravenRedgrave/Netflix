import React from 'react';

import {Link as ReactRouterLink} from 'react-router-dom';

import {Background,ButtonLink,Container,Logo} from './style/header';

export default function Header({bg=true,children,...resetProps}){
    return bg ? <Background{...resetProps}>{children}</Background>:children;
}

Header.Frame = function HeaderFrame({children,...resetProps}){
    return <Container{...resetProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({children,...resetProps}){
    return <ButtonLink{...resetProps}>{children}</ButtonLink>;
};


Header.Logo = function HeaderLogo({to,...resetProps}){
    return(
        <ReactRouterLink to={to}>
            <Logo {...resetProps}/>
        </ReactRouterLink>
    )
}