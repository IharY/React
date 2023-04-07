import React from 'react';
import classes from './MyButton.module.css';
// import './MyButton.module.css';


const MyButton = ({children, ...props}) => {
    return (
        // получаем стиль как свойство объека
        <button {...props} className={classes.myBtn}>
            {children}
        </button>

    // <button className="myBtn">
    //     {props.children}
    // </button>
    );
};

export default MyButton;