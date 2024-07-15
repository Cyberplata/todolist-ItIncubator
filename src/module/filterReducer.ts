import {FilterValuesType} from "../App";

type changeFilterActionType = {
    type: 'CHANGE-FILTER'
    payload: {
        filter: FilterValuesType
    }
}

export const filterReducer = (state: FilterValuesType, action: changeFilterActionType): FilterValuesType => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return action.payload.filter
        }
        default: {
            return state
        }
    }
}

export const changeFilterAC = (filter: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {
            filter
        }
    } as const
}