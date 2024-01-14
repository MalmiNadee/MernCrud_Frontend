import React, {useState} from "react"; //import  react libarary from package.json

function CounterFunction() {
    //state define
    let [number,setNumber] = useState(0)

    function increment() {
        setNumber(++number)
    }
    return (
        <div>
            <h1>Functional Component</h1>
            <h2>Counter = {number}</h2>
            <button onClick={e =>increment()}>Increment</button>
        </div>
    )
}

//export functional component
export default CounterFunction;