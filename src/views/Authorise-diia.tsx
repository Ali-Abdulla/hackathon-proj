import { Container } from "../components/LargeButton";
import { Card } from "../components/authorise-diia/Card";
import { Header } from "../components/authorise-diia/Header";

const AuthoriseDiia: React.FC = () => {
  return (
    <div className="app-background">
      <Container>
      <Header />
      <Card text="Авторизуватись через" navigation=".."/>
    </Container>
    </div>
  );
};

export default AuthoriseDiia;