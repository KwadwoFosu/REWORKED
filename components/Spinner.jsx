import React from 'react'

const Spinner = () => {
  return (
    <div class="flex h-screen w-screen justify-center items-center bg-zinc-200 ">
    
     {/* <svg class="mr-5 h-20 w-20 animate-spin text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg> */} 
  
  <div className='flex relative justify-center align-items-center '>
    <div className='ring'></div>
    <div className='ring'></div>
    <div className='ring'></div>
    <div className='relative flex justify-center align-items-center z-15 font-semibold'><h2>Loading...</h2></div>
    
  </div>
      
    
  </div>
  )
}

export default Spinner