import { useContext } from "react"
import { CounterContext } from "./CounterContext"

function FComponent() {
    const {counter, setCounter }=useContext(CounterContext);
    return (
        <div className="border">
            <h1>
                Function Component
            </h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <h2>{counter}</h2>
            <hr></hr>
            <FChild/>
        </div>
    )
}

const FChild = () => {
    const {counter, setCounter }=useContext(CounterContext);
    return (
        <div className="border">
            <h1>
                Function Child Component
            </h1>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <h2>{counter}</h2>
        </div>
    )
}

export default FComponent;