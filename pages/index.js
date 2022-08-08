import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import MainButton from '../components/MainButton'
import { setReset } from '../redux/slices/playSlice'

export default function Home() {

  const dispatch = useDispatch()

  return (
    <>
      <Layout>
          <MainButton />   
      </Layout>

    </>
  )
}
