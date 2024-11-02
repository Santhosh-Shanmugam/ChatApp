import React from 'react'

const Infobar = ({room}) => {
  return (
    <div className='bg-blue-700 flex items-center justify-center p-4 rounded-t-lg text-white'>
       <div className='text-left flex-1'>
            <h1 className="text-lg font-semibold truncate">{room}</h1>
       </div>
       <div className='flex-none'>
            <a href='/' className='text-red-600 hover:text-red-950'>X</a>
       </div>
    </div>
  )
}

export default Infobar
