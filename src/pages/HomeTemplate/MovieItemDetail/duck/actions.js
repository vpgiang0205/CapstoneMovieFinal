import * as actions from './constants'
import api from 'apiUtil'

export const actMovieItemDetail = (id) => {
    return (dispatch) => {
        dispatch(actMovieItemDetailRequest)

        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
        .then((result)=> {
            if (result.data.statusCode === 200) {
                // console.log(result.data.content)
                dispatch(actMovieItemDetailSuccess(result.data.content))
            }
        })
        .catch((error) => {
            actMovieItemDetailFail(error)
        })
    }
}

const actMovieItemDetailRequest = () => {
    return {
        type: actions.MOVIEITEM_REQUEST
    }
}

const actMovieItemDetailSuccess = (data) => {
    
    return {
        type: actions.MOVIEITEM_SUCCESS,
        payload: data

    }
}

const actMovieItemDetailFail = (error) => {
    return {
        type: actions.MOVIEITEM_FAIL,
        payload: error
    }
}