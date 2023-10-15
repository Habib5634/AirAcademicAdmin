import React from 'react'
import States from '../Dashboard/States'
import CurrentStudent from '../Student/CurrentStudent/CurrentStudent'

const Earning = () => {
  return (
    <>
    <h1 className='text-[#7644FF] text-2xl mt-4 ml-2'>Total Earning</h1>
    <States/>
    <div className='mt-4'>
    <CurrentStudent/>
    </div>
    </>
  )
}

export default Earning