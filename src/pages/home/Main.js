import React, { useState }  from 'react'
import CardProducts from '../../components/cardProducts/CardProducts'
import SearchBar from '../../components/searchbar/SearchBar'
import LayoutMain from '../../layout/LayoutMain'


 
function Main() {
  const [isActive, setIsActive] = useState([]);
  return (
    <div>
      <LayoutMain>
        <SearchBar/>

      <CardProducts/>
      </LayoutMain>
    </div>
  )
}

export default Main
