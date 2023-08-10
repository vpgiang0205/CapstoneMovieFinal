import * as actions from "./constants"
import api from "apiUtil"

export const actListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest())

        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
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

const actListMovieRequest = () => {
    return {
        type: actions.MOVIE_REQUEST
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: actions.MOVIE_SUCCESS,
        payload: data
    }
}

const actListMovieFail = (error) => {
    return {
        type: actions.MOVIE_FAIL,
        payload: error
    }
}