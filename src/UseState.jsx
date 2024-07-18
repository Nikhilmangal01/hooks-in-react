import {useState} from 'react'

const UseState = () => {
       const[count,setCount] = useState(0)
    //    console.log(count);
    

       const handelIncrement=()=>{
        setCount(count+1)
       }
       const handelDecrement=()=>{
        setCount(count-1)
       }

    return (
        <div> 
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>DECREMENT</button>



        </div>
      )
}

export default UseState