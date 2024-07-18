import React from 'react'
import FunCompOne from './FunCompOne'
import FunCompTwo from './FunCompTwo'
import { useState } from 'react'

const ToggleFunc = () => {
    const [funcOne,setfuncOne] = useState(false);
    const [funcTwo,setfuncTwo] = useState(false);  




  return (
    <div>
        <button onClick={()=>setfuncOne(!funcOne)}></button>
        <button onClick={()=>setfuncTwo(!funcTwo)}></button>
        {FunCompOne ? funcOne:null}
        {FunCompTwo ? funcTne:null}


    </div>
   

  )
}

export default ToggleFunc