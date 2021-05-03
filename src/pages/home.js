import React from 'react';
import {Feature, OptForm} from '../components';
import jumboData from '../fixtures/jumbo';
import  Jumbotron from '../components/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import HeaderContainer from '../containers/header';
export default function Home(){
    return(
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programs and more</Feature.Title>
                <Feature.SubTitle>Watch anyware.Cancale at anytime</Feature.SubTitle>
            </Feature>
            <OptForm>
            <OptForm.Input placeholder="Email Adress"/>
                    <OptForm.Button>Try it Now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to Watch ? Enter  your email to create or restart your membership</OptForm.Text>
            </OptForm>
            </HeaderContainer>
    <Jumbotron.Container>
        {jumboData.map((item)=>(
          <Jumbotron key={item.id} direction ={item.direction}>
            <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}/>
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
      <FaqsContainer/>
      <FooterContainer/>
        </>
    )
}