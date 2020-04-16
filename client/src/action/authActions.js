import { TEST_DISPATCH } from './types';
//REGISTER user


export const registerUser = (userData) => {
    return {
        type: TEST_DISPATCH,
        payload: userData
    }
}







