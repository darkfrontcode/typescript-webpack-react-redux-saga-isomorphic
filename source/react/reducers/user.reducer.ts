const initState = new Object({
	user: {
		id: null,
		name: null,
		age: null
	},
	fetching: false,
	fetched: false,
	error: null
})

export default function(state=initState, action)
{
	switch(action.type)
	{
		case 'FETCH_USER' : {
		
			return{ 
				...state,
				fetching: true
			}

		}
		case 'FETCH_USER_REJECTED' : {
		
			return{
				...state,
				fetching: false,
				error: action.payload
			}

		}
		case 'FETCH_USER_FULFILLED' : {
		
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