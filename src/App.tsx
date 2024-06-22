import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container, FlexColumn, Header } from './components/LargeButton';

function App() {
  return (
    <Container>
      <Header />
      <FlexColumn>
        <Card text="Я надаю послугу" />
        <Card text="Я отримую послугу" />
      </FlexColumn>
    </Container>
  );
}

export default App;
