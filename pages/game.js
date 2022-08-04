import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useReducer, useSelector } from 'react'
import { selectChoose, setChoose } from '../redux/slices/playSlice'

function Game() {

  const choose = useSelector(selectChoose)

  const [house, setHouse] = useState('')
  const [playerWin, setPlayerWin] = useState('')

  const newHousePick = () => {
    const choises = ['rock', 'paper', 'scissors'];
    setHouse(choises[Math.floor(Math.random() * 3)])
  }

  useEffect(() => {
    newHousePick()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Layout>
        My Choise: { choose }
        Home Choose: { house }
      </Layout>
    </>
  )
}

export default Game