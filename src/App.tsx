import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Container, FlexColumn, Header } from './components/LargeButton';

function App() {
  return (
    <div className="app-background">
      <Container>
      <Header />
      <FlexColumn>
        <Card text="Я надаю послугу" />
        <Card text="Я отримую послугу" />
      </FlexColumn>
    </Container>
    </div>
  );
}

export default App;
