import React, {useState} from 'react';


const Counter = () => {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1)
    }

    return (


        <div>
            <h1>{count}</h1>


            {/*{с помощью фигурных скоблок можно добавить переменную в тег}*/}
            <button onClick={increment}>Increment</button>
            {/*В данном случае функция не вызывается а передается как ссылка поэтом уздесь нету () круглых скобок*/}
            <button onClick={decrement}>Decrement</button>

        </div>
    );
};

export default Counter;