import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setChoose } from '../../redux/slices/playSlice'
import Rock from '../../public/images/icon-rock.svg'

function RockButton({handleChoose}) {

   const {pathname} = useRouter()

   return ( 
      <div
         data-id='rock'
         onClick={handleChoose}
         className={`z-50 ${pathname === '/game' ? 'xl:w-48 xl:h-48 ' :'absolute bottom-[2px] sm:left-[28%] left-[22%]  '} w-28 h-28 hover:scale-105 active:scale-100 shadow-lg duration-75 ease-in sm:w-40 sm:h-40   flex justify-center items-center font-bold bg-yellow rounded-full bg-gradient-to-r from-pink to-light cursor-pointer`}
      >
         <div className={`w-20 h-20 sm:w-28 sm:h-28 ${pathname === '/game' ? 'xl:w-36 xl:h-36' : '  '}   flex justify-center items-center bg-white rounded-full`}>
            <Image src={Rock} alt="rock" />
         </div>
      </div>)
}

export default RockButton