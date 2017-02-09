const childReducer = (state= {open:false, component:'Application'}, action) => {
	switch(action.type) {
		case 'TOGGLE_CHILDREN': {
			return {...state, 
				open:action.payload.open, 
				component:action.payload.component
			}
		}
	}
	return state;
}

export default childReducer