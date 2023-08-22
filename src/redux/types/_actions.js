import api, { groupid } from 'apiUtil'
import * as actions from '../types/_constants'

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

const actMovieItemDetailRequest = () => { return { type: actions.MOVIEITEM_REQUEST } }
const actMovieItemDetailSuccess = (data) => { return { type: actions.MOVIEITEM_SUCCESS, payload: data } }
const actMovieItemDetailFail = (error) => { return { type: actions.MOVIEITEM_FAIL, payload: error } }

export const actAuth = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest())
        console.log(user);
        api.post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                const user = result.data.content

                // if (!(user.maLoaiNguoiDung === "QuanTri")) {
                //     // Show error
                //     const error = {
                //         response: {
                //             data: {
                //                 content: "Bạn không có quyền truy cập!"
                //             },
                //         },
                //     };
                //     return Promise.reject(error);
                // }

                // Lưu thông tin lên reducer
                dispatch(actAuthSuccess(user))

                // Lưu trạng thái đăng nhập
                localStorage.setItem("USER_LOGIN", JSON.stringify(user))

                // Chuyển hướng
                navigate("/", { replace: true })
            })
            .catch((error) => {
                dispatch(actAuthFail(error))
            })
    }
}

const actAuthRequest = () => { return { type: actions.AUTH_REQUEST } }
const actAuthSuccess = (data) => { return { type: actions.AUTH_SUCCESS, payload: data } }
const actAuthFail = (error) => { return { type: actions.AUTH_FAIL, payload: error, } }


// Lấy chi tiết phòng vé

export const layChiTietPhongVe = (maLichChieu) => {
    console.log(maLichChieu);
    return (dispatch) => {
        //pending
        dispatch(actBookingTicketRequest());
        api.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const { thongTinPhim, danhSachGhe } = result.data.content;
                    const thongTin = { thongTinPhim, danhSachGhe };
                    dispatch(actBookingTicketSuccess(thongTin));
                    //console.log(danhSachGhe);
                }
            })
            .catch((error) => {
                dispatch(actBookingTicketFail(error))
            })
    }
};

const actBookingTicketRequest = () => { return { type: actions.ROOM_TICKET_DETAIL_REQUEST, } };
const actBookingTicketSuccess = (data) => { return { type: actions.ROOM_TICKET_DETAIL_SUCCESS, payload: data, } };
const actBookingTicketFail = (error) => { return { type: actions.ROOM_TICKET_DETAIL_FAIL, payload: error, } };

// Register action
export const actRegister = (user, navigate) => {
    return (dispatch) => {
        dispatch(actRegisterRequest)


        api.post(`QuanLyNguoiDung/DangKy`, user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content
                    dispatch(actRegisterSuccess(user));
                    alert("Đăng ký thành công, chuyển về trang đăng nhập !")
                    navigate('/login-page')
                }
            })
            .catch((error) => {
                const errorData = error.response.data;
                dispatch(actRegisterFail(errorData.content));
            })
    }
}

const actRegisterRequest = () => { return { type: actions.REGISTER_REQUEST } }
const actRegisterSuccess = (data) => { return { type: actions.REGISTER_SUCCESS, payload: data } }
const actRegisterFail = (error) => { return { type: actions.REGISTER_FAIL, payload: error } }


export const actSeat = (ghe) => {
    return (dispatch) => {
        dispatch(actSeatData(ghe))
    }
}

const actSeatData = (data) => {
    return {
        type: actions.SEAT_DATA,
        payload: data,
    }
}

export const actRemoveSeat = (maGhe) => {
    return (dispatch) =>{
        dispatch(actSeatRemoveData(maGhe))
    }
}


const actSeatRemoveData = (data) => {
    return {
        type: actions.SEAT_REMOVE_DATA,
        payload: data,
    }
}