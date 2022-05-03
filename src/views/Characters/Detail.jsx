import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterDetail({ characters=[] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    const selectedCharacter = characters[id - 1];
    setCharacter(selectedCharacter);
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  )
}
