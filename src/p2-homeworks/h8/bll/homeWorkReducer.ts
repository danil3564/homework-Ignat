import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckAge18AT = {
    type: 'check'
    payload: 18
}

export const homeWorkReducer = (state: UserType[], action: SortAT | CheckAge18AT): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state.sort((a, b) => a.age - b.age)]
                : [...state.sort((a, b) => b.age - a.age)]
        }
        case 'check': {
            return [...state.filter(person => person.age >= 18)]
        }
        default: return state
    }
}