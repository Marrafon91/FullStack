import './style.css';

type CardProps = {
  title: string;
};

export default function Card({ title }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
}
