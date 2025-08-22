import { useState } from 'react'
import menuData from './data'
import Title from './components/Title'
import Categories from './components/Categories'
import Menu from './components/Menu'

const uniqueCategories = [
  'all', ...new Set(
    menuData.map( item => item.category ) 
  )
]

const App = () => {
  const [menuItems, setMenuItems] = useState(menuData)
  const [categories] = useState(uniqueCategories)

  const filterMenu = category => {
    const filterCategories = menuData.filter(
      menuItem => menuItem.category === category
    )
    category === 'all' ? setMenuItems(menuData) : setMenuItems(filterCategories)
  }
  
  return (
    <main>
      <section className='menu'>
        <Title titleText="latest menu" />
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu items={menuItems}/>
      </section>.
    </main>
  )
}
export default App
