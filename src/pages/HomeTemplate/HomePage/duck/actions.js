import * as actions from './constants'
import api from 'apiUtil'

export const actCarousel = () => {
    return (dispatch) => {
        dispatch(actCarouselRequest)
        api.get(`QuanLyPhim/LayDanhSachBanner`)
            .then((result) => {
                dispatch(actCarouselSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actCarouselFail(error))
            })

    }
}

const actCarouselRequest = () => ({ type: actions.HOME_CAROUSEL_REQUEST })
const actCarouselSuccess = (data) => ({ type: actions.HOME_CAROUSEL_SUCCESS, payload: data })
const actCarouselFail = (error) => ({ type: actions.HOME_CAROUSEL_FAIL, payload: error })

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

const actTheaterRequest = () => ({ type: actions.HOME_THEATER_REQUEST })
const actTheaterSuccess = (data) => ({ type: actions.HOME_THEATER_SUCCESS, payload: data })
const actTheaterFail = (error) => ({ type: actions.HOME_THEATER_FAIL, payload: error })

export const actTheaterAdress = (maHeThongRap) => {
    return (dispath) => {
        dispath(actTheaterAddressRequest)
        api.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
            .then((result) => {
                dispath(actTheaterAddressSuccess(result.data.content))
            })
            .catch((error) => {
                dispath(actTheaterAddressFail(error))
            })
    }
}


const actTheaterAddressRequest = () => ({ type: actions.HOME_THEATER_ADDRESS_REQUEST })
const actTheaterAddressSuccess = (data) => ({ type: actions.HOME_THEATER_ADDRESS_SUCCESS, payload: data })
const actTheaterAddressFail = (error) => ({ type: actions.HOME_THEATER_ADDRESS_FAIL, payload: error })



export const actTheaterMovie = (maHeThongRap) => {
    return (dispath) => {
        dispath(actTheaterMovieRequest)
        api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}`)
            .then((result) => {
                dispath(actTheaterMovieSuccess(result.data.content))
            })
            .catch((error) => {
                dispath(actTheaterMovieFail(error))
            })
    }
}


const actTheaterMovieRequest = () => ({ type: actions.HOME_THEATER_MOVIE_REQUEST })
const actTheaterMovieSuccess = (data) => ({ type: actions.HOME_THEATER_MOVIE_SUCCESS, payload: data })
const actTheaterMovieFail = (error) => ({ type: actions.HOME_THEATER_MOVIE_FAIL, payload: error })
