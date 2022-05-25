import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value: string) => void // need to fix any
    setName: (value: string) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, setName, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onEnter = () => {
        alert(`Hello ${name} !`)
    }

    // const inputClass = (name === '') ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <SuperInputText onChangeText={setNameCallback} onEnter={onEnter}/>
            <SuperButton onClick={addUser}>
                add
            </SuperButton>
            <span>{totalUsers}</span><br/>
            <span>{error}</span>
        </div>
    )
}

export default Greeting
