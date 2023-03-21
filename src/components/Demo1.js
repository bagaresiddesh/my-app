import { useState } from 'react';

const Demo1 = () => {
    const [name, setName] = useState("Siddesh");

    function ChangeName() {
        return setName("Bagare");
    }

    return (
        <div>
            Hello, {name}
            <button onClick={ChangeName}>Click Me</button>
        </div>
    )

}

export default Demo1;