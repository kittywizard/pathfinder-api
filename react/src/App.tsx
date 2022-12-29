import { useState, useEffect } from 'react';
import Header from './components/header/Header';

interface spellTypes {
  id: number,
  name: string,
  subschool: string,
  descriptor: string,
  saving_throws: boolean,
  school: string,
  short_description: string,
  range: string,
  area: string,
  effect: string
}

const App:React.FC = () => {
  const [spells, setSpells] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:3001')
    .then(response =>  response.json())
    .then(data => {
      //only get a few for now
      setSpells(data)
    
    })
  }, []);

// spell API names:
// name,school,subschool,descriptor,spell_level,casting_time,range,area,effect,targets,duration,
//dismissible,shapeable,saving_throw,description,description_formatted,full_text,domain,short_description,mythic_text,mythic

  const spellMap = spells.map((spell: spellTypes) => {
      return (
        <div className="spell-box">
          <ul className="spell-list">
            <li>
              <span className='spell-name'>{spell.name}</span>        
            </li>
            <li>
              School: {spell.school}
            </li>
            <li>
              Subschool: {spell.subschool}
            </li>
            <li>
              Description: {spell.short_description}
            </li>
            <li>
            {spell.range != '' &&
              <>Range: {spell.range} <br/></>
            }
            Area: {spell.area} <br/>
            Effect: {spell.effect}
            </li>

          </ul>

        </div>
      )
  })

  return (
    <>
    <Header />
    <section className='box-container'>
      {spellMap}
    </section>
    </>
  )
}

export default App;