const initialState = {
    isAuthenticated: false,
    user: {},
    hello: 'test redux'
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}