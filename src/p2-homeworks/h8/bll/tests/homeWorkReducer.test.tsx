import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(66).toBe(newState[0].age)
    expect("Дмитрий").toBe(newState[2].name)
    expect(3).toBe(newState[5].age)
    expect(6).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(3).toBe(newState[0].age)
    expect("Ирина").toBe(newState[2].name)
    expect(44).toBe(newState[4].age)
    expect(6).toBe(newState.length)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    expect(44).toBe(newState[1].age)
    expect("Дмитрий").toBe(newState[2].name)
    expect(55).toBe(newState[3].age)
    expect(4).toBe(newState.length)
})
