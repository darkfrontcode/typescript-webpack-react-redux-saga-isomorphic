import * as axios from 'axios'

export function fetchFriends()
{
	return function(dispatch:any)
	{
		axios.get('/user')
			.then((response:any) => {
				dispatch({type: 'FETCH_FRIENDS_FULFILLED', payload: response.data})
			})
			.catch((err:any) => {
				dispatch({type: 'FETCH_FRIENDS_REJECTED', payload: err})
			})
	}
}