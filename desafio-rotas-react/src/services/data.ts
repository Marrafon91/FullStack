// Computadores

export interface Computador {
  id: number;
  nome: string;
}

export const computadores: Computador[] = [
  { id: 1, nome: 'Computador 1' },
  { id: 2, nome: 'Computador 2' },
  { id: 3, nome: 'Computador 3' },
];

// Eletronico

export interface Eletronico {
  id: number;
  nome: string;
}

export const eletronicos: Eletronico[] = [
  { id: 1, nome: 'Eletrônico 1' },
  { id: 2, nome: 'Eletrônico 2' },
  { id: 3, nome: 'Eletrônico 3' },
];

// Livros

export interface Livros {
  id: number;
  nome: string;
}

export const livros: Livros[] = [
  { id: 1, nome: 'Livro 1' },
  { id: 2, nome: 'Livro 2' },
  { id: 3, nome: 'Livro 3' },
];
