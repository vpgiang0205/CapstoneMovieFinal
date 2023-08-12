import * as actions from './constants'
import api from 'apiUtil'

export const actTheater = () => {
    return (dispatch) => {
        dispatch(actTheaterRequest)
        api.get(`QuanLyRap/LayThongTinHeThongRap`)
            .then((result) => {
                dispatch(actTheaterSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actTheaterFail(error))
            })
    }

}

const actTheaterRequest = () => ({ type: actions.THEATER_REQUEST })
const actTheaterSuccess = (data) => ({ type: actions.THEATER_SUCCESS, payload: data })
const actTheaterFail = (error) => ({ type: actions.THEATER_FAIL, payload: error })