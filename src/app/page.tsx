import React from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import CardsDynamic from './components/CardsDynamic'
const page = () => {
  return (
    <div>
      <Hero />
      <CardsDynamic />
      <Card />
    </div>  
  )
}

export default page