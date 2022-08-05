import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { selectChoose, selectChooseMachine, selectPlayer, setAgainGame, setMachine, setPlayerDraw, setPlayerLose, setPlayerWin, setReset, } from '../redux/slices/playSlice'
import ScissorsButton from '../components/ButtonAction.js/ScissorsButton'
import RockButton from '../components/ButtonAction.js/RockButton'
import PaperButton from '../components/ButtonAction.js/PaperButton'
import { useRouter } from 'next/router'
import Confetti from 'react-confetti'
import Link from 'next/link'
import { Howl } from 'howler'



function Game() {

  const { push } = useRouter()
  const dispatch = useDispatch()
  const meChoose = useSelector(selectChoose)
  const chooseMachine = useSelector(selectChooseMachine)
  const playerWin = useSelector(selectPlayer)
  const [counter, setCounter] = useState(3)

  const newChooseMachine = () => {
    const choises = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
    const resp = choises[Math.floor(Math.random() * 9)]
    dispatch(setMachine(resp))  
  }




  useEffect(() => {
    newChooseMachine()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const result = () => {
    if (meChoose === 'rock' && chooseMachine === 'scissors') {
      dispatch(setPlayerWin('Win'))
    } else if (meChoose === 'rock' && chooseMachine === 'paper') {
      dispatch(setPlayerLose('Lose'))
    } else if (meChoose === 'scissors' && chooseMachine === 'paper') {
      dispatch(setPlayerWin('Win'))
    } else if (meChoose === 'scissors' && chooseMachine === 'rock') {
      dispatch(setPlayerLose('Lose'))
    } else if (meChoose === 'paper' && chooseMachine === 'rock') {
      dispatch(setPlayerWin('Win'))
    } else if (meChoose === 'paper' && chooseMachine === 'scissors') {
      dispatch(setPlayerLose('Lose'))
    } else {
      dispatch(setPlayerDraw('Draw'))
    }
  }

  useEffect(() => {

    const timer = counter > 0 ? setInterval(() => {

      setCounter(counter - 1)
    }, 1000) : result()

    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter, chooseMachine])

  const againGame = () => {
    dispatch(setAgainGame())
    push('/')
  }




  return (
    <>
      <Layout>

        <div className='h-[90%] max-w-6xl mx-auto pt-24'>
          {playerWin === 'Win' && ( <Confetti className='w-full h-screen' /> ) }    
          
          {
            playerWin === 'Win' && (
              <audio src='https://www.youtube.com/watch?v=OJmaBUfKOBY' />
            ) 
          }

          <div className='flex items-center text-white'>
            <div className='flex flex-1 flex-col justify-center items-center'>
              <div className='  w-20 h-20 md:w-28 md:h-28 xl:w-36 xl:h-36   rounded-full bg-dark-purple flex justify-center items-center'>
                <div className=''>
                  {meChoose === 'paper' && (<PaperButton />)}
                </div>

                <div className=''>
                  {meChoose === 'scissors' && (<ScissorsButton />)}
                </div>

                <div className=''>
                  {meChoose === 'rock' && (<RockButton />)}
                </div>
              </div>
              <p className='text-center mt-10 sm:mt-14 text-xs font-bold'>YOUR PICKED</p>

            </div>

            {counter == 0
              ? (
                <div className='  flex-1 text-white  w-44 mx-auto  md:block hidden '>

                  {playerWin === 'Win' && (<p className='text-4xl font-bold'>YOUR WIN</p>)}
                  {playerWin === 'Lose' && (<p className='text-4xl font-bold'>YOUR LOSE</p>)}
                  {playerWin === 'Draw' && (<p className='text-4xl font-bold'>DRAW</p>)}

                  <div
                    onClick={againGame}
                    className='w-[50%] py-3 mx-auto rounded-lg bg-white text-dark-purple mt-5 cursor-pointer hover:scale-105 active:scale-100 ease-in duration-150'
                  >
                    PLAY AGAIN
                  </div>
                </div>
              ) : null
            }

            <div className='flex flex-1   flex-col justify-center items-center'>
              <div className='w-20 h-20 md:w-28 md:h-28  rounded-full bg-dark-purple flex justify-center items-center'>
                {counter == 0
                  ? (
                    <>
                      <div className=''>
                        {chooseMachine === 'paper' && (<PaperButton />)}
                      </div>

                      <div className=''>
                        {chooseMachine === 'scissors' && (<ScissorsButton />)}
                      </div>

                      <div className=''>
                        {chooseMachine === 'rock' && (<RockButton />)}
                      </div></>

                  ) : (<div className='text-xl font-bold'>{counter}</div>)
                }
              </div>
              <p className='text-center mt-10 sm:mt-14 text-xs font-bold'>CPU PICKED</p>
            </div>
          </div>

          {counter == 0
            ? (
              <div className=' text-white  w-64 mx-auto mt-14 md:hidden'>

                {playerWin === 'Win' && (<p className='text-4xl font-bold'>YOUR WIN</p>)}
                {playerWin === 'Lose' && (<p className='text-4xl font-bold'>YOUR LOSE</p>)}
                {playerWin === 'Draw' && (<p className='text-4xl font-bold'>DRAW</p>)}

                <div
                  onClick={againGame}
                  className='px-8 py-3  mx-auto rounded-lg bg-white text-dark-purple mt-5 cursor-pointer hover:scale-105 active:scale-100 ease-in duration-150'
                >
                  PLAY AGAIN
                </div>
              </div>
            ) : null
          }

        </div>

        <div onClick={() => dispatch(setReset()) } className='absolute bottom-8 left-8 px-5 py-1 border-4 rounded-lg border-white  cursor-pointer text-white ' >
            <Link href='/'>
               Reset
            </Link>
         </div>

      </Layout>
    </>
  )
}

export default Game