import './style.css';

type Props = {
  text: string;
}

export default function Button({text}: Props) {
  return (
    <div className="button-container">
      <button className="btn" type="submit">{text}</button>
    </div>
  );
}
