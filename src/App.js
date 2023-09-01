import './App.css';
import { Hero, Card, Navbar, SectionWithImage, Footer } from 'ds-zulu';
import styled from '@emotion/styled';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero
        image={'/img/hero.jpg'}
        title={'Steakhouse'}
        subhtitle={'Lorem ipsum lorem ipsum'}
      />
      <SectionWithImage
        image={'/img/food6.jpg'}
        title={'Mondays'}
        body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        buttonText="Learn More"
      />
      <SectionWithImage
        image={'/img/food6.jpg'}
        title={'Mondays'}
        body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        buttonText="Learn More"
        flip
      />
      <SectionWithImage
        image={'/img/food6.jpg'}
        title={'Mondays'}
        body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        buttonText="Learn More"
      />

      <CardsContainer>
        <Card
          image="/img/food8.jpg"
          title={'Mondays'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
        />
        <Card
          image="/img/food6.jpg"
          title={'Wednesday'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
        />
        <Card
          image="/img/food7.jpg"
          title={'Thursday'}
          body="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          buttonText="Learn More"
        />
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
