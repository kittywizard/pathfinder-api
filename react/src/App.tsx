import { useState, useEffect } from 'react';
import Header from './components/header/Header';

interface spellTypes {
  id: number,
  name: string,
  subschool: string,
  descriptor: string,
  saving_throws: boolean,
  school: string
}

const App:React.FC = () => {
  const [spells, setSpells] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(response =>  response.json())
    .then(data => setSpells(data))
  }, []);

  const spellMap = spells.map((spell: spellTypes) => (
    <div className="spell-box">
      <ul className="spell-list">
        <li>
          Name: {spell.name}
        </li>
        <li>
          School: {spell.school}
        </li>
        <li>
          Description: {spell.descriptor}
        </li>
        <li>
          Subschool: {spell.subschool}
        </li>
      </ul>

    </div>
  ))

  return (
    <>
    <Header />
     {spellMap}
    </>
  )
}

export default App;