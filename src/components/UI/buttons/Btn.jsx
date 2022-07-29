import React from "react";
import classes from './Btn.module.scss'
const Btn = (params) => {
    return (
        <button {...params} className={classes.Btn}></button>
    )
}
export default Btn