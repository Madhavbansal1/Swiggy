import { useEffect,useState } from 'react'
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="text-4xl font-bold text-gray-800">
                {time}
            </div>  
        </div>
        </>        
    )
}

export default Clock
