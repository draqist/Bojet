import React from 'react'

const Header = () => {
  return (
    <div className = 'px-10 h-20 flex items-center justify-between'>
      <div className='flex items-center justify-between flex-grow logo'>
        <h3 className='font-semibold  text-4xl text-gray-00 tracking-wide mr-4 text-center'>Bujet</h3>
        <nav >
          <ul className = 'flex items-center text-center justify-end'>
            <li className = 'px-10  font-semibold text-gray-400 text-lg '> Plan </li>
            <li className = 'px-6 font-semibold text-gray-400 text-lg' > Save </li>
            <li className = 'px-6 font-semibold text-gray-400 text-lg' > Invest </li>
          </ul>
        </nav>
      </div>
      <div>
        
      </div>
      <div className='btn-cta flex-none '>
        <button className = 'border h-10 px-4 hover:text-indigo-50 hover:bg-blue-800 hover:ease-out duration-200 hover:shadow-lg text-center rounded border-blue-800 font-normal text-gray-700'> Log In </button>
        <button className = 'ml-5 px-6 h-10 text-center bg-blue-800  text-white rounded text-base font-normal'> Sign up for free  </button>
      </div>
    </div>
  )
}

export default Header
