import { StoreType } from './storeContext'
import { ACTION } from './actions'

export const reducer = (
    currentState: StoreType,
    payload: { action: ACTION; data: any },
): StoreType => {
    switch (payload.action) {
        default:
            return currentState
    }
}
