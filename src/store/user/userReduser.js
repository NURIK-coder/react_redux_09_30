const initialState = {
    userData: {
        first_name: '',
        email: ''
    }
}

export const userReduser = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_USER': 
            return {...state, userData: action.payload}
        default:
            return state
    }

}