interface CardProps {
  text: string;
}

export function Card({ text }: CardProps) {
  return (
    <button className="card" onClick={() => console.log('Clicked')}>
      <div className="card-text">
        {text}
      </div>
    </button>
  );
}