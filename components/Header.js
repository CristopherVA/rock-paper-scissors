import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { selectStore } from '../redux/slices/playSlice'

function Header() {

  const score = useSelector(selectStore)

  return (
    <div className='flex px-4 py-2 justify-between items-center border-4  border-header-outline rounded-lg '>
      <div className='font-extrabold leading-4 text-left text-white'>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className='bg-white  rounded-lg text-dark-text font-bold leading px-4 py-1 flex flex-col justify-center'>
        <p className='text-sm '>SCORE</p>
        <p className='font-bold text-5xl'>{score}</p>
      </div>
    </div>
  )
}

export default Header