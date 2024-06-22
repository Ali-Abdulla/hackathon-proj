import { Stack } from "@mui/material";
import { Header } from "../components/choose-role/Header";
import { Card } from "../components/choose-role/Card";
import { Container } from "../components/LargeButton";

const ChooseRole: React.FC = () => {
  return (
    <div className="app-background">
      <Container>
      <Header />
      <Stack spacing={3}>
        <Card text="Я отримую послугу" navigation="../authorise-diia" />
        <Card text="Я надаю послугу" navigation="../error"/>
      </Stack>
    </Container>
    </div>
  );
};

export default ChooseRole;
