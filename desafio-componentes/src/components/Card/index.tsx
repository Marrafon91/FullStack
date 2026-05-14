import './style.css'
import carImg from '../../assets/car-card.png'

export default function Card() {
  return (
    <div className="ds-carrs-card">
      <img src={carImg} alt="Carro" />
      <p>Lorem ipsum dolor</p>
    </div>
  );
}
