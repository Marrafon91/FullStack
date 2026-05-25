import { useNavigate } from 'react-router-dom';
import './style.css';

type Props = {
  text: string;
  to: string;
};

export default function Button({ text, to }: Props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(to);
  }

  return (
    <div className="button-container ml-40">
      <button className="btn" type="button" onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
