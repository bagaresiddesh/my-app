import { useState,useMemo } from 'react';

const Demo4 = () => {
    const[counter,setCounter]=useState(1);
    const result= useMemo(() => {
        return factorial(counter);
    },[counter]) 
    //const result= factorial(counter);

    const [name,setName] = useState("");
    

    return (
        <div>
            <h1>Factorial of {counter} is: <span>{result}</span> </h1>
            <div>
                <button onClick={() => setCounter(counter-1)}>Decrement</button>
                <button onClick={() => setCounter(counter+1)}>Increment</button>
            </div>
            <hr/><hr/>
            <label>Enter Name</label>
            <input type="text"
                placeholder='enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>My name is {name}</p>

        </div>
    )

}

function factorial(n) {
    let i=0;
    while(i<200000000) i++;

    if(n < 0) {
        return -1;
    }
    if(n === 0)
    {
        return 1;
    }
    return n * (factorial(n-1));
}

export default Demo4;