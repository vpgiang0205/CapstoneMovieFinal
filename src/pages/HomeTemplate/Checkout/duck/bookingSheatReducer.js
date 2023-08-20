import { BOOKING_SHEAT_REQUEST, BOOKING_SHEAT_SUCCESS, BOOKING_SHEAT_FAIL } from './_constants';

const initialState = {
    chiTietPhongVe: {},
};
const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_SHEAT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case BOOKING_SHEAT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case BOOKING_SHEAT_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };

    }
};
export default QuanLyDatVeReducer;