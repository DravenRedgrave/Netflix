import React from 'react';
import jumboData from './fixtures/jumbo';
import  Jumbotron from './components/jumbotron';
import { FooterContainer } from './containers/footer';
import { FaqsContainer } from './containers/faqs';
function App() {
  return (
    <>
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
  );
}

export default App;