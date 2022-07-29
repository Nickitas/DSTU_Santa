import React from "react";
import classes from './Input.module.scss'
const Input = (params) => {
    return (
        <input {...params} className={classes.Input} />
    )
}
export default Input