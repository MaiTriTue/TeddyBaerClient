import cookies from 'react-cookies';
// import images from '../assets/images';

import { SET_MENU } from './Constants';

const initState = {
    menu: '',
};

function reducer(state, action) {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.payload,
            };

        default:
            throw new Error('Invalid action');
    }
}

export { initState };
export default reducer;
