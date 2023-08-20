import { BOOKING_SHEAT_REQUEST, BOOKING_SHEAT_SUCCESS, BOOKING_SHEAT_FAIL, ROOM_TICKET_DETAIL } from './_constants';
import {ThongTinLichChieu} from '../../../../_core/model/ThongTinPhongVe';
const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),
};
const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROOM_TICKET_DETAIL:
            state.chiTietPhongVe = action.chiTietPhongVe;
            return {...state};
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