import React from 'react'
import Footer from './footer/Footer'
import MainBar from './MainBar/MainBar'

function ShowCase() {
  return (
    <>
    <MainBar/>
    <section className='showcase'>
      <div className='showcase-overlay'>
        <h1>Amazing employees deserve amazing software</h1>
        <p>
        The only platform you will ever need to help run your business:
integrated apps, kept simple, and loved by millions of happy users
        </p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default ShowCase
