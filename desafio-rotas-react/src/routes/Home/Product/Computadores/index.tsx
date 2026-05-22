import './style.css';
import type { Computador } from '../../../../services/data';

type Props = {
  computadores: Computador[];
};

export default function Computadores({ computadores }: Props) {
  return (
    <div className="sub-content">
      <ul>
        {computadores.map((computador) => (
          <li key={computador.id}>{computador.nome}</li>
        ))}
      </ul>
    </div>
  );
}
