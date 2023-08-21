import * as actions from '../types/_constants'

const initialState = {
    loading: false,
    data: null,
    error: null
    //chiTietPhongVe: new ThongTinLichChieu(),
};
const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ROOM_TICKET_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case actions.ROOM_TICKET_DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case actions.ROOM_TICKET_DETAIL_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        default:
            return { ...state };

    }
};
export default QuanLyDatVeReducer;