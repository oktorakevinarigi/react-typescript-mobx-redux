import { useEffect, useState } from 'react'
import { RootStore, RootStoreProvider, setupRootStore } from "./models"
import './App.css';

import Home from './pages/Home/Home'

const App = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  useEffect(() => {
    setupRootStore().then(setRootStore)
  }, [])

  if (!rootStore) return null

  return (
    <RootStoreProvider value={rootStore}>
      <Home />
    </RootStoreProvider>
  );
}

export default App;
