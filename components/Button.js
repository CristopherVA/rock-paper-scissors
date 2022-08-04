import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setChoose } from '../redux/slices/playSlice'


// ICONS
import Hand from './icon/Hand'
import Rook from './icon/Rook'
import Scissors from './icon/Scissors'
import Triangue from './icon/Triangue'


function Button() {

   const dispatch = useDispatch()


   const handleChoose = ({ target }) => {
      console.log(target.dataset.id)
      // dispatch({ id: target.dataset.id })
   }

   return (
      <div className='relative flex justify-center items-center h-[90%]' >
         <div className='relative'>
            <div
               data-id='paper'
               onClick={handleChoose}
               className='z-50 absolute -top-10 -left-10 w-36 h-36 flex justify-center items-center font-bold bg-yellow rounded-full bg-gradient-to-r from-dark-blue to-light-blue cursor-pointer '
            >
               <Link href='/game' >
                  <Hand />
               </Link>
            </div>

            <div
               data-id='scissors'
               onClick={handleChoose}
               className='z-50 absolute right-0 -top-10 -right-9 w-36 h-36 flex justify-center items-center font-bold bg-yellow rounded-full bg-gradient-to-r from-yellow to-light-yellow cursor-pointer'
            >
               <Link href='/game' >
                  <Scissors />
               </Link>
            </div>

            <div
               data-id='rock'
               onClick={handleChoose}
               className='z-50 absolute bottom-0 left-[30%] w-36 h-36 flex justify-center items-center font-bold bg-yellow rounded-full bg-gradient-to-r from-pink to-light cursor-pointer'
            >
               <Link href='/game' >
                  <Rook />
               </Link>
            </div>

            <div className="z-0">
               <Triangue />
            </div>
         </div>


      </div>
   )
}

export default Button