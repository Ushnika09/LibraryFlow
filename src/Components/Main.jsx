import React from 'react'
import Hero from './Hero'
import books from './Books'
import Dashboard from './Dashboard';
import Category from './Category';
import Popular from './Popular';

function Main() {
  const category=[...new Set(books.map((book)=>book.genre))]
  const featured=books.filter((book)=>book.isFeatured== true)
  const popular=books.filter((book)=>book.isPopular== true)
  




  return (
    <div className='min-h-screen bg-neutral-100'>
      <Hero/>
      <Dashboard books={books} category={category} featured={featured}/>
      <Category books={books} category={category} featured={featured} />
      <Popular books={books}  popular={popular}/>
    </div>
  )
}

export default Main