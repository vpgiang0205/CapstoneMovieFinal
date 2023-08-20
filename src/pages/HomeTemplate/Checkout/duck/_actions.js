import { BOOKING_SHEAT_REQUEST, BOOKING_SHEAT_SUCCESS, BOOKING_SHEAT_FAIL } from './_constants';
import api from './../../../../apiUtil';

export const actFetchBookingSheat = (maLichChieu) => {
    return (dispatch) => {
        //pending
        dispatch(actBookingSheatRequest());
        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result)=>{
                if(result.data.statusCode === 200) {
                    dispatch(actBookingSheatSuccess(result.data.content));
                }
            })
            .catch((error)=>{
                dispatch(actBookingSheatFail(error))
            })
    }
};

const actBookingSheatRequest = () => {
    return {
        type: BOOKING_SHEAT_REQUEST,
    }
};
const actBookingSheatSuccess = (data) => {
    return {
        type: BOOKING_SHEAT_SUCCESS,
        payload: data,
    }
};
const actBookingSheatFail = (error) => {
    return {
        type: BOOKING_SHEAT_FAIL,
        payload: error,
    }
};