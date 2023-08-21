import * as actions from 'redux/types/_constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const theaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HOME_THEATER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.HOME_THEATER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.HOME_THEATER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default theaterReducer