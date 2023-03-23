import { useState } from "react";
import { CounterContext } from "./CounterContext";
import FComponent from "./FComponent";

const Demo6 = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <hr></hr>
            <CounterContext.Provider value={{counter, setCounter}}>
                <FComponent/>
                <hr></hr>
            </CounterContext.Provider>
        </div>
    )

}

export default Demo6;