import React from 'react'
import Header from '../../Components/Header/Header'
import hero from '../../Icons/hero.svg'
import support from '../../Icons/support.png'
import product from '../../Icons/Product.png'
import cost from '../../Icons/cost.png'
import delivery from '../../Icons/delivery.png'
import './land.css'

const LandingPage = () => {
  return (
    <div className = ' bg-white'>
      <Header />
      <main className='hero px-10 flex items-center justify-evenly mt-10'>
        <div className='heroText text-6xl leading-tight text-blue-800 font-bold mt-16 mb-24 '>
          Track your <span className = 'text-yellow-600'>expenses,</span> <br />
          Budget your <span className='text-yellow-600'>incomes</span> and <span className='text-yellow-600'>save money.</span>
          <span className='block text-gray-300 text-lg pt-1'>We help you automate settling your expenses and budgets.</span>
          <button className = 'bg-blue-600 text-center text-lg w-40 h-12 text-white rounded-lg'> Get started </button>
        </div>
        <img src={ hero } alt='hero' />
      </main>
      <div className = 'mt-24'>
        <img src={product} alt = 'product' className = 'mt-24'/>
      </div>
      <main className='overview mt-24 flex justify-around items-center text-blue-900'>
        <img src={support} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 uppercase text-xl pt-1 pb-8'>always online</span>
          Real-time support with <span className='text-yellow-600' >Firestore</span>
          <span className='block text-gray-300 text-sm pt-1'>
            Amet ad duis ea officia irure ipsum irure dolore dolore nostrud. Est aliquip duis consequat nulla sit do. Adipisicing
          </span>
        </div>
      </main>
      <main className='overview mt-36 flex justify-around items-center text-blue-900'>
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 uppercase text-xl pt-1 pb-8'>free some cost</span>
            <span className='text-yellow-600' >Save</span> cost for you and family
          <span className='block text-gray-300 text-sm pt-1'>
            Amet ad duis ea officia irure ipsum irure dolore dolore nostrud. Est aliquip duis consequat nulla sit do. Adipisicing
          </span>
        </div>
        <img src={cost} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
      </main>
      <main className='overview mt-36 flex justify-around items-center text-blue-900'>
        <img src={delivery} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 uppercase text-xl pt-1 pb-8'>Use anytime </span>
            <span className='text-yellow-600' >Easily</span> accessible and secure for use.
          <span className='block text-gray-300 text-sm pt-1'>
            Amet ad duis ea officia irure ipsum irure dolore dolore nostrud. Est aliquip duis consequat nulla sit do. Adipisicing
          </span>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
