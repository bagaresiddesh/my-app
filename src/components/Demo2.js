import { useEffect, useState } from 'react';

const Demo2 = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect(() => {
        console.log("Mounted/Updated");
        const interval = setInterval(showDate, 5000);

        return () => {
            console.log("Cleaned");
            clearInterval(interval);
        }
    }, [time]);

    const showDate = () => {
        setTime(new Date().toString());
    }

    return (
        <div>
            <div>{time}</div>
            <button onClick={showDate}>Show Date</button>
            <div>{message}</div>
            <button onClick={() => setMessage("Changed Functional Component")}>Change Message</button>
        </div>
    )
}

export default Demo2;