import React, { Component } from 'react'

 class Test extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    

    incrementCount = () => {
        this.setState( prevState => {
           return { count : prevState.count + 1 }
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <p>Count  {count}</p>
                <button onClick={this.incrementCount}>Count</button>
            </div>
        )
    }
}

export default Test
