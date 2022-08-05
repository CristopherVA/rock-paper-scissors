import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'
import { selectMachineScore, selectStore } from '../redux/slices/playSlice'

function Header() {

  const score = useSelector(selectStore)
  const machineScore = useSelector(selectMachineScore)

  return (
    <div className='max-w-xl mx-auto flex px-4 py-2 space-x-2 justify-between items-center border-4  border-header-outline rounded-lg '>
      <div className='bg-white  rounded-lg text-dark-text font-bold px-3 py-2 leading flex flex-col justify-center'>
        <p className='text-xs '>SCORE</p>
        <p className='font-bold text-3xl'>{score}</p>
      </div>
      <div className='font-extrabold text-center leading-4 text-white'>
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>

      <div className='bg-white  rounded-lg text-dark-text font-bold px-5 py-2 leading flex flex-col justify-center'>
        <p className='text-xs '>CPU</p>
        <p className='font-bold text-3xl'>{machineScore}</p>
      </div>
    </div>
  )
}

export default Header