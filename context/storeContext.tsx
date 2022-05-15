import React, { createContext, useReducer, Dispatch } from 'react'
import { ACTION } from './actions'
import { reducer } from './reducer'

import { DEFAULT_USER, User } from 'services/user'

export interface StoreType {
    profile: User
}

const INITIAL_STORE: StoreType = {
    profile: DEFAULT_USER,
}

export const RiseContext = createContext<{
    store: StoreType
    dispatch: Dispatch<{ action: ACTION; data: any }>
}>({
    store: INITIAL_STORE,
    dispatch: () => null,
})

interface RiseProviderProps {
    children: React.ReactElement
}

export const RiseProvider = ({ children }: RiseProviderProps) => {
    const [store, dispatch] = useReducer(reducer, INITIAL_STORE)

    return (
        <RiseContext.Provider value={{ store, dispatch }}>
            {children}
        </RiseContext.Provider>
    )
}
