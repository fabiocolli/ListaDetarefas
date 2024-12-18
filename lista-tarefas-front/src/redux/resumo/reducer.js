const initialState = {
    tarefas: null,
}

const resumoReducer = (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_RESUMO') {
        return {
            ...state,
            tarefas: action.payload,
        }
    }

    return state;
}

export default resumoReducer;