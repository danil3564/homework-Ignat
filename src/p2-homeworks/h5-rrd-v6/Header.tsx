import React from 'react'
import s from './HW5.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR}>junior</NavLink>
        </div>
    )
}

export default Header
