import './App.css';
import styled from '@emotion/styled';
import { Hero, Card, Navbar, SectionWithImage, Footer } from 'ds-zulu';

import { sections, cards } from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        image={'/img/hero.jpg'}
        title={'Steakhouse'}
        subhtitle={'Lorem ipsum lorem ipsum'}
      />
      {sections.map((section) => {
        return (
          <SectionWithImage
            image={section.image}
            title={section.title}
            body={section.body}
            buttonText={section.buttonText}
            flip={section.flip}
          />
        );
      })}
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card
              image={card.image}
              title={card.title}
              body={card.body}
              buttonText={card.buttonText}
            />
          );
        })}
      </CardsContainer>
      <Footer />
    </div>
  );
}

const CardsContainer = styled.div({
  display: 'flex',
  margin: '0 auto',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
