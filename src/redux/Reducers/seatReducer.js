import * as actions from 'redux/types/_constants'
const initStateGhe = {
    gheDaDatArr: [],
};
const seatReducer = (state = initStateGhe, action) => {
    switch (action.type) {
        case actions.SEAT_DATA:
            let { ...gheDaDatArr } = initStateGhe;
            //gheDaDatArr = gheDaDatArr.push(action.payload);
            console.log(typeof action.payload);
            return { ...state }
        default:
            return { ...state }
    }
}

export default seatReducer;
