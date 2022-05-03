import React from 'react'
import { useEffect, useState } from 'react';
import { useRouteMatch, Link, Route } from 'react-router-dom';
import { getCharacters } from '../../services/characters';
import CharacterDetail from './Detail';

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  console.log('url', url, 'path', path);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { results } = await getCharacters();
      setCharacters(results);
      setLoading(false);
    }
    getData();
  }, [])

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      {loading ? (
        <p>Loading characters...</p>
      ) : (
        <>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <Link to={`${url}/${character.id}`}>
                  {character.name}
                </Link>
              </li>
            ))}
          </ul>
          <Route path={`${path}/:id`}>
            <CharacterDetail characters={characters} />
          </Route>
        </>
      )}
    </div>
  )
}
