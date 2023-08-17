import * as actions from './_constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const carouselReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.HOME_CAROUSEL_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.HOME_CAROUSEL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.HOME_CAROUSEL_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default carouselReducer