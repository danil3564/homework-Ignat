import React from 'react'
import s from './Message.module.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: propsType) {
    return (
        <div className={s.all_messages}>
            <div className={`${s.message} ${s.columns}`}>
                <div className={`${s.col} ${s.left}`}>
                    <img src={props.avatar} alt="" />
                </div>
                <div className={`${s.col} ${s.right}`}>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.text}>{props.message}</p>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
