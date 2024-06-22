import React from 'react';
import './App.css';
import {Card, Container, FlexColumn} from './components/LargeButton';
import Header from './components/header';

function App() {
    return (
        <div>
            <Header/>
            <div className="app-background">
                <Container>
                    <FlexColumn>
                        <Card text="Я надаю послугу"/>
                        <Card text="Я отримую послугу"/>
                    </FlexColumn>
                </Container>
            </div>
        </div>
    );
}

export default App;
