import { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import './style.css';
import type { UserDTO } from '../../../models/UserDTO';
import { findUser } from '../../../service/github-service';

export default function SearchUser() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');

  const [user, setUser] = useState<UserDTO>();
  const [error, setError] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }

    findUser(search)
      .then((response) => {
        setUser(response.data);

        setError('');
      })
      .catch(() => {
        setUser(undefined);

        setError('Erro ao buscar usuário');
      });
  }, [search]);

  function handleSubmit(event: any) {
    event.preventDefault();
    setSearch(inputValue);
  }

  return (
    <main className="container">
      <div className="ml-40">
        <section>
          <div className="main-content-search">
            <h2 className="ml-40">Encontre um perfil Github</h2>

            <form onSubmit={handleSubmit}>
              <input
                className="ml-40"
                type="text"
                placeholder="Usuário Github"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />

              <div className="ml-40">
                <Button text="Encontrar" />
              </div>
            </form>
          </div>
        </section>

        <section className="container">
          {user && (
            <div className="user-card">
              <div>
                <img src={user.avatar_url} alt={user.name} />
              </div>

              <div className="user-card-sub-content">
                <div className="use-card-h3">
                  <h3>Informações</h3>
                </div>
                <div className="use-card-p">
                  <p>
                    Perfil:
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                      {user.html_url}
                    </a>
                  </p>
                </div>
                <div className="use-card-p">
                  <p>Seguidores: {user.followers}</p>
                </div>
                <div className="use-card-p">
                <p>Localidade: {user.location}</p>
                </div>
                <div className="use-card-p">
                <p>Nome: {user.name}</p>
                </div>
              </div>
            </div>
          )}
          <div className="user-notfound">{error && <h2>{error}</h2>}</div>
        </section>
      </div>
    </main>
  );
}
