import React from "react"; //import react libarary from package.json

class CounterClass extends React.Component{
    constructor(){
        super();
        this.increment = this.increment.bind(this) //bind the function
        this.state = {
            number: 0 //default value
        }

    }
    increment() {
        this.setState({
            number: this.state.number + 1 
            //number : ++this.state.number only pre increment
        })
    }

    render() {
        return (
            <div> 
                <h1>Class based Component</h1>
               <h2>Counter = {this.state.number}</h2> 
               <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

//export class component
export default CounterClass;