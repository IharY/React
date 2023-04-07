import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.increment.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    decrement(){
        this.setState({count: this.state.count - 1})
    }



    render (){
        return(
            <div>
            <h1>{this.state.count}</h1>


            {/*{с помощью фигурных скоблок можно добавить переменную в тег}*/}
            <button onClick={this.increment}>Increment</button>
            {/*В данном случае функция не вызывается а передается как ссылка поэтом уздесь нету () круглых скобок*/}
            <button onClick={this.decrement}>Decrement</button>

        </div>
        )

    }

}



export default ClassCounter;