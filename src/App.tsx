import './App.css';
import { Container } from './components/LargeButton';
import { Stack } from '@mui/material';
import { Header } from './components/choose-role/Header';
import { Card } from './components/choose-role/Card';

function App() {
  return (
    <div className="app-background">
      <Container>
      <Header />
      <Stack spacing={3}>
        <Card text="Я отримую послугу" />
        <Card text="Я надаю послугу" />
      </Stack>
    </Container>
    </div>
  );
}

export default App;
