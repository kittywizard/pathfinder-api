import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import useSpellMap from './hooks/useSpellMap';


const App:React.FC = () => {
 const {spellMap} = useSpellMap();

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