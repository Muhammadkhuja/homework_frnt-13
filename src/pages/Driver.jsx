// import Recat from 'react'
import { useState } from 'react'
import First from '../components/First';
import { MyContext } from '../components/ContextApi';

const Driver = () => {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState()
    const [ligth, setLight] = useState()
    console.log('driver re-render');
  return (
    <MyContext.Provider value={{title: 'learn-context', count, setCount}}>
        <First/>
    </MyContext.Provider>
  )
}

export default Driver