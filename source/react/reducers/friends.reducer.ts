const initState = new Object({
	friends: new Array(),
	fetching: false,
	fetched: false,
	error: null
})

export default function(state=initState, action)
{
	switch(action.type)
	{
		case 'FETCH_FRIENDS' : {
		
			return{ 
				...state,
				fetching: true
			}

		}
		case 'FETCH_FRIENDS_REJECTED' : {
		
			return{
				...state,
				fetching: false,
				error: action.payload
			}

		}
		case 'FETCH_FRIENDS_FULFILLED' : {
		
			return{
				...state,
				fetching: false,
				fetched: true,
				tweets: action.payload
			}

		}

		default: return state
	}
}