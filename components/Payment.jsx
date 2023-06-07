import React from 'react'
import { FaApplePay } from 'react-icons/fa'
import {SiVisa, SiVodafone} from 'react-icons/si'

const Payment = () => {
  return (
    <div className='bg-white flex justify-between items-center '>
        
       <div><SiVisa size={40}/></div>
       <div><FaApplePay size={40}/></div>
       <div><img src='https://th.bing.com/th/id/OIP.-c7gM75lwbgjqLY1V8b5HgHaFU?w=215&h=180&c=7&r=0&o=5&pid=1.7' width={50}></img></div>
       <div><img src='https://th.bing.com/th/id/OIP.aQ30G9P_48cNWwplGGEimgAAAA?w=285&h=180&c=7&r=0&o=5&pid=1.7' width={50}></img></div>
       <div><SiVodafone size={25}/></div>
    </div>
  )
}

export default Payment