import { Component } from 'react'

export class Game extends Component
{
	public render() : HTMLElement
	{
		return
		(
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>
						{/* status */}
					</div>
					<ol>
						{/* TODO */}
					</ol>
				</div>
			</div>
		)
	}
}