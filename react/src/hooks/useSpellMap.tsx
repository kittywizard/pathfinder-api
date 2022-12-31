import React, { useReducer } from "react";
import { useEffect,useState } from "react";

interface spellTypes {
    id: number,
    name: string,
    subschool: string,
    descriptor: string,
    saving_throws: boolean,
    school: string,
    short_description: string,
    description: string,
    range: string,
    area: string,
    effect: string
  }

  interface iFilterData {
    name: string,
    id: number,
    isChecked: boolean
}

export default function useSpellMap() {
    const [spells, setSpells] = useState<any>([]);
    const [filterData, setFilterData] = useState<iFilterData>([]);
    //need to grab each name and id from the list and attach to filterData

    useEffect(() => {
      fetch('http://localhost:3001')
      .then(response =>  response.json())
      .then(data => {

        //only get a few for now
        let tempArray = [];
        for(let i=0; i < 10; i++){
          tempArray.push(data[i])
        }

        setSpells(tempArray);
      })
        
      }, []);
      

      //need to grab an ID and isChecked property. good luck
      useEffect(() => {
          const spellSchools:any = [];
          spells.forEach(spell => spellSchools.push(spell.school));
          setFilterData(spellSchools);
    }, [spells]);



    //capitalize strings
    const formatSpells = (str: string) => {
        const formattedStrArr: Array<string> = str.split('');
        formattedStrArr[0] = formattedStrArr[0].toUpperCase();
        return formattedStrArr.join('');         
    }
  
  // spell API names:
  // name,school,subschool,descriptor,spell_level,casting_time,range,area,effect,targets,duration,
  //dismissible,shapeable,saving_throw,description,description_formatted,full_text,domain,short_description,mythic_text,mythic
  
    const spellMap = spells.map((spell: spellTypes) => {
        return (
          <div className="spell-box">
          <ul className="spell-list">
                <li className='spell-name'>
                    {spell.name}
                </li>
                <li>School: {formatSpells(spell.school)}
                            {spell.subschool != '' && <> ({formatSpells(spell.subschool)})</>}
                </li>
                <li>
                   Description: {spell.short_description != '' ? <>{spell.short_description}</> : <>{spell.description}</>}
                </li>
                <li>
                    {spell.range != '' &&
                        <>Range: {formatSpells(spell.range)} <br/></>
                    }
                    {spell.area != '' &&
                        <>Area: {formatSpells(spell.area)} <br/></>
                    }
                    {spell.effect != '' &&
                        <>Effect: {formatSpells(spell.effect)}</>
                    }
              </li>
        </ul>
        </div>
        )
    })
  

    //return said functions below
    return {spellMap, formatSpells, filterData, setFilterData}
}