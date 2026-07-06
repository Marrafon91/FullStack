import './style.css'

type Props = {
  text: string;
}

export default function ButtonInverse({text}: Props) {
  return (
    <button type="submit" className="dsc-btn dsc-btn-white">{text}</button>
  );
}
