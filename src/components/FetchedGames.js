import React, {Component} from 'react'

export default class FetchedGames extends Component {
    render() {
        const games = this.props.games
        const gamesToDisplay = games.map( game => {
            <li>Game created at: {game.created_at}</li>
        })
        debugger
        return (
            <ul>
                {this.props.games.map( game => <li key={game.id}>{game.created_at}</li>)}
            </ul>
        )
    }
}