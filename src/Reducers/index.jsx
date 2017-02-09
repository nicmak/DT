import {combineReducers} from 'redux'
import DialogReducer from './DialogReducer'
import childReducer from './childrenReducer'
import { reducer as formReducer} from'redux-form'
import {EditProfileReducer,selectFieldReducer} from './EditProfileReducer'

export default combineReducers({
	
	Dialog:DialogReducer,
	childReducer: childReducer, 
	EditProfileReducer: EditProfileReducer,
	form:formReducer

})