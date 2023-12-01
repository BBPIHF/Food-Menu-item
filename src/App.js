import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//map through items to get all value and pass the return values to a new Set() method which get a unique value (data without repetative) this return an object which i then spread inside the empty array with "all" as default value.
const allCategories = ['all', ...new Set(items.map((item)=>{ return item.category}
))]

//putting the code outside the app component allows me to have access to it inside the app component 

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)

const filterItems = (category)=>{
  if(category === 'all'){
    setMenuItems(items)
    return;
  }
  const newItems = items.filter((item)=>{
    return item.category === category
  });
  setMenuItems(newItems);
}


//the above code takes in a parameter, which will be passed in the categories component this will then determine what our setMenuItems state should be.


  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems = {filterItems} categories = {categories}/>
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
