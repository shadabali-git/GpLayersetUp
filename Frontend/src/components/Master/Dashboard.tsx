import axios from "axios";

const Dashboard=()=>{
    const calling=async ()=>{
        const Data=await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(Data);
    }
    return (
        <>
            <h2> How to Do this </h2>
            <button onClick={calling}>Click Me</button>
        </>
    )
}

export default Dashboard;