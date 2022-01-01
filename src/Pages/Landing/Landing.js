import React from 'react'
import Header from '../../Components/Header/Header'
import hero from '../../Icons/hero.svg'
import support from '../../Icons/support.png'
import product from '../../Icons/Product.png'
import cost from '../../Icons/cost.png'
import delivery from '../../Icons/delivery.png'
import './land.scss'

const LandingPage = () => {
  return (
    <div className = 'land '>
      <Header />
      <main className='hero'>
        <div className='heroText'>
          Track your <span>expenses,</span> <br />
          Budget your <span>incomes</span> and <span>save money.</span>
          <span className='block'>We help you automate settling your expenses and budgets.</span>
          <button className = 'btn'> Get started </button>
        </div>
        <img src={ hero } alt='hero' />
      </main>
      <div className = 'prod mt-24'>
        <img src={product} alt = 'product' className = 'mt-24'/>
      </div>
      <main className='overview mt-24 flex  text-blue-900'>
        <img src={support} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 capitalize text-xl pt-1 pb-4'>always online</span>
          Real-time support with <span className='textSpan text-yellow-600' >Firestore</span>
          <span className='blocks text-gray-300 text-sm pt-1'>
            Amet ad duis ea officia irure ipsum irure dolore dolore nostrud. Est aliquip duis consequat nulla sit do. Adipisicing
          </span>
        </div>
      </main>
      <main className='overview mt-36 flex justify-around items-center text-blue-900'>
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 capitalize text-xl pt-1 pb-4'>free some cost</span>
            <span className='textSpan' >Save</span> cost for you and family
          <span className='blocks'>
            Save for the rainy day
          <br/> Build a safety net for unexpected expenses
          </span>
        </div>
        <img src={cost} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
      </main>
      <main className='overview mt-36 flex justify-around items-center text-blue-900'>
        <img src={delivery} alt='overviewImg' className = 'sup' style = {{width: '31rem'}} />
        <div className='herotext text-5xl leading-tight text-blue-800 font-bold mt-16 '>
          <span className='block font-light text-gray-400 capitalize text-xl pt-1 pb-4'>Use anytime </span>
            <span className='textSpan' >Easily</span> accessible and secure for use.
          <span className='blocks'>
            Amet ad duis ea officia irure ipsum irure dolore dolore nostrud. Est aliquip duis consequat nulla sit do. Adipisicing
          </span>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
