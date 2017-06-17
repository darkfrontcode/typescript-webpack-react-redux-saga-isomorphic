import * as axios from 'axios'

export function fetchFriends()
{
	const link = null

	return function(dispatch)
	{
		axios.get(link)
			.then(response => {
				dispatch({type: 'FETCH_FRIENDS_FULFILLED', payload: response.data})
			})
			.catch(err => {
				dispatch({type: 'FETCH_FRIENDS_REJECTED', payload: err})
			})
	}
}