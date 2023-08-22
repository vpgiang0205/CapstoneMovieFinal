import * as actions from 'redux/types/_constants';

const initialState = {
    loading: false,
    data: null,
    error: null,
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REGISTER_REQUEST: {
            state.loading = true
            state.data = null
            state.error = null
            return { ...state }
        }

        case actions.REGISTER_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }

        case actions.REGISTER_FAIL: {
            state.loading = false
            state.data = null
            state.error = action.payload
            console.log(action.payload);
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default registerReducer