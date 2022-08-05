/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setChoose, setReset } from '../redux/slices/playSlice'


// ICONS
import Triangue from '../public/images/bg-triangle.svg'
import Image from 'next/image'
import Link from 'next/link'
import PaperButton from './ButtonAction.js/PaperButton'
import ScissorsButton from './ButtonAction.js/ScissorsButton'
import RockButton from './ButtonAction.js/RockButton'


function MainButton() {

   const { push } = useRouter()
   const dispatch = useDispatch()

   const handleChoose = ({ target }) => {
      dispatch(setChoose(target.dataset.id))
      push('/game')
   }

   return (
      <>
         <div className='relative  flex justify-center items-center bottom-10 h-[90%]' >
            <div className='relative'>

               {/* Button paper */}

               <PaperButton handleChoose={handleChoose} />

               {/* Button scissors */}

               <ScissorsButton handleChoose={handleChoose} />

               {/* Button rock */}

               <RockButton handleChoose={handleChoose} />

               <div className='w-52 sm:w-96 '>
                  <Image src={Triangue} alt="triangue" className='absolute self-center z-0' />
               </div>

            </div>
         </div>

         <div className='absolute bottom-8 right-8 px-5 py-1 border-4 rounded-lg border-white  cursor-pointer text-white '>
            <Link href='/'>
               Rules
            </Link>
         </div>

         <div onClick={() => dispatch(setReset()) } className='absolute bottom-8 left-8 px-5 py-1 border-4 rounded-lg border-white  cursor-pointer text-white ' >
            <Link href='/'>
               Reset
            </Link>
         </div>
      </>
   )
}

export default MainButton