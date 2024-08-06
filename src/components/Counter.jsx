import React, { useEffect, useState } from "react";

const Counter = () => {
    // let count = 0
    // const increment = () => {
    //     count++;
    //     console.log(count);
    // }
    const [count, setCount] = useState(0) 
    const [count2, setCount2] = useState(0) 

    const increment = () => {
        // setCount(count + 1)     //}
        // // setCount(count + 1)  //} => this will increment to 1
        // // setCount(count + 1)  //}
        setCount((prev) => prev + 1); 
        // setCount((prev) => prev + 1); // any name can be given
        // setCount((prev) => prev + 1); // this will increment to 3
    }

    useEffect(()=>{
        if(count === 5 ){
            console.log("count reached its limit")
        }
    },[count])

    const decrement = () => {
        if (count > 0){  
            setCount(count - 1) 
        } else {
            alert("Counter cannot go below 0") 
        } 
    }

    const clear = () => {
        setCount(0)  
    }

    const increment2 = () => {
        // setCount(count + 1)     //}
        // // setCount(count + 1)  //} => this will increment to 1
        // // setCount(count + 1)  //}
        setCount2((prev) => prev + 1); 
        // setCount((prev) => prev + 1); // any name can be given
        // setCount((prev) => prev + 1); // this will increment to 3
    }

    const decrement2 = () => {
        if (count > 0){  
            setCount2(count - 1) 
        } else {
            alert("Counter cannot go below 0") 
        } 
    }

    const clear2 = () => {
        setCount2(0)  
    }

    return(
        <>
        <div>Counter 1</div>
        <div>{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {/* {count === 0 ? null : <button onClick={clear}>clear</button>} */}
        {count !== 0 && <button onClick={clear}>clear</button>}
        <hr/>
        <div>Counter 2</div>
        <div>{count2}</div>
        <button onClick={increment2}>+</button>
        <button onClick={decrement2}>-</button>
        {count2 !== 0 && <button onClick={clear2}>clear</button>}
        </>
    )
}

export default Counter;