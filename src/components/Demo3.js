import { useState, useRef } from 'react';

const Demo3 = () => {

    const[name, setName] = useState("");
    const inputEl = useRef("");
    //console.log(inputEl.current.value)
    
    const resetInput = () => {
        setName("");
        inputEl.current.focus();
        console.log(inputEl.current.value);
    }

    return (
        <div>
            <input 
                ref={inputEl}
                name="name"
                autoComplete='off'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={resetInput}>Reset</button>
        </div>
    )

}

export default Demo3;