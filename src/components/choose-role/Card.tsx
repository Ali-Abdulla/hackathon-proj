import { useNavigate } from "react-router-dom";

interface CardProps {
  text: string;
  navigation: string;
}

export function Card({ text, navigation }: CardProps) {
  const navigate = useNavigate();

  return (
    <button className="card" onClick={() => navigate('../' + navigation)}>
      <div className="card-text">
        {text}
      </div>
    </button>
  );
}