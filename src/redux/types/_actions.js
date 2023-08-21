import * as actions from "redux/types/_constants"
import api, { groupid } from 'apiUtil'

// action get list Carousel
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

// action get list theater
export const actTheater = () => {
    return (dispatch) => {
        dispatch(actTheaterRequest)

        api.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupid}`)
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

// action get list movie
export const actListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest())

        api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${groupid}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListMovieSuccess(result.data.content))
                }
            })
            .catch((error) => {
                actListMovieFail(error)
            })
    }
}

const actListMovieRequest = () => { return { type: actions.MOVIE_REQUEST } }
const actListMovieSuccess = (data) => { return { type: actions.MOVIE_SUCCESS, payload: data } }
const actListMovieFail = (error) => { return { type: actions.MOVIE_FAIL, payload: error } }


// action Get detail:
export const actMovieItemDetail = (id) => {
    return (dispatch) => {
        dispatch(actMovieItemDetailRequest)
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const movieDetails = result.data.content;

                    api.get(`QuanLyRap/LayThongTinLichChieuPhim?maPhim=${id}`)
                        .then((showtimesResult) => {
                            if (showtimesResult.data.statusCode === 200) {
                                const movieShowTimes = showtimesResult.data.content;

                                dispatch(actMovieItemDetailSuccess({ movieDetails, movieShowTimes }));
                            }
                        })
                        .catch((error) => {
                            dispatch(actMovieItemDetailFail(error));
                        });
                }
            })
            .catch((error) => {
                dispatch(actMovieItemDetailFail(error));
            });
    }
}

const actMovieItemDetailRequest = () => {return {type: actions.MOVIEITEM_REQUEST}}
const actMovieItemDetailSuccess = (data) => {return {type: actions.MOVIEITEM_SUCCESS,payload: data}}
const actMovieItemDetailFail = (error) => {return {type: actions.MOVIEITEM_FAIL,payload: error}}