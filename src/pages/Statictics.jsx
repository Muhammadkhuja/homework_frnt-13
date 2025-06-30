import React, { useCallback, useState } from 'react'
import {Test} from '@components'
const Statictics= () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('useCallback')
    const changeTitle =()=>{
        return title
    }
    const cashedFn = useCallback(changeTitle, [title])
  return (
    <div>
        <button type='primary' onClick={() =>setCount(prev => prev + 1)}>count: {count}</button>
        <h1>Statictics</h1>
        <button onClick={()=> setTitle('changed')}>change title</button>
        <Test title='memo' changeTitle={cashedFn}/>
    </div>
  )
}

export default Statictics