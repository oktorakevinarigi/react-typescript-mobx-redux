
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { useStores } from "models/root-store/root-store-context"

const Home = () => {
  const { app } = useStores()

  useEffect(() => {
    app.fetchData()
  }, [app])

  const handlClick = () => {
    app.handleState('erik')
  }
  return (
    <div>
      Home saja {app.nama}
      <button onClick={handlClick}>Set Nama</button>
    </div>
  )
}

export default observer(Home)
