import React, { useState } from "react";
import Btn from '../UI/buttons/Btn'
import classes from './Modal.module.scss'

const Modal = () => {
    const [close, setClose] = useState(false)
    return (
        <div className={classes.fade_block} setClose>
            <div className={classes.modal_window}>
                <div className={classes.card}>
                    <h3 className={classes.card_header}>Вы должны подарить подарок:</h3>
                    <div className={classes.card_body}>
                        <p><span>ФИО:</span> Иванов Иван Иванович</p>
                        <p><span>О себе:</span> люблю пить пиво</p>
                        <Btn onClik={() => setClose(true)}>Понял!</Btn>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal