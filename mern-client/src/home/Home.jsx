import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import { ReadYourBook } from './ReadYourBook'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FavoriteBooks/>
      <FavBook/>
      <PromoBanner/>
      <ReadYourBook/>
      <Review/>
      </div>
  )
}

export default Home