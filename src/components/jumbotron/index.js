import React from 'react'
import {Container,Inner,Item,Pane,Title,SubTitle,Image} from './styles/jumbotron';
export default function Jumbotron({children,direction = 'row', ...resetProps}){
    return(
        <Item{...resetProps}>
            <Inner direction={direction}>
            {children}
            </Inner>
        </Item>
    )
}


Jumbotron.Container = function JumbotronContainer({children,...resetProps}){
    return <Container{...resetProps}>{children}</Container>;
}

Jumbotron.Pane = function JumbotronPane({children,...resetProps}){
    return <Pane{...resetProps}>{children}</Pane>;
}

Jumbotron.Title = function JumbotronTitle({children,...resetProps}){
    return <Title{...resetProps}>{children}</Title>;
}

Jumbotron.SubTitle = function JumbotronSubTitle({children,...resetProps}){
    return <SubTitle{...resetProps}>{children}</SubTitle>;
}

Jumbotron.Image = function JumbotronsubImage({...resetProps}){
    return <Image{...resetProps}/>;
}