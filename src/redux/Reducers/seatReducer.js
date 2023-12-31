import * as actions from 'redux/types/_constants';

const initStateGhe = {
    gheDaDatArr: [],
};

const seatReducer = (state = initStateGhe, action) => {
    switch (action.type) {
        case actions.SEAT_DATA:
            return {
                ...state,
                gheDaDatArr: [...state.gheDaDatArr, action.payload],
            };
        case actions.SEAT_REMOVE_DATA:
            return {
                ...state,
                gheDaDatArr: state.gheDaDatArr.filter(ghe => ghe.maGhe !== action.payload),
            };
        default:
            return state;
    }
};

export default seatReducer;
