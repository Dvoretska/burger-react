import React from 'react';

import classes from './Button.css';


const button = (props) => (
    <button type={props.typeButton} onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')} disabled={props.disabled}>{props.children}</button>
);

export default button;