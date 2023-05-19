import React, { useEffect, useState } from 'react'
import "./Search.css"
import { useSelector } from 'react-redux'
import { filterFunction } from '../../Functions/function'
import Display from '../Display/Display';




const Search = () => {


    const [data,setData] = useState([]);

    const searchData = useSelector((state) => {
        return state.searchInput
    })

    const allUsers = useSelector((state) => {
        return state.allUsersData
    });

    useEffect(() => {
        filterFunction(searchData,allUsers,setData);
    },[searchData]);

  return (
    <div> 
        
        {data.length > 0 ?<><h1 className='searchHeading'>Result for "{searchData}"</h1><Display state={data}/></>  : <div className='errorContainer'><h1 className='errorHeading'>Data not found for "{searchData}"</h1></div>}
    </div>
  )
}

export default Search