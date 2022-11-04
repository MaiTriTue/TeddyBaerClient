import cookies from 'react-cookies';
import images from '~/assets/images';
import {
    SET_USERNAME_INPUT,
    SET_PASSWORD_INPUT,
    SET_REPASSWORD_INPUT,
    SET_CHECK_USER_VALID,
    SET_CHECK_PASS_VALID,
    SET_CHECK_REPASS_VALID,
    USER_LOGIN,
    WARNING_LOGIN,
    CHANGE_WIDTH,
    SET_CHOOSE_MOVIE_ID,
    SET_MOVIE_DETAIL,
    SET_MENU,
    SET_CART_PRODUCT,
    SET_LASTNAME_INPUT,
    SET_FIRSTNAME_INPUT,
    SET_EMAIL_INPUT,
    SET_CHECK_lASTNAME_VALID,
    SET_CHECK_FIRSTNAME_VALID,
    SET_CHECK_EMAIL_VALID,
    SET_PRODUCT_DETAIL,
} from './Constants';

const initState = {
    userLogin: cookies.load('gbx-u'),
    warningLogin: false,
    userName: '',
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    rePassword: '',
    checkUserValid: '',
    checkLastNameValid: '',
    checkFirstNameValid: '',
    checkEmailValid: '',
    checkPassValid: '',
    checkRePassValid: '',
    changeWidth: 0,
    chooseMovieId: '',
    movieDetail: '',
    productDetail: '',
    menu: '',
    cartProduct: [...JSON.parse(localStorage.getItem('cartProduct'))],
};

function reducer(state, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userLogin: action.payload,
            };
        case WARNING_LOGIN:
            return {
                ...state,
                warningLogin: action.payload,
            };
        case SET_USERNAME_INPUT:
            return {
                ...state,
                userName: action.payload,
            };
        case SET_PASSWORD_INPUT:
            return {
                ...state,
                password: action.payload,
            };
        case SET_REPASSWORD_INPUT:
            return {
                ...state,
                rePassword: action.payload,
            };
        case SET_CHECK_USER_VALID:
            return {
                ...state,
                checkUserValid: action.payload,
            };
        case SET_CHECK_lASTNAME_VALID:
            return {
                ...state,
                checkLastNameValid: action.payload,
            };
        case SET_CHECK_FIRSTNAME_VALID:
            return {
                ...state,
                checkFirstNameValid: action.payload,
            };
        case SET_CHECK_EMAIL_VALID:
            return {
                ...state,
                checkEmailValid: action.payload,
            };

        case SET_CHECK_PASS_VALID:
            return {
                ...state,
                checkPassValid: action.payload,
            };
        case SET_CHECK_REPASS_VALID:
            return {
                ...state,
                checkRePassValid: action.payload,
            };
        case CHANGE_WIDTH:
            return {
                ...state,
                changeWidth: action.payload,
            };
        case SET_CHOOSE_MOVIE_ID:
            return {
                ...state,
                chooseMovieId: action.payload,
            };
        case SET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload,
            };
        case SET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
            };
        case SET_MENU:
            return {
                ...state,
                menu: action.payload,
            };
        case SET_CART_PRODUCT:
            return {
                ...state,
                cartProduct: action.payload,
            };
        case SET_LASTNAME_INPUT:
            return {
                ...state,
                lastName: action.payload,
            };
        case SET_FIRSTNAME_INPUT:
            return {
                ...state,
                firstName: action.payload,
            };
        case SET_EMAIL_INPUT:
            return {
                ...state,
                email: action.payload,
            };
        default:
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;
