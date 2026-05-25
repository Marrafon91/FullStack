import './style.css';

type Props = {
  text: string;
}

export default function Button({text}: Props) {
  return (
    <div className="button-container">
      <button className="btn ml-40" type="submit">{text}</button>
    </div>
  );
}
