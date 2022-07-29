import React, { useState } from "react";
import santa from '../../img/santa.png'
import Btn from '../../components/UI/buttons/Btn'
import Input from '../../components/UI/inputs/Input'
import Modal from '../../components/modal/Modal'
import classes from './Main.module.scss'

const Main = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <main className={classes.main}>
                <img id={classes.mainSanta} src={santa} />
                <div className='content'>
                    <div className={classes.main_coll}>
                        <h1 className={classes.title}>Тайный Cанта</h1>
                        <p className={classes.disc}>Дарите подарки анонимно!</p>
                        <div className={classes.form_wrapp}>
                            <div className={classes.form}>
                                <h3>Заполните данные о себе</h3>
                                <Input placeholder="Введите ФИО" />
                                <Input placeholder="О себе" />
                                <Btn onClick={()=>{
                                    setVisible(true)
                                }} 
                                >Отправить подарок!</Btn>
                            </div>
                        </div>
                        <img id={classes.santa} src={santa} />
                    </div>
                </div>
            </main>
            <Modal setVisible />
        </>
    )
}
export default Main