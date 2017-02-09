
export const Open_SignIn_Dialog = () => {
	return {
	  type:"OPEN_SIGNIN_DIALOG",
	  payload: {
	    open:true
	  }	
	}
}

export const Close_SignIn_Dialog = () => {
	return {
		type:"CLOSE_SIGNIN_DIALOG",
		payload: {
			open: false
		}
	}
}

export const Open_Register_Dialog = () => {
	return {
	  type:"OPEN_REGISTER_DIALOG",
	  payload: {
	    open:true
	  }	
	}
}

export const Close_Register_Dialog = () => {
	return {
		type:"CLOSE_REGISTER_DIALOG",
		payload: {
			open: false
		}
	}
}




