import {
    SET_MENU,
    CHANGE_WIDTH,
    WARNING_LOGIN,
    USER_LOGIN,
    SET_USERNAME_INPUT,
    SET_PASSWORD_INPUT,
    SET_REPASSWORD_INPUT,
    SET_CHECK_USER_VALID,
    SET_CHECK_PASS_VALID,
    SET_CHECK_REPASS_VALID,
    SET_CHOOSE_MOVIE_ID,
    SET_MOVIE_DETAIL,
    SET_PRODUCT_DETAIL,
    SET_CART_PRODUCT,
    SET_LASTNAME_INPUT,
    SET_FIRSTNAME_INPUT,
    SET_EMAIL_INPUT,
    SET_CHECK_lASTNAME_VALID,
    SET_CHECK_FIRSTNAME_VALID,
    SET_CHECK_EMAIL_VALID,
} from './Constants';

export const setUserNameInput = (payload) => ({
    type: SET_USERNAME_INPUT,
    payload,
});
export const setLastNameInput = (payload) => ({
    type: SET_LASTNAME_INPUT,
    payload,
});
export const setFirstNameInput = (payload) => ({
    type: SET_FIRSTNAME_INPUT,
    payload,
});
export const setEmailInput = (payload) => ({
    type: SET_EMAIL_INPUT,
    payload,
});
export const setPasswordInput = (payload) => ({
    type: SET_PASSWORD_INPUT,
    payload,
});
export const setRePasswordInput = (payload) => ({
    type: SET_REPASSWORD_INPUT,
    payload,
});
export const setCheckUserValid = (payload) => ({
    type: SET_CHECK_USER_VALID,
    payload,
});
export const setCheckLastNameValid = (payload) => ({
    type: SET_CHECK_lASTNAME_VALID,
    payload,
});
export const setCheckFirstNameValid = (payload) => ({
    type: SET_CHECK_FIRSTNAME_VALID,
    payload,
});
export const setCheckEmailValid = (payload) => ({
    type: SET_CHECK_EMAIL_VALID,
    payload,
});

export const setCheckPassValid = (payload) => ({
    type: SET_CHECK_PASS_VALID,
    payload,
});
export const setCheckRePassvalid = (payload) => ({
    type: SET_CHECK_REPASS_VALID,
    payload,
});
export const setUserLogin = (payload) => ({
    type: USER_LOGIN,
    payload,
});
export const setWarningLogin = (payload) => ({
    type: WARNING_LOGIN,
    payload,
});
export const setChangrWidth = (payload) => ({
    type: CHANGE_WIDTH,
    payload,
});
export const setChooseMovieId = (payload) => ({
    type: SET_CHOOSE_MOVIE_ID,
    payload,
});
export const setMovieDetail = (payload) => ({
    type: SET_MOVIE_DETAIL,
    payload,
});
export const setMenu = (payload) => ({
    type: SET_MENU,
    payload,
});
export const setCartProduct = (payload) => ({
    type: SET_CART_PRODUCT,
    payload,
});
