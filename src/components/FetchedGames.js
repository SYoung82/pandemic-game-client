import React, {Component} from 'react'

export default class FetchedGames extends Component {
    render() {
        
        return (
            <ul>
                {this.props.games.map( game => <li key={game.id}>{game.created_at}</li>)}
            </ul>
        )
    }
}