import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className = 'header'>
      <div className='logo'>
        <h3 className=''>Bujet</h3>
        <nav >
          <ul className = ''>
            <li className = ''> Plan </li>
            <li className = '' > Save </li>
            <li className = '' > Invest </li>
          </ul>
        </nav>
      </div>
      <div>
        
      </div>
      <div className='btn-cta'>
        <button className = 'border h-10 px-4 hover:text-indigo-50 hover:bg-blue-800 hover:ease-out duration-200 hover:shadow-lg text-center rounded border-blue-800 font-normal text-gray-700'> Log In </button>
        <button className = 'ml-5 px-6 h-10 text-center bg-blue-800  text-white rounded text-base font-normal'> Sign up for free  </button>
      </div>
    </div>
  )
}

export default Header
