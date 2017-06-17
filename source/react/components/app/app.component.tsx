import * as React from 'react'
import { connect } from 'react-redux'

// actions
import { fetchUser } from '../../actions/user.actions'
import { fetchFriends } from '../../actions/friends.actions'

@connect((store) => {
	return {
		user: store.user,
		friends: store.friends
	}
})
export default class App extends React.Component<any, any>
{

	componentWillMount()
	{
		this.props.dispatch(fetchUser())
	}

	fetchFriends()
	{
		this.props.dispatch(fetchFriends())
	}

	public render() : JSX.Element
	{
		const { user, friends } = this.props

		if(!friends.length)
		{
			return <button onClick={this.fetchFriends.bind(this)}>Load Friends</button>
		}

		const friendList = friends.map(friend => <li>{friend.name}</li>)

		return 	<div className="app">
					<h1>{user.name}</h1>
					<ul>{friendList}</ul>
				</div>
	}
}