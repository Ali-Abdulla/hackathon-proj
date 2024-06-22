import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CardProps {
  text: string;
  navigation: string;
}

export function Card({ text, navigation }: CardProps) {
  const navigate = useNavigate();

  return (
    <button className="card" onClick={() => navigate(navigation)}>
      <Stack direction='row' gap={1} sx={{justifyContent: 'center', alignItems: 'center'}}>
      <p className="card-text">
        {text}
      </p>
      <img src="diia.svg" alt="diia" style={{width: '5ch', height: '5ch'}}/>
      </Stack>
    </button>
  );
}