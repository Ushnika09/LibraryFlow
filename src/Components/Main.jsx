import React from 'react'
import Hero from './Hero'
import books from './Books'
import Dashboard from './Dashboard';
import Category from './Category';

function Main() {
  // console.log(popularBooks);
  const category=[...new Set(books.map((book)=>book.genre))]
  const featured=books.filter((book)=>book.isFeatured== true)
  // console.log(featured);



  return (
    <div className='min-h-screen bg-neutral-100'>
      <Hero/>
      <Dashboard books={books} category={category} featured={featured}/>
      <Category books={books} category={category} featured={featured} />
    </div>
  )
}

export default Main