import React from 'react'
import CardSpecial from '../components/CardSpecial'

import LemonDessert from "../assets/lemon dessert.jpg"
import salad from '../assets/greek salad.jpg'


export const Menu = () => {
  return (
    <section>
    <article className='specials'>
      <h1 style={{fontSize:"4rem",marginBottom:"5rem"}} >Our Menu</h1>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"4rem"
      }}>
      <CardSpecial 
        img = {LemonDessert}
        dish={{title:"Lemon Dessert",price:120}}
      />
        <CardSpecial 
        img = {salad}
        dish={{title:"greek salad",price:28}}
      />
        <CardSpecial 
        img = {salad}
        dish={{title:"greek salad",price:12}}
      />

  <CardSpecial 
        img = {LemonDessert}
        dish={{title:"Lemon Dessert",price:10}}
      />
        <CardSpecial 
        img = {salad}
        dish={{title:"greek salad",price:10}}
      />
        <CardSpecial 
        img = {salad}
        dish={{title:"greek salad",price:10}}
      />
    </div>
  </article>
  </section>
  )
}
