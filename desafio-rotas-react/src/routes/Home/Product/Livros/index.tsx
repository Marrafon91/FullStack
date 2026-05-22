import './style.css';
import type { Livros } from '../../../../services/data';

type Props = {
  livros: Livros[];
};

export default function Livros({ livros }: Props) {
  return (
    <div className="sub-content">
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>{livro.nome}</li>
        ))}
      </ul>
    </div>
  );
}
