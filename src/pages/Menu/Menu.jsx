import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Menu = () => {
     const [category, setCategory] = useState('All');
  return (
    <div >
        <ExploreMenu  category={category}  setCategory={setCategory} />
        <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Menu