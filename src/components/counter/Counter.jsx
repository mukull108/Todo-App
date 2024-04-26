import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton'

export default function Counter(){
    //array = [0,1]
    //const  count = array[0]
    //const  setCount = array[1];
    //const [count, setCount] = array
    const [count,setCount] = useState(0);

    function incrementCountParent(by){
        setCount(count + by)
    }
    function decrementCountParent(by){
        setCount(count - by)
    }
    function resetCounter(){
        setCount(0)
    }

    return(
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by = {1} 
                incrementCount = {incrementCountParent} 
                decrementCount = {decrementCountParent}/>
            <CounterButton by = {2} 
                incrementCount = {incrementCountParent} 
                decrementCount = {decrementCountParent}/>
            <CounterButton by = {5} 
                incrementCount = {incrementCountParent} 
                decrementCount = {decrementCountParent}/>
            <button className="resetButton" onClick={resetCounter}> Reset </button>
        </>
    
    )
}
