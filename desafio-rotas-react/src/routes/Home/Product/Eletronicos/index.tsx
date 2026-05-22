import './style.css';
import type { Eletronico } from '../../../../services/data';

type Props = {
  eletronicos: Eletronico[];
};

export default function Eletronico({ eletronicos }: Props) {
  return (
    <div className="sub-content">
      <ul>
        {eletronicos.map((eletronico) => (
          <li key={eletronico.id}>{eletronico.nome}</li>
        ))}
      </ul>
    </div>
  );
}
