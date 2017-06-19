import { combineReducers } 	from 'redux'

// reducers
import tweets 				from './friends.reducer'
import user 				from './user.reducer'

export default combineReducers({ 
	tweets,
	user 
})