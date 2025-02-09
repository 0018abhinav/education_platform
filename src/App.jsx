import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <main className='bg-white text-dark'>
      <Hero/>
      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>
    </main>
  )
}

export default App