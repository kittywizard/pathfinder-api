import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import useSpellMap from './hooks/useSpellMap';


const App:React.FC = () => {
 const {spellMap, filterData, setFilterData} = useSpellMap();

  return (
    <>
    <Header />
    <Filter 
      filterData={filterData}
      setFilterData={setFilterData}
    />
    <section className='box-container'>
          {spellMap}
    </section>
    </>
  )
}

export default App;