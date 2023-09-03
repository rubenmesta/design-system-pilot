import './App.css';
import styled from '@emotion/styled';
import { Hero, Card, Navbar, SectionWithImage, Footer } from 'ds-zulu';

import { sections, cards } from './data';

function Screen2() {
  return (
    <div className="App">
      <Navbar />

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

export default Screen2;
