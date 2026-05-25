import { useState } from 'react';
import Button from '../../../components/Button';
import './style.css';
import type { UserDTO } from '../../../models/UserDTO';
import { findUser } from '../../../service/github-service';

export default function SearchUser() {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState<UserDTO>();
  const [error, setError] = useState('');

  function handleSearch(event) {
    event.preventDefault();

    setError('');

    findUser(userName)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(undefined);
        setError('Erro ao buscar usuário');
      });
  }

  return (
    <main>
      <section className="container">
        <div className="ml-40 main-content-search">
          <h2 className="ml-40">Encontre um perfil Github</h2>
          <form onSubmit={handleSearch}>
            <input
              className="ml-40"
              type="text"
              placeholder="Usuário Github"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <div className="ml-40">
              <Button text="Encontrar" />
            </div>
          </form>

          {user && (
            <div className="user-card">
              <div>
                <img src={user.avatar_url} alt={user.name} width="200" />
              </div>
              <div>
                <h3>Informações</h3>
                <p>
                  Perfil:
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    {user.html_url}
                  </a>
                </p>
                <p>Seguidores: {user.followers}</p>
                <p>Localidade: {user.location}</p>
                <p>Nome: {user.name}</p>
              </div>
            </div>
          )}

          {error && <h2>{error}</h2>}
        </div>
      </section>
    </main>
  );
}
