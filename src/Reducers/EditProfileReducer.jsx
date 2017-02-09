export const EditProfileReducer = (state= {open:false}, action) => {
	switch(action.type) {
		case 'TOGGLE_EDITPROFILE': {
			return {...state, 
				open:!state.open 
			}
		}
	}
	return state;
}

export const selectFieldReducer = (state={value:0}, action) => {
	switch(action.type) {
		case 'SELECT_FIELD' : {
			return {
				...state,
				value: action.payload.value 
			}
		}
	}
	return state;
}