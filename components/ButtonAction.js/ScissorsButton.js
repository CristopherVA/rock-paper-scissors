import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setChoose } from '../../redux/slices/playSlice'
import Scissors from '../../public/images/icon-scissors.svg'


function ScissorsButton({ handleChoose }) {
   const {pathname} = useRouter()
   return (  

      <div
         data-id='scissors'
         onClick={handleChoose}
         className={`z-50 ${pathname === '/game' ? 'xl:w-48 xl:h-48 ' :'absolute -top-10 -right-5 sm:right-4  '}   w-28 h-28 sm:w-40 sm:h-40  hover:scale-105 active:scale-100 shadow-lg duration-75 ease-in  flex justify-center items-center font-bold bg-yellow rounded-full bg-gradient-to-r from-yellow to-light-yellow cursor-pointer`}
      >
         <div className={`w-20 h-20 sm:w-28 sm:h-28 ${pathname === '/game' ? 'xl:w-36 xl:h-36' : '  '}   flex justify-center items-center bg-white rounded-full`}>
            <Image src={Scissors} alt="scissors" />
         </div>
      </div>)
}

export default ScissorsButton