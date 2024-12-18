const initialState = {
    currentResumo: null,
}

const resumoReducer = (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_RESUMO') {
        return {
            ...state,
            currentResumo: action.payload.resumo,
        }
    }

    return state;
}

export default resumoReducer;