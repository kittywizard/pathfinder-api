import { useState, useEffect } from 'react';
import Header from './components/header/Header';

interface spellTypes {
  id: number,
  name: string,
  subschool: string,
  descriptor: string,
  saving_throws: boolean,
  school: string,
  description: string,
  range: string,
  area: string,
  effect: string
}

const App:React.FC = () => {
  const [spells, setSpells] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(response =>  response.json())
    .then(data => setSpells(data))
  }, []);

// spell API names:
// name,school,subschool,descriptor,spell_level,casting_time,range,area,effect,targets,duration,
//dismissible,shapeable,saving_throw,description,description_formatted,full_text,domain,short_description,mythic_text,mythic

  const spellMap = spells.map((spell: spellTypes) => {
    for(let i=0; i < 20; i++) { //basically to not kill my page - need a way to sort / limit later
      return (
        <div className="spell-box">
          <ul className="spell-list">
            <li>
              Name: {spell.name}
            </li>
            <li>
              School: {spell.school}
            </li>
            <li>
              Subschool: {spell.subschool}
            </li>
            <li>
              Description: {spell.description}
            </li>
            <li>
            Range: {spell.range} <br/>
            Area: {spell.area} <br/>
            Effect: {spell.effect}
            </li>

          </ul>

        </div>
      )

    }


  })

  return (
    <>
    <Header />
     {spellMap}
    </>
  )
}

export default App;