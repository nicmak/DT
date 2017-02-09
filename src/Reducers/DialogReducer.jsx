


const DialogReducer = (state = {open:false}, action) => {
	switch(action.type) {
		case 'OPEN_SIGNIN_DIALOG': {
			return {...state, open:true}
		}
		case 'CLOSE_SIGNIN_DIALOG': {
			return {...state, open:false}
		}
		case 'OPEN_REGISTER_DIALOG': {
			return {...state, openReg:true}
		}
		case 'CLOSE_REGISTER_DIALOG': {
			return {...state, openReg:false}
		}
	}
	return state;
} 
export default DialogReducer; 
