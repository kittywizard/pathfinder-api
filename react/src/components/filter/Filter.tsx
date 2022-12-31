import { useState } from "react";
import Checkbox from "./checkbox/Checkbox";



const Filter:React.FC = ({filterData, setFilterData}) => {

    //change state of each, send this with the check component

    function handleChange(id: number) {
        setFilterData(prevState => prevState.map(filter => {
              return filter.id === id ? {...filter, isChecked: !filter.isChecked} : filter
          }
          ))
    }

    //map through options, create a checkbox component
    const filterOptions = filterData.map(filter => {
        return  <Checkbox 
                    handleChange={handleChange}
                    name={filter}
                    isChecked={filter.isChecked}
                    id={filter.id}
                />
});

    return (
       <> 
       {filterOptions}
       </>
    )
}

export default Filter;